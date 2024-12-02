{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState, useEffect \} from 'react';\
\
const GoogleAdsCalculator = () => \{\
  const [cpc, setCpc] = useState('');\
  const [convRate, setConvRate] = useState('');\
  const [budget, setBudget] = useState(1000);\
  const [clicks, setClicks] = useState(0);\
  const [conversions, setConversions] = useState(0);\
\
  useEffect(() => \{\
    if (cpc && convRate && budget) \{\
      const estimatedClicks = Math.floor(budget / parseFloat(cpc));\
      const estimatedConversions = Math.round((estimatedClicks * (parseFloat(convRate) / 100)) * 100) / 100;\
      \
      setClicks(estimatedClicks);\
      setConversions(estimatedConversions);\
    \}\
  \}, [budget, cpc, convRate]);\
\
  return (\
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-white" style=\{\{ backgroundColor: '#141517' \}\}>\
      <div className="text-center mb-8">\
        <p className="text-gray-300">\
          Enter your average CPC and conversion rate, then adjust the budget slider to see potential campaign performance.\
        </p>\
      </div>\
\
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">\
        <div className="space-y-2">\
          <label className="block text-sm font-medium text-gray-300">Average CPC ($)</label>\
          <input\
            type="number"\
            value=\{cpc\}\
            onChange=\{(e) => setCpc(e.target.value)\}\
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-orange-300 focus:border-transparent"\
            placeholder="Enter average CPC"\
            step="0.01"\
            min="0"\
          />\
        </div>\
        <div className="space-y-2">\
          <label className="block text-sm font-medium text-gray-300">Average Conversion Rate (%)</label>\
          <input\
            type="number"\
            value=\{convRate\}\
            onChange=\{(e) => setConvRate(e.target.value)\}\
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-orange-300 focus:border-transparent"\
            placeholder="Enter conversion rate"\
            step="0.01"\
            min="0"\
            max="100"\
          />\
        </div>\
      </div>\
\
      <div className="mb-8 space-y-4">\
        <div className="flex justify-between items-center">\
          <label className="block text-sm font-medium text-gray-300">Monthly Budget: $\{budget.toLocaleString()\}</label>\
        </div>\
        <input\
          type="range"\
          min="100"\
          max="50000"\
          step="100"\
          value=\{budget\}\
          onChange=\{(e) => setBudget(Number(e.target.value))\}\
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"\
        />\
        <div className="flex justify-between text-xs text-gray-400">\
          <span>$100</span>\
          <span>$50,000</span>\
        </div>\
      </div>\
\
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\
        <div className="p-6 bg-gray-800 rounded-lg text-center">\
          <h4 className="text-sm font-medium text-gray-300 mb-2">Forecasted Monthly Clicks</h4>\
          <p className="text-3xl font-bold" style=\{\{ color: '#ff9270' \}\}>\
            \{clicks.toLocaleString()\}\
          </p>\
        </div>\
        <div className="p-6 bg-gray-800 rounded-lg text-center">\
          <h4 className="text-sm font-medium text-gray-300 mb-2">Forecasted Monthly Conversions</h4>\
          <p className="text-3xl font-bold" style=\{\{ color: '#ff9270' \}\}>\
            \{conversions.toLocaleString()\}\
          </p>\
        </div>\
      </div>\
\
      <div className="mt-6 text-sm text-gray-400 text-center">\
        <p>*Forecasts are based on provided average metrics and may vary based on actual campaign performance.</p>\
      </div>\
    </div>\
  );\
\};\
\
export default GoogleAdsCalculator;}