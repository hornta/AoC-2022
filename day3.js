function day3(input) {
  const lower = "abcdefghijklmnopqrstuvwxyz"
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  function getScore(itemType) {    
    if(lower.includes(itemType)) {
      return lower.indexOf(itemType) + 1
    } else {
      return UPPER.indexOf(itemType) + lower.length + 1
    }
  } 
  const rucksacks = input.split("\n");
  let sum=0;
  for(const rucksack of rucksacks) {
    const comp1 = rucksack.slice(0, rucksack.length / 2);
    const comp2 = rucksack.slice(rucksack.length / 2);

    for(const item of comp2) {
      if(comp1.includes(item)) {
        sum += getScore(item)
        break;
      }
    }
  }
  console.log(sum)
  
  let sum2 = 0;
  for(let i = 0; i < rucksacks.length; i += 3) {
    const group = rucksacks.slice(i, i + 3)
    for(const item of group[0]) {
      if(group[1].includes(item) && group[2].includes(item)) {
        sum2 += getScore(item)
        break;
      }
    }
  }

  console.log(sum2)
}

const input = `RCMRQjLLWGTjnlnZwwnZJRZH
qnvfhpSbvSppNddNdSqbbmmdPrwttJVrVPDVrJtHtwPZhrPJ
BFpFzSSqSFFSvQsnWgCMjTLzng
DbWVcVRRdlLffvtqjTWNgQ
mJJMpsmrMrJSHJpsHrFHvBvgHvqfNvzffgTvfj
mMhPjmjmFPJhMSGGcDRlwRdcLGPc
qFcbmWFJqqWpRJcQWpqsQQQwSPCPrHRHCPdNZtSrSHwrNZ
jGMjGLhhhgTvghgtGVjnNCrPVwZSZffSNSwHZZdH
DvzDlvvhnjlMlglglGGhDLpqqcJWWtsmszpWbBBBmQmb
SPLPHQbJSbPsvTLmfDvVDctvWhcDlD
jdRRzzGgJqwrpMRMgdjlcVcWqfWWlfDlmmlWhB
rwgRGdpGprNNLQLsbZJPsn
GZhTVLztHrSzrRBz
MJWjMvsfSCLSnrJn
MjglcgWMdccvZGFtTDchLLLh
rgDHBgBjRgRTgwzwthBnQwmBtB
MsMpSfMsTGTFFLdFFFMFsnNmthNnzhthtwmWnznz
pZMpJdvJMGRHVJJTVHjb
TQVqZVBcBBdBfbpN
zvzrtCshrntCHslPMMMFpZHbNSpb
hLWhGLttsvLvrrWvhzVmQgwJZTRcggTjGcgT
SqRGLHtSbtNTbhjFTjDDpF
WwgJgmdmMdwPDVQQBBhSBFwV
JMPlmlSldWZmRqtLsRGRtvls
mZvmvPNmlNJPJzzmgNvNgdqqdBSpfHBqSsHqHfwpsffq
nhDQDrwLrVVnqfGnsBGBGGsH
VjCDMhbDjLjtFhtLhLhQjNZcZPwWWcczmvglgJJN
wwqnwZGGZqqMpMprpZqwGlLDtNDffdBdNVBmNGBN
TSTchTFbRLfLmVhNDm
SCLRvJQvRFTSRjqMqPZrZnrzZzjp
cJfqGjgGJcsgsPnghgBm
FHHbQQHLWLbPQThqQQRnZs
lLLMSCvrlFMwlSlFcNwqDVVpJcfjzVDf
cRdRDhsDFzPztwJdGP
CVqpCqCgSNfCSQBpjtBwtlBBHLlmGjGG
qfQfCVQfgQnVNpQCMqfcrFrwWDhrDnsvcRDsbc
nFWWzqWZQSqnJzNJzslJVsdV
vBBvsLvbBmBmRlGTNJJvRRTD
tBbpmmPwCmHpMHHMrPCCcSnZSgcFcZgWFscSfgth
LLssTJrqrpvrvvpJvdjggMlgzVgVggPlFPqz
HwZwCZfHNtbMzjgVnFPC
RSttfRwZDtBcZwQMQdrQsdTBQQmW
lJnNhMJqljlNhSrdWlGGGQHwwH
vbTpbCsTFCTmbSmcRfVCfRpwcPdwWQQrdwHwBHrPdwrLLB
sVTmDfmCTVmJjgSzzntDtt
DQtMjZHZHvMbwwTSpqLtpJ
FzVFlsNdVczWPzWcslVfSLqLsqJpSwwsJswLrf
dNFFWcmzWFGLWcdcFgvZvvRHQvjMHDMBGD
MVPTmPvbMgrTmmmmMRMvPvBwFGhhDCdFFwLCLdJhDGFRhG
fqqWfpZWzWsDwhwdhwqGLD
ZWSSftStnnplcQLSbVMBvTbrMlbrBvvl
FSsHDmtFLbbFbLGg
vrvzTzWzzzvppzSzTMnfTggjVgbgjbLjgPPnbGbVGL
pdMwrBpfwfSMTTWdMTpBDCBtmsmltslcBDCshDHs
RgbmfGtmRVgLLSVSnSrWWSHhnh
ccTvlvNppsFnbFnhnWnPHJ
pqNjDBjNNjvpZfmtjbCLbCmb
qsSVpSVfWqgNrVtWptpmSfqbPQljbHPHlDnljRSlwSnwQn
dcGBrMFMdLTGGdlwDwMRHwwMbjHP
CFBvhFhTLFCGvFchChBdBTJtsNpWqfVgtszprmVWNqNgvV
sjsTgNSNqSjgMmVPmmmrpH
RftCcWddRCZfPtCfcQZdcZDcrBllBFpVHprHWlHHpHJJmlFp
thPZRtLcDRdDCTTsqbnwjhvNjq
TQPtgfgdPcdSQhjwHhHBLS
RrqCqVVbJmVRJmsrzmJpWljlSHLSBwSSRWllWv
CVrDNbHrJHVMCbrDJsdFdFcPFZngMfFdTPfP
NNlZgndqmGVGGVZNWQmWmbhbbhpbbhtCbhtgCpCtMF
THfLPTzwJTJrvHRwwsbFbhfbMCpphVtBbB
RjrvzHLzPDvLzPHrTJVrwPndZQNlDZGndZWDdNNcmlQq
tjDsjDGtTjVVbQVCggvrbg
qrWWRBllRFrdlSMCdbSJCP
cZcncRnhphpZWRNtrmsrGpHffmwH
qpRjdcqTcMbbMRTwtnplnwnhPzhBhw
FSFLvNrsPNrsGSLsrFSGfnwBQwZnZwhQQLwwQhnn
sWNVmVmCFNWGsCrrjRTmMjRjPRqgJqJg
sVCnzVpmFpVSnNFCmnmzwRFDWDdMllDccMdwDMjWjWlWjg
BJbPJGGGHPZqZQbpMlWWMWlBljjjgDjh
tGQPpZtfTPpqrHsVLSzmRNLtSFsN
WCDlBWWlvMFWlQWpmSZdZnNmGfJZFZ
LqjTjgtjPcHTTJgLThztcLTLnHnmdSpZdpdffnmZSppfGpSn
PtzqzjtqJgggzhqqccqhrQMsMvMwrCwMlBvMwvvsvs
NMsJfsHTMVbjnLnVsC
htWllhmZcWDWBwhZPcmpVRjnVMRLCCjLFpCwRb
PmZMrBtcPmZWhzDWBtMmJQdddHfQGNSqHqQGGTgr
NmfnnsPlHnGqnlsNNmRPltRLvrhvrSGJSJjvFFFSSFJLhb
PzQZccVPVwgPjrJSJjhFFpQr
TdwBgdTVwzdwzlmNfRqPmqqTql
BVLLBPmPmWBlMlLJnJlBlFQVgdRDdRZRZHpZjQzdRdZQdzQZ
trGTsfbTTgHZptzSZW
fsfTNcCqqNhhVhVFVhVBWLLB
LJwgJNfbCvwCJCwBCCNhhHmGHWWSMWmWmbMmTmmGdS
lzRnnltsstZzzRTfHtHWHGWftfHW
ZFFzVFqzqlFcZscZpRZsNphjhjvjfgJhQgQvwvhC
HHzcFNcHFjhjZjlrghLL
pMZJptpZWCmpttRMCWnnDnBGGDLhlLQrhl
MJsMCTZTTpTJRmMCJzfNsNcfNHqzvvfcww
ZDtllsDlVsrQBqQqRfWl
wvJgpPhhscgvpJFNrRjRrWRjqrRjdjRv
zpsNzCsNCJCCPPHSLzznMnDSLGLM
rfrJjFWrwjpnJjjjfrjJJnFVTgTggRWRRRPPLQgCgQcPPT
sSNbSvqmsSZDZZBtNTTPGgMLMRVcgPCMRb
zZDZzNNSmrfpjFCjzj
dbbNJPBbbrFqNqttqrGbqDcmDQRmFmwcwSnQSDcpwS
ZMMTsHjzLlLcnSVwpRRQ
hZTWjWvTZzTTWhszfwbJhrgJqtBbJGdqNPqt
rrqgHrgtcHJRRjWZlRvnnWBn
QbhVmdFppwbdjnMvlnBwMWZP
TpFDdVTFTDfhHfJcSJSzGZGf
sqNTNZHsHjjFBBwJMMNMcCJD
WGLQPjfWfQWPWmtLSRRRLwBJDbtCCJJCbbwCMBbMBc
RnPdLQfPLRdndGGRvfjlgdrTTgTsrgTrZFzF
BfHbjVVqSBFfMSlCLCDrGSQssvlr
tTpnnzpcPnwzhcnJTDtTPRprGlRGGGCWlQsWvrlvrQGQrC
DPwhghDTpPVHqqdgZbZq
ZzPqfGPtRtqfqPbqfGgGZbrhMjmjBCpHpHNCmHtHjmBHnj
QJwllvFWwDvnwCBBzjwwpC
ccJLVQzWFJvVJlVbgrZZLZLRRPSgdr
rBGbLbnTfnZrQbTnHldqsMmHsqlsWfMd
JcJjCCPzPtjCNHdlGGMlll
jjgpRRvcGbwpThVppT
ttDfjtqfjtpTWWwfTbtlWccNGRSZNGPGhZGhGhcwRh
LbCrHdvzLSSHmSRNmc
JCsBvrvBLzFQbbvlVVnpQpDtWlDqfq
vvdvJBfvdTvRBflBJPNmmffmgPCMwDgsss
rFjqLnMcnqrrtMLtjNgCPCsNzzgsPCGFNs
VqLqnLVZqjMZqWnrVtWlZJJSvHvBdRSvBdRvvJ
zZBDzgQQZLlcglzjrCrCMFjGZbMsHm
PnnJVRfttTtwVnnVFGHVsjCFCjrsMM
wPRpRpRnNTpPNlBdQQDdgDNMhN
bNQpFpnwgtDHpbnhWtffmfmhvhhfsZ
LcdLdwCLPPSVSqqwZGhWdJhGJZhlGlsm
TBwSLPSPVRSVqSVqVrcnpMDDngMgnQpbRQFDNH
vPSvBJZSSdJgpJJZBDGDGrdqGdllGrGDrh
HMtsltFlRVVFtlscRjjMcsWwWChWmrnwDWGwChmjGCWq
MQHNlTVHNVHpbbpbTvvBvf
VsbPMwhbWhzdpzNNggnBcTBWNngQ
RmtZZFZqSjqVHmGQNcBHNLGLGHQH
JjRClqCjZlDZmqSqljFZZqRCvsvPfshhMdwsDwbVwzMzhffb
bfGtRgfDtVmsMzTbmz
LjGZwQLLdjFdHLNMhmzBzMNHNmzN
wjQLCFvnnQGdZLGWSjdqWDfPlrRpqRDDRqrpPr
pqnBZqjCNCqQqmllpHGMGdTfML
PsFgrRvSPsWTwWWQwGHLHW
SrvgsFbrrPJJFsrFPtFSCChBDQjqCqtNhDqhCqNC
RJZRWZWMWZPZffRCPWMdRdfQQQjJzHQsssjrSQFVschVHr
NgpnDgvGTNTVFHFFjVFF
jntvgljpGvlnbLtLbBvnLRPlCCwwCfRqMCCqqqddqw
PFBMVDSVPHMTThtMtSBMMVNbQprHbNRgNRRgLnvpnjnN
scGcrcwlswdGlcqvbQgnnpQnqLjnpp
ffwswWzcmlcWWsmcZhrDFrZMFZBMFzhM
LMdZGqdRSSZmCZMRfQjnggvlvggRcznz
tjjFhBrtpthpslcvvlcQzFnFvQ
jrhbjtpJtbZqCLdWLq
HBGBfBttZzbGbljPdpFddFqRmqRzRN
JDWghDDSDqmmDDpc
CLvgMvChCvLphCTSShhMhQsBbfTfsGsrBfjfrljrZZff
RgHgDqDzqQqgcdHqcZGTNlGffGBDGZBTGZ
LFLPWsmvrbwhwwswrTlTTCBNGFfGlNJZNS
vhrLnvhNmWvMsrvwqMdRcptQtztcjptz
sLMLsThhjgqLlsnsLgTLtMFcRbcPcJSwJbbSbtSWScSt
fvrjjDjvNprdPwwJCCSrWPFP
vfZdGzVzfvGGVGpBjnnMglTsgZlqsMlM
TCVMfCfBnHHfLLPFWb
GgQlGJzNzbzHcHHLlcPLHL
tQbNQGgRZZCVtVMZ
QFFMzwjwngsvsBjGGJWbBbBWbB
QdmVDmVDWRPWVPVV
QHtHSdDpLQCCSHrtqrdrttDfLgvnFvFghNszzwgngFwsNF
RzzTNpSRBzSBVpSRlHNSHBSSGPcLNGtjhPPcbcGhPPhcrnct
CCmmCwwdfFJqDmdwsddhsmvdcMbLfcftttbPnjMPbcjPMPbP
mdZQmvssFdqsFZvsZQmvDvmWzgQBWTRzTzHlppWRglHBQh
VWmnfQWzWWnHWMfmmMVNMfWjtBtBNSNSrlStlpjJBBlgBS
cZZvbwsZsbbZvvscCRdFTTTQrBStdBJgSdhjgBjBjJjpJJ
wCFTCbZbFwwCTvFTwsPGccMzMDWVWfzLGmqHnnDHGLQL
sNQQHbbhdlpdrQllqpsqSpGjZDZGgDnVcnjjnnDZ
WWRLGFvJBJPvzzWjnTncDVZTTPgDff
FLRLGRFRJLBWJmJzMRLCvldrMrbbltdhQQlNqtMbsb
HZllwlZSlSZwhvmQjcZhTqcT
sPzzdgpszpzsBdvvMccvcqPThjhM
JDdsDspLzsdzBgVdBGBzCLlwbbwWSnlnnWffHwJcNlHw
nzCTCnpqJqfCnvvjZjWjPcZrmcmZfW
GNdwgVjwRdRglMrPWLPWZWcNWW
dVblgtRwQgSGVBldbQBbBRJnQJTsJHTqnzzJFpjvHnnn
dqpQQrdqQpLfqcGSdggQdgRMmwHBMMBVNRNDFFBDBgNt
vTzsnZCnlCnshbPlvZJbBzVmmVRDNwtHFBwMDVBR
lJCshjTJbVqfVdjjjG
WlLCJlHLcZcJWcWZJnLHnPqlFtSthTnFNThVtNhVhvNVzVtF
QfbgRsspfDRsgfjqqRRpDbSNSTFzBbTbhttVBhVNBzzT
fwgfRdpdfQDqgPHHZJZCcdGddH
sbrbmVmfddzJntZZtwtMMf
PvhwPRlvvWhFvSRhpFMMJGMFppnBTBGJ
RPlCCLDPDClwHbrdzsdNLzgs
HZgqtgbqRZvzwzCh
BFqmGfrNLQfhzJWBhRJwJR
LFqFQjrcrcqFNMmMdHggntDPMnsDbn
NmWmPblGnnTTNlFGPmNWfwdchdlHdBdwcfCfZppZ
rzqzRjgVrJrzzcFdqdCBFBhZhH
VDRsRMjRJJrQsJPTGFNvsbnsnLGm
nrbrBLTffjNRzGQSJHJQGT
tcZqMcppCmHRQPGGCG
pMDcZhpgcpFDfrwNDDrLVjGj
LWlmlmWqvrBMWWBlmjLThBrfPJZfZZCwPCJJwPCTcggCsd
pSbRHbzpHDVFRQRfPdfnZswgcJcppp
SzRNGbzSWNPLWqLv
vqslblpspsvqBFSqcrrZZDdTfFPHccrf
GWRhWmjwhRcQdCDrPjDP
mcWLVnnWJgGRzVSsVSpSSptNpMvb
wHTPfdTvHlPHGpdvvTddGfcJLLWWwWWcCWrqrVMWCVLL
zhsSNZhnshNSnvZmvsCWWSLrVMcrSCLWJcrq
snDnshmNsjnTdHPfDGvdDT
CfrnFFMnnsRNrNCwFCrdssgqgqvVZvZqlTWBNWZqlJBW
htDhDLhwPWWBqTghgB
DPLPzHDtSPStjLGLtzSMwbdMdnCHrRdCFsmfnR
nBNWCvJmVPNnCPNDJWbtmSwqTttcQsSqtqTjQQ
pMflzLlffRRMRdFlflpLddGdsTjwHqzcvwTqtsStQQjtwwsQ
ZhGlphlpvvLLfFGvMLhfrfWNJNNPVPbnPhnDgDbDDNbJ
ZCpCmVlZvlpBBwvvMCrJhrfhMfjjWMSG
qhstFzFFqzHGzNfSMJSGzM
QnHRPRgRQPtPhtnDsqsbDQPBlTcpBwmVmTvbwdwBTVZVpl
PHmqHdddqBWMmTvMvTGMBWPdwhssnnHlhgsNwhwNHQzwrswh
cSbVcDLtbfLSFzhlhJswgtrsww
bSLlFLFFLDZVLpZVjFLdPMdBBqGGPmmqWGdGjM
FQCnQwFRbnrSfgQgwFRCnswmPLpMppPdMMllpLMptMLldPSZ
cJhhJcJVBJjhfHDvJqThvVDcpdGGqdZGdlltpqWdMqpdGWtG
HhzTjJBzJTvNJHvzvvNBzBFnFCNCbCwrbnRbgRwfwQsg
jRzDgbDDQDgVqqDGsjttNdwqNJZNwNdTWrpB
MHvvvlSHFllMhhMrpWBJtlWdpJrTwZ
mFcFFHmCmtcvfvFFHHLDGnRVzjDgnmgmnzGgGg
JJhDpDdmsJJdgmhrpPjGjFLPPSNpjL
WbznbRGnPfrfRSrN
WqGnnVGVMGHtWTCgJvZHggBggZCg
wlrPQtZQvwrzlvNfZLMZBjbbqjqLbSBjTg
PGJDVdsdhsPVPjbTcLcGLgjqbM
VPDRHWRdsRQvpfmmlw
pvTZTSpTZvGGphNvvbDpdrMqrjlWdPqqjWdldNrd
gmmJmsQfJgcRQJQJJncVQjMWllSnqljqBlPPjPHHHH
QVJQRVcwmJcchwpSZLwGbSZZ
zjrDMWcjDzQjDlWrnqqRBRNhBJRBhBJqnf
TTGPPdgGLwdHGwGPTgLbbvhHtRRNRRSfchqRvSqHRJ
TZTccPpdZwPQjllsspjVzD
jHLHhHFRjhcblDRRWbWTdtppLTntTnMmGLMvTp
BBQBgBBCrrgqJqTtMZMpngdtpvpG
QJJJQrsVsQQfQVPCNqsNSjHdhhdRHDNHFHFclh
RbCLnvdtnLRLRbmLPpHdQCvmNJpJSZSJlgDzglGlzcclcDGD
qBBwMjfsFMjsMbfWbwjlzDZlcWclJczgNDGNDl
wqjhrwwhhCvbQPrRnC
vpWDDDWZQQNGllwHlwWVGj
LCPdqdcdtsvdsCtsddvmVrVjjrBwHlmswmBnmw
fLfvSgvMfdCPqzZNThfNNpTJJQ
CVVVLbNVmGNQbGbGHHbHbvdwgQlwJDTFgJQdDZDJFD
ssWBsBWrjSzWrPtBjnSCTwvFZlDjwZDdgwTDwggv
nntPBqBrPsBfnCRCBWzCVcGVHMLNcbHLNmHqGphp
sbbwwzdsbqQQbQnnNbPNGbznHHRdLTggMVHFVvRZTRVRHMZF
mWffDWfflBpfmcWjWrrJVvgRLlMZVVhMFFTlHhMM
rJJCctmjcfvzsqsqbtbqPP
HGWjHWzVctQVcJVtjvRsvLTddqDDDsjRLg
bbMnlNChZQLZhdDs
SMMMMMMNmMllSlrmCczGcVzBcGWFBQGcrt
VwQlqcLfdLGqdqDjjgZrjZBdttjd
zSPPPJzJGjJjZrCBDt
WMTMsTWsccsvGGwH
hZvbQrjTTZjZcjWNrjnQrcTRpGMqcRfRRGzHfHfpfRMqRz
mDJlFmwCVVwbCVbPBRLMMLpRLwRLHqpR
gsCmgJsPDCtCVlvbhgQjhgQbnQbd
fSgbhhGPGJGhRDmlhhHcHDBH
LsMwQWFswsQMsQMvjslcBcDldBTWfDcHRRdl
ZpVFwLQwVLQvCVsMjrJbbCNPbzSJtPbPPf
VDzWMCpfCcCRDzqDzqNnvLZnfntHQnPPLQlt
sJmdbTBdmmGhFhhbJNNQlJnQlQLHPZNn
sdwmwsdrmMRpDRMLcw
JpWmSWpCnCbJBZHZVldbdfZf
rgdrgNdrjgNPrMjwTssrPdfDZqsVfQHDFlQDDHQVsZfB
TRPdNNLgjNwrRTrJpppzCmzmCLSnvS
QbtQJHQmbmfmBRvbQRzBvldqcFljsGcFdGdvsqqGls
ChCPWhDhWZWJVnZpCNChhVDcMcDdcdgGscjgFjGFlsjjGq
WZNTWNhNZfJJbTJTmR
CHGCHFcZvCrchrZrhsVtsBQjMstfZMMBgg
NNqwDLmDjJgQBmVQ
wdWLLTgWRTWcCcbrHCHhGW
bTZZvNjNjLgTCHcWhccfhWJdhvnc
mnFFmPGSwRPShzVPPWPdhhzr
FRtBFGBMFQFttRwtZgTjCTnQNbNLjTCH
bJSqrSpDJbSNbFjSFCfPWGcwGWPrcTCfwr
tRtLhDsvhQZlHRhRtQQnCnCcdwCPwTwdGcGP
HsHvsmBZvmvsmBhHvLssVqDSNgFMDzgbbDVJzbpMVq
nSSDHRRRQRBCLCQC
qGmfPzGmGlrrrpfrqlzrJtLvBlhQbSCvbtCtlFhLFC
zzpmqqJJVVfJfPfMpfdHNndsNwDSMSDDNcsc
CscQsVMhCsMsMHhhVthtwmgZNRqzWLBRLRLmBWmZWBND
JQJdddrjrLqBgDBq
QbFlTffpMbMnsPCh
gDdbVbVDddDfVfWQfBRLQZsZLRQQ
FCCTrGCMStwGHTtTWLQhLZrlRssRhRhp
FSHqtFTmFwmCsSwGTHtMTSdjjcdnVddgzmbVmjmndbbD
JtBBMcLWLdfFLhMttcWWhfWLrTRGFsbwTmRGwmwbbCTGGsbD
PzQpSQQQvzVvpzHqjvNvQSvGRmmTDVRDmsGsRGsrcDcDGC
cQPHSPvPvZHqcZjzpZjnZNtWlLdtldJWfnfhlJJtLdMg
nPPssTBnMJPdtHPVHtRhpv
bSSgGFWDgWwDFFlmWlcShqdpRqpVcHvvnqpvpRHd
bGFnGljgSsjBCTBszz`

day3(input)