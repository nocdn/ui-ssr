"use client"

import { Triangle } from "lucide-react"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import { useState } from "react"

export function TrafficLights() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="flex w-fit gap-1 rounded-full bg-white p-2 shadow-sm"
    >
      <MotionConfig transition={{ duration: 0.4, type: "spring" }}>
        <motion.div
          layout
          className="flex items-start rounded-full"
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: expanded ? "#FF0C19" : "#E07365",
            height: expanded ? "25px" : "10px",
            width: expanded ? "25px" : "10px",
            margin: expanded ? "2px 4px 2px 2px" : "0",
          }}
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="relative grid h-full w-full place-content-center"
              >
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  animate={{ width: expanded ? "8px" : "2px" }}
                  className="absolute top-1/2 left-1/2 h-[1.35px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-[#66040A]"
                />
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  animate={{ width: expanded ? "8px" : "2px" }}
                  className="absolute top-1/2 left-1/2 h-[1.35px] -translate-x-1/2 -translate-y-1/2 rotate-135 rounded-full bg-[#66040A]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout
          className="rounded-full"
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: expanded ? "#FEC901" : "#EEC161",
            height: expanded ? "25px" : "10px",
            width: expanded ? "25px" : "10px",
            margin: expanded ? "2px 0 2px 0" : "0",
          }}
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="grid h-full w-full place-content-center"
              >
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  animate={{ width: expanded ? "8px" : "2px" }}
                  className="h-[1.35px] rounded-full bg-[#655000]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout
          className="flex items-center justify-center rounded-full"
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: expanded ? "#00CA47" : "#79C360",
            height: expanded ? "25px" : "10px",
            width: expanded ? "25px" : "10px",
            margin: expanded ? "2px 2px 2px 4px" : "0",
          }}
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="flex -rotate-45 flex-col items-center justify-center -space-y-[1.2px]"
              >
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  initial={{ scale: 0.7, translateY: "2px" }}
                  animate={{
                    width: expanded ? "8px" : "4px",
                    scale: 1,
                    translateY: 0,
                  }}
                  className="flex items-center justify-center"
                >
                  <Triangle stroke="#02812E" size={7} fill="#02812E" className="block scale-y-70" />
                </motion.div>
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  initial={{ scale: 0.7, translateY: "2px" }}
                  animate={{
                    width: expanded ? "8px" : "2px",
                    scale: 1,
                    translateY: 0,
                  }}
                  className="flex rotate-180 items-center justify-center"
                >
                  <Triangle stroke="#02812E" size={7} fill="#02812E" className="block scale-y-70" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </MotionConfig>
    </div>
  )
}
