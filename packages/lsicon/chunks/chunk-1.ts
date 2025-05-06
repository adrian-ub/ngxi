import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRowHeightSOutlineIcon],svg[lsicon-row-height-s-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 4h5m-5 8h5M9 8h5M4.5 3v10M7 11.207L4.5 13.5L2 11.207m0-6.414L4.5 2.5L7 4.793"></svg:path>`,
})
export class LsiconRowHeightSOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSalesReturnFilledIcon],svg[lsicon-sales-return-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.207 2H3.793L1 4.793V14h14V4.793zm-9.5 2.5l1.5-1.5h7.586l1.5 1.5zm4 3.5l.647-.646l-.707-.708L4.293 9H10a.5.5 0 0 1 0 1H6v1h4a1.5 1.5 0 0 0 0-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSalesReturnFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSalesReturnOutlineIcon],svg[lsicon-sales-return-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 5v8.5h-13V5m13 0L12 2.5H4L1.5 5m13 0h-13M6 10.5h4a1 1 0 1 0 0-2H5.5L7 7"></svg:path>`,
})
export class LsiconSalesReturnOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSandFilledIcon],svg[lsicon-sand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.268 5H4v1h3a2 2 0 1 0-1.732-1M3 6H2V5h1zm8.085 1H9v1h3.5a1.5 1.5 0 1 0-1.415-1M8 7v1H2V7zM6 9v1H2V9zm3.5 1H7V9h4.5a2.5 2.5 0 1 1-2 1" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSandFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSandGlassFilledIcon],svg[lsicon-sand-glass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2h1v4.207L5.793 8L4 9.793V14H3v1h10v-1h-1V9.793L10.207 8L12 6.207V2h1V1H3zm4 4h2V5H7zm-1 6h4v-1H6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSandGlassFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSandGlassOutlineIcon],svg[lsicon-sand-glass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 1.5h10m-10 13h10M4.5 2v4l2 2m5 6v-4l-2-2m2-6v4l-3 3m-4 5v-4l3-3M6 11.5h4m-3-6h2"></svg:path>`,
})
export class LsiconSandGlassOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSandOutlineIcon],svg[lsicon-sand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h3m0 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-5 0h1m6 2h3.5m0 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2 7.5h6m-1 2h4.5m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4ZM2 9.5h4"></svg:path>`,
})
export class LsiconSandOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveAsFilledIcon],svg[lsicon-save-as-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.146-.354l-2-2A.5.5 0 0 0 11.5 2zM6 5V3h4v2zm3.854 4.146l-2-2l-.708.708L8.293 9H5v1h3.293l-1.147 1.146l.708.707l2-2a.5.5 0 0 0 0-.707" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSaveAsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveAsOutlineIcon],svg[lsicon-save-as-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 9.5h4.5m0 0l-2 2m2-2l-2-2m-2-5v3h5v-3m-8 11h11v-9l-2-2h-9z"></svg:path>`,
})
export class LsiconSaveAsOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveFilledIcon],svg[lsicon-save-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .354.146l2 2A.5.5 0 0 1 14 4.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zM3 3v10h2V8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V13h2V4.707L11.293 3H11v2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V3zm3 0v2h4V3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSaveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveOutlineIcon],svg[lsicon-save-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 13.5v-5h5v5m-5-11v3h5v-3m-8 11h11v-9l-2-2h-9z"></svg:path>`,
})
export class LsiconSaveOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScaleFilledIcon],svg[lsicon-scale-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM5 9a3 3 0 0 1 6 0h1a4 4 0 0 0-8 0zm1.426-1.44l1.713 1.786l.722-.692l-1.714-1.787z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScaleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScaleOutlineIcon],svg[lsicon-scale-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4.5 9a3.5 3.5 0 1 1 7 0M6.787 7.214L8.5 9m-6 4.5v-11h11v11z"></svg:path>`,
})
export class LsiconScaleOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScanFilledIcon],svg[lsicon-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5H6v1H3v3H2zM13 3h-3V2h3.5a.5.5 0 0 1 .5.5V6h-1zm1 5.5H2v-1h12zM3 13v-3H2v3.5a.5.5 0 0 0 .5.5H6v-1zm10 0v-3h1v3.5a.5.5 0 0 1-.5.5H10v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScanFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScanOutlineIcon],svg[lsicon-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 2.5H2.5V6M10 2.5h3.5V6M10 13.5h3.5V10M6 13.5H2.5V10M2 8h12"></svg:path>`,
})
export class LsiconScanOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScatterDiagramFilledIcon],svg[lsicon-scatter-diagram-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v11h11v1H2zm8 3.5a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M6.98 7.98a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m4.77-.485a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M4.25 9.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m6.25.005a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScatterDiagramFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScatterDiagramOutlineIcon],svg[lsicon-scatter-diagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 2v11.5H14M5 9.75h.005v.005H5zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Zm7.25-2.255h.005V7.5H12.5zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Zm-1.5 2.26h.005v.005h-.005zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0ZM10.75 5.5h.005v.005h-.005zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0ZM8.48 7.98h.02V8h-.02zm1 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class LsiconScatterDiagramOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenFullFilledIcon],svg[lsicon-screen-full-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 4H9.848V3H13v3.152h-1V4.707L9.354 7.354l-.708-.708zM4 11.293l2.646-2.647l.708.708L4.707 12h1.445v1H3V9.848h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScreenFullFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenFullOutlineIcon],svg[lsicon-screen-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 4L9 7M7 9l-3 3m8.5-5.848V3.5H9.848M3.5 9.848V12.5h2.652"></svg:path>`,
})
export class LsiconScreenFullOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenOffFilledIcon],svg[lsicon-screen-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10 5.293l2.646-2.647l.708.708L10.707 6h1.445v1H9V3.848h1zM5.293 10H3.849V9H7v3.152H6v-1.445l-2.646 2.647l-.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScreenOffFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenOffOutlineIcon],svg[lsicon-screen-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 12.152V9.5H3.85M9.5 3.848V6.5h2.652M13 3l-3 3m-4 4l-3 3"></svg:path>`,
})
export class LsiconScreenOffOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSearchFilledIcon],svg[lsicon-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M1 6.5a5.5 5.5 0 1 1 9.727 3.52l3.127 3.126l-.708.708l-3.126-3.127A5.5 5.5 0 0 1 1 6.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSearchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSearchOutlineIcon],svg[lsicon-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m10 10l3.5 3.5m-2-7a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></svg:path>`,
})
export class LsiconSearchOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSendFilledIcon],svg[lsicon-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="lsiconSendFilled0" d="M12.97 2.67a.5.5 0 0 0-.64-.64l-11 4a.5.5 0 0 0-.016.934l4.433 1.773l2.9-3.09l.707.707l-2.98 3.176l1.662 4.156a.5.5 0 0 0 .934-.015z"></svg:path></svg:defs><svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:use href="#lsiconSendFilled0"></svg:use><svg:use href="#lsiconSendFilled0"></svg:use></svg:g>`,
})
export class LsiconSendFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSendOutlineIcon],svg[lsicon-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#lsiconSendOutline0)"><svg:path stroke="currentColor" stroke-linejoin="round" d="m6.5 8.5l-5-2l11-4l-4 11zm0 0L9 6"></svg:path></svg:g><svg:defs><svg:clippath id="lsiconSendOutline0"><svg:path fill="#fff" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class LsiconSendOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconServiceFilledIcon],svg[lsicon-service-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.884 8H3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.492-.41c-.343-1.885-.427-4.735.474-7.14c.453-1.21 1.164-2.33 2.237-3.145C4.797 1.485 6.205 1 8 1c1.796 0 3.204.486 4.282 1.305c1.073.816 1.784 1.934 2.237 3.145c.901 2.405.816 5.255.474 7.14a.5.5 0 0 1-.492.41h-.946c-1.479 1.738-3.713 2.108-5.074 2H7.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.517c.964-.012 2.214-.295 3.217-1.105A.5.5 0 0 1 12 12.5v-4a.5.5 0 0 1 .5-.5h1.615c-.1-.752-.271-1.5-.533-2.2c-.405-1.08-1.02-2.025-1.907-2.699C10.794 2.431 9.606 2 8 2s-2.793.43-3.676 1.101c-.887.674-1.5 1.618-1.906 2.7A10 10 0 0 0 1.884 8" clip-rule="evenodd"></svg:path>`,
})
export class LsiconServiceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconServiceOutlineIcon],svg[lsicon-service-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14.5 12.5h-2v-4h2zm0 0c.667-3.667.3-11-6.5-11s-7.167 7.333-6.5 11m0 0h2v-4h-2zm7 2c1.31.11 3.476-.268 4.816-2m-4.816 2v-1h-1v1z"></svg:path>`,
})
export class LsiconServiceOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSettingFilledIcon],svg[lsicon-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.873 1h2.23c.336-.005.665.105.93.312c.267.21.452.505.52.837l.195.935q.127.068.25.14l.945-.31a1.48 1.48 0 0 1 1.181.119c.22.124.405.302.534.52l1.125 1.856a1.41 1.41 0 0 1-.281 1.83H14.5l-.742.633v.258l.733.653a1.41 1.41 0 0 1 .297 1.8l-1.09 1.86v.002a1.46 1.46 0 0 1-1.255.711a1.5 1.5 0 0 1-.461-.07l-.005-.002l-.937-.309q-.125.074-.254.141l-.194.934a1.43 1.43 0 0 1-.52.838A1.47 1.47 0 0 1 9.14 15H6.892a1.47 1.47 0 0 1-.93-.312a1.43 1.43 0 0 1-.52-.837l-.195-.936a6 6 0 0 1-.25-.14l-.945.31a1.48 1.48 0 0 1-1.181-.119a1.44 1.44 0 0 1-.534-.518l-1.126-1.86a1.41 1.41 0 0 1 .259-1.794l.747-.942l-.713-.635a1.41 1.41 0 0 1-.296-1.802l.002-.002l1.127-1.86a1.45 1.45 0 0 1 1.239-.709q.226-.012.446.043l.022.006l.935.329q.123-.072.25-.138l.194-.934a1.43 1.43 0 0 1 .52-.838c.264-.207.594-.317.93-.312M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSettingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSettingOutlineIcon],svg[lsicon-setting-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m13.258 8.354l.904.805a.91.91 0 0 1 .196 1.169l-1.09 1.862a.94.94 0 0 1-.35.341a1 1 0 0 1-.478.125a1 1 0 0 1-.306-.046l-1.157-.382q-.304.195-.632.349l-.243 1.173a.93.93 0 0 1-.339.544a.97.97 0 0 1-.618.206H6.888a.97.97 0 0 1-.618-.206a.93.93 0 0 1-.338-.544l-.244-1.173a6 6 0 0 1-.627-.35L3.9 12.61a1 1 0 0 1-.306.046a1 1 0 0 1-.477-.125a.94.94 0 0 1-.35-.34l-1.129-1.863a.91.91 0 0 1 .196-1.187L2.737 8v-.354l-.904-.805a.91.91 0 0 1-.196-1.169L2.766 3.81a.94.94 0 0 1 .35-.341a1 1 0 0 1 .477-.125a1 1 0 0 1 .306.028l1.138.4q.305-.195.632-.349l.244-1.173a.93.93 0 0 1 .338-.544a.97.97 0 0 1 .618-.206h2.238a.97.97 0 0 1 .618.206c.175.137.295.33.338.544l.244 1.173q.325.155.627.35l1.162-.382a.98.98 0 0 1 .784.078c.145.082.265.2.35.34l1.128 1.863a.91.91 0 0 1-.182 1.187l-.918.782z"></svg:path><svg:path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path></svg:g>`,
})
export class LsiconSettingOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSettingSearchFilledIcon],svg[lsicon-setting-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.873 1h2.23c.336-.005.665.105.93.312a1.43 1.43 0 0 1 .52.837l.195.935q.127.068.25.14l.945-.31a1.48 1.48 0 0 1 1.181.119c.22.124.405.302.534.52l1.125 1.856a1.41 1.41 0 0 1-.281 1.83H14.5l-.742.633v.258l.733.653a1.41 1.41 0 0 1 .297 1.8l-1.09 1.86v.002a1.46 1.46 0 0 1-1.257.711l-.001-1a.5.5 0 0 0 .232-.06a.44.44 0 0 0 .165-.16l1.092-1.865a.41.41 0 0 0-.092-.531l-.008-.007l-1.071-.955V7.411l1.092-.931a.41.41 0 0 0 .085-.54l-.005-.009l-1.131-1.866a.44.44 0 0 0-.165-.16a.5.5 0 0 0-.233-.061h-.003a.5.5 0 0 0-.148.022h-.002l-1.385.456l-.2-.13a5 5 0 0 0-.57-.317l-.225-.107l-.294-1.416V2.35a.43.43 0 0 0-.157-.25a.47.47 0 0 0-.3-.1H6.86a.47.47 0 0 0-.3.1a.43.43 0 0 0-.158.25v.002l-.295 1.417l-.225.106q-.298.141-.575.318l-.205.132l-1.344-.473a.5.5 0 0 0-.132-.01l-.016.002h-.016a.5.5 0 0 0-.233.06a.44.44 0 0 0-.165.16l-.002.005l-1.128 1.86a.41.41 0 0 0 .092.531l.008.007l1.071.955v.752L2.193 9.491l-.039.033a.41.41 0 0 0-.092.54l.003.005l1.131 1.866a.45.45 0 0 0 .165.16q.107.06.233.061h.003q.075 0 .148-.022h.002l1.385-.456l.2.13q.274.177.57.317l.225.107l.295 1.418c.02.096.073.186.156.25c.084.066.19.102.3.1h2.277a.47.47 0 0 0 .3-.1l.617.788A1.47 1.47 0 0 1 9.14 15H6.892a1.47 1.47 0 0 1-.93-.312a1.43 1.43 0 0 1-.52-.837l-.195-.936a6 6 0 0 1-.25-.14l-.945.31a1.48 1.48 0 0 1-1.181-.119a1.44 1.44 0 0 1-.534-.518l-1.126-1.86a1.41 1.41 0 0 1 .259-1.794l.747-.942l-.713-.635a1.41 1.41 0 0 1-.296-1.802l.002-.002l1.127-1.86a1.45 1.45 0 0 1 1.239-.709q.226-.012.446.043l.022.006l.935.329q.123-.072.25-.138l.194-.934a1.43 1.43 0 0 1 .52-.838c.264-.207.594-.317.93-.312M3.591 13.156H3.59l.004-.5v.5zm8.813-10.312h.002l-.004.5v-.5zM8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 8a3 3 0 1 1 4.845 2.366l1.571 2.357l-.832.554l-1.623-2.434A3 3 0 0 1 5 8" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSettingSearchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSettingSearchOutlineIcon],svg[lsicon-setting-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.763 14.294a.97.97 0 0 1-.618.206H6.888a.97.97 0 0 1-.618-.206a.93.93 0 0 1-.338-.544l-.244-1.173a6 6 0 0 1-.627-.35L3.9 12.61a1 1 0 0 1-.306.046a1 1 0 0 1-.477-.125a.94.94 0 0 1-.35-.34l-1.129-1.863a.91.91 0 0 1 .196-1.187L2.737 8v-.354l-.904-.805a.91.91 0 0 1-.196-1.169L2.766 3.81a.94.94 0 0 1 .35-.341a1 1 0 0 1 .477-.125a1 1 0 0 1 .306.028l1.138.4q.305-.195.632-.349l.244-1.173a.93.93 0 0 1 .338-.544a.97.97 0 0 1 .618-.206h2.238a.97.97 0 0 1 .618.206c.175.137.295.33.338.544l.244 1.173q.325.155.627.35l1.162-.382a.98.98 0 0 1 .784.078c.145.082.265.2.35.34l1.128 1.863a.91.91 0 0 1-.182 1.187l-.918.782v.713l.904.805a.91.91 0 0 1 .196 1.169l-1.09 1.862a.94.94 0 0 1-.35.341a1 1 0 0 1-.478.125M9 10l2 3m-.5-5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconSettingSearchOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShareFilledIcon],svg[lsicon-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.592 2.446a.5.5 0 0 1 .707 0l1.875 1.875l-.707.707l-.967-.966V8.5h-1V3.952L6.424 5.028l-.707-.707zM3 6.5a.5.5 0 0 1 .5-.5h1.636v1H4v6h8V7h-1.136V6H12.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShareOutlineIcon],svg[lsicon-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.136 6.5H3.5v7h9v-7h-1.636M8 3v5.5m1.82-3.825L7.945 2.8L6.07 4.675"></svg:path>`,
})
export class LsiconShareOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfDownFilledIcon],svg[lsicon-shelf-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.207 2H4.793L2 4.793V14h12V4.793zm-7.5 2.5l1.5-1.5h5.586l1.5 1.5zM7.5 7v3.293L6.354 9.146l-.708.708L8 12.207l2.354-2.353l-.708-.708L8.5 10.293V7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfDownOutlineIcon],svg[lsicon-shelf-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 5v8.5h-11V5m11 0L11 2.5H5L2.5 5m11 0h-11M8 7v4.5m0 0l2-2m-2 2l-2-2"></svg:path>`,
})
export class LsiconShelfDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfFilledIcon],svg[lsicon-shelf-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h3v4.5H2zm4.5 0h3v4.5h-3zM11 2h3v4.5h-3zm3 6.5H2v-1h12zm-12 1h3V14H2zm4.5 0h3V14h-3zm4.5 0h3V14h-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfOutlineIcon],svg[lsicon-shelf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 8h12m-9.5 5v-3h-2v3m2 0v.5h-2V13m2 0h-2M9 13v-3H7v3m2 0v.5H7V13m2 0H7m6.5 0v-3h-2v3m2 0v.5h-2V13m2 0h-2m-7-7.5v-3h-2v3m2 0V6h-2v-.5m2 0h-2m6.5 0v-3H7v3m2 0V6H7v-.5m2 0H7m6.5 0v-3h-2v3m2 0V6h-2v-.5m2 0h-2"></svg:path>`,
})
export class LsiconShelfOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfUpFilledIcon],svg[lsicon-shelf-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.207 2H4.793L2 4.793V14h12V4.793zm-7.5 2.5l1.5-1.5h5.586l1.5 1.5zm5.94 5.354l.707-.708L8 6.793L5.646 9.146l.708.708L7.5 8.707V12h1V8.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfUpOutlineIcon],svg[lsicon-shelf-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 5v8.5h-11V5m11 0L11 2.5H5L2.5 5m11 0h-11M6 9.5l2-2m0 0l2 2m-2-2V12"></svg:path>`,
})
export class LsiconShelfUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMaximizeFilledIcon],svg[lsicon-shell-window-maximize-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.146 4.146A.5.5 0 0 1 3.5 4h9a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShellWindowMaximizeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMaximizeOutlineIcon],svg[lsicon-shell-window-maximize-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3.5 4.5h9v7h-9z"></svg:path>`,
})
export class LsiconShellWindowMaximizeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMinimizeFilledIcon],svg[lsicon-shell-window-minimize-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 8.5H3v-1h10z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShellWindowMinimizeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMinimizeOutlineIcon],svg[lsicon-shell-window-minimize-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 8h10"></svg:path>`,
})
export class LsiconShellWindowMinimizeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShieldFilledIcon],svg[lsicon-shield-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H2v7a6 6 0 0 0 12 0zM5.854 7.146l-.708.708L7.5 10.207l3.854-3.853l-.707-.708L7.5 8.793z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShieldFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShieldOutlineIcon],svg[lsicon-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m5.5 7.5l2 2L11 6M2.5 2.5V9a5.5 5.5 0 1 0 11 0V2.5z"></svg:path>`,
})
export class LsiconShieldOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingBagFilledIcon],svg[lsicon-shopping-bag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3H3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H11a3 3 0 0 0-3-3m0 1a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M6 5H5v2h1zm5 0h-1v2h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShoppingBagFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingBagOutlineIcon],svg[lsicon-shopping-bag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10.5 7V4a2.5 2.5 0 0 0-5 0v3m7-2.5v9h-9v-9z"></svg:path>`,
})
export class LsiconShoppingBagOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingCartFilledIcon],svg[lsicon-shopping-cart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2h1.5a.5.5 0 0 1 .496.438L3.941 10h8.135l.834-5H4V4h9.5a.5.5 0 0 1 .493.582l-1 6A.5.5 0 0 1 12.5 11h-9a.5.5 0 0 1-.496-.438L2.059 3H1zm9 5H6V6h4zm0 2H6V8h4zm-6.104 2.896a1.56 1.56 0 1 1 2.208 2.208a1.56 1.56 0 0 1-2.208-2.208m1.5.708a.56.56 0 1 0-.792.792a.56.56 0 0 0 .792-.792m4.5-.708a1.56 1.56 0 1 1 2.208 2.208a1.56 1.56 0 0 1-2.208-2.208m1.5.708a.56.56 0 1 0-.792.792a.56.56 0 0 0 .792-.792" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShoppingCartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingCartOutlineIcon],svg[lsicon-shopping-cart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 6.5h4m-4 2h4m-6-4h9.5l-1 6h-9l-1-8H1m9.25 9.75a1.06 1.06 0 1 0 1.5 1.5a1.06 1.06 0 0 0-1.5-1.5Zm-6 0a1.06 1.06 0 1 0 1.5 1.5a1.06 1.06 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class LsiconShoppingCartOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortAToZFilledIcon],svg[lsicon-sort-a-to-z-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.338 12.274V1.91h1v10.363L7 10.749l.676.737l-2.838 2.603L2 11.486l.676-.737zM10.628 2h1.744l.981 3.271l.02.051a23 23 0 0 1 .29.796c.08.232.161.487.223.72c.058.216.114.465.114.662h-1c0-.053-.022-.187-.08-.404a11 11 0 0 0-.203-.655a20 20 0 0 0-.181-.506h-2.072c-.053.142-.117.319-.181.506c-.076.222-.15.453-.203.655c-.058.217-.08.351-.08.404H9c0-.197.056-.446.114-.663c.062-.232.143-.487.223-.719a22 22 0 0 1 .29-.796l.02-.05zm.164 2.935h1.416L11.628 3h-.256zM9 9h5v1.25L10.333 13H14v1H9v-1.25L12.667 10H9z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortAToZFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortAToZOutlineIcon],svg[lsicon-sort-a-to-z-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.838 1.91v11m2.5-1.792l-2.5 2.293l-2.5-2.293M9 9.5h4.5v.5l-4 3v.5H14H9m.5-6c0-.5.62-2.065.62-2.065m0 0L11 2.5h1l.88 2.935m-2.76 0h2.76m0 0S13.5 7 13.5 7.5"></svg:path>`,
})
export class LsiconSortAToZOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortFilledIcon],svg[lsicon-sort-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .374.168l4 4.5A.5.5 0 0 1 12 7.5H4a.5.5 0 0 1-.374-.832l4-4.5A.5.5 0 0 1 8 2M3.544 8.795A.5.5 0 0 1 4 8.5h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5a.5.5 0 0 1-.082-.537" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortFilterFilledIcon],svg[lsicon-sort-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.5 1.529l2.838 2.603l-.676.737L5 3.344V14H4V3.344L2.338 4.869l-.676-.737zm6.454 10.745V1.91h1v10.363l1.662-1.525l.676.737l-2.838 2.603l-2.838-2.603l.676-.737z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortFilterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortFilterOutlineIcon],svg[lsicon-sort-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11.454 1.91v11m2.5-1.792l-2.5 2.293l-2.5-2.293M4.5 2v12M7 4.5L4.5 2.207L2 4.5"></svg:path>`,
})
export class LsiconSortFilterOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortOutlineIcon],svg[lsicon-sort-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4 7l4-4.5L12 7zm8 2H4l4 4.5z"></svg:path>`,
})
export class LsiconSortOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortZToAFilledIcon],svg[lsicon-sort-z-to-a-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.338 12.274V1.91h1v10.363L7 10.749l.676.737l-2.838 2.603L2 11.486l.676-.737zM9 2h4.5v1.207L10.207 6.5H13.5v1H9V6.293L12.293 3H9zm1.662 6.5h1.21l1 3.336l.02.047a20 20 0 0 1 .281.767c.077.224.156.471.216.698c.057.212.111.455.111.652h-1a2 2 0 0 0-.077-.395a10 10 0 0 0-.196-.63c-.06-.175-.12-.341-.17-.475h-1.952c-.07.141-.16.325-.25.52a8 8 0 0 0-.259.624q-.052.145-.076.246l-.017.08L9.5 14h-1c0-.22.079-.48.154-.69a9 9 0 0 1 .291-.705a17 17 0 0 1 .377-.77l.024-.045zm-.123 3h1.189l-.51-1.7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortZToAFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortZToAOutlineIcon],svg[lsicon-sort-z-to-a-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.838 1.91v11m2.5-1.792l-2.5 2.293l-2.5-2.293M12.4 12l-.9-3H11l-1.2 3m2.6 0s.6 1.5.6 2m-.6-2H9.8M9 14c0-.5.8-2 .8-2m3.7-5h-4v-.5L13 3v-.5H9"></svg:path>`,
})
export class LsiconSortZToAOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSoupFilledIcon],svg[lsicon-soup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.12 2.093a.5.5 0 0 1 .697.117l-.407.29l.407-.29v.001l.002.002l.005.006l.013.02a3 3 0 0 1 .169.285c.082.159.208.437.208.726s-.126.567-.208.726a3 3 0 0 1-.17.285l-.012.02l-.004.004l-.005.009a2 2 0 0 0-.106.183a.8.8 0 0 0-.095.267c0 .037.026.137.095.275a2 2 0 0 0 .107.189l.006.009m0 0a.5.5 0 0 1-.825.566L5.41 5.5l-.413.283V5.78l-.002-.002l-.004-.006l-.013-.02a3 3 0 0 1-.165-.289c-.08-.16-.201-.44-.199-.728c.003-.282.124-.555.203-.711a3 3 0 0 1 .162-.281l.013-.02l.004-.006l.002-.002L5.41 4l-.411-.285l.003-.005l.007-.01a2 2 0 0 0 .109-.184a.8.8 0 0 0 .096-.266a.8.8 0 0 0-.096-.266a2 2 0 0 0-.11-.185l-.005-.009h-.001a.5.5 0 0 1 .117-.697m2.976-1a.5.5 0 0 0-.698.117l.407.29l-.407-.29v.001l-.002.002l-.005.006l-.013.02a3 3 0 0 0-.169.285C7.126 1.683 7 1.961 7 2.25s.126.567.208.726a3 3 0 0 0 .17.285l.012.02l.004.004l.005.009a2 2 0 0 1 .106.183a.8.8 0 0 1 .095.267a.8.8 0 0 1-.094.275a2 2 0 0 1-.108.189l-.006.009m0 0a.5.5 0 0 0 .825.566L7.804 4.5l.413.283V4.78l.002-.002l.004-.006l.013-.02a3 3 0 0 0 .165-.289c.08-.16.201-.44.199-.728c-.003-.282-.124-.555-.203-.711a3 3 0 0 0-.162-.281l-.013-.02l-.004-.005l-.002-.003L7.803 3l.411-.285l-.003-.005l-.007-.01a2 2 0 0 1-.109-.184A.8.8 0 0 1 8 2.25c0-.034.026-.13.096-.266a2 2 0 0 1 .11-.185l.005-.009h.001a.5.5 0 0 0-.117-.697m3 1a.5.5 0 0 0-.698.117l.407.29l-.407-.29v.001l-.002.002l-.005.006l-.013.02l-.043.065c-.034.054-.08.13-.126.22c-.082.159-.208.437-.208.726s.126.567.208.726a3 3 0 0 0 .17.285l.012.02l.003.004l.006.009a2 2 0 0 1 .106.183a.8.8 0 0 1 .095.267a.8.8 0 0 1-.095.275a2 2 0 0 1-.107.189l-.006.009m0 0a.5.5 0 0 0 .825.566l-.413-.283l.413.283V5.78l.002-.002l.004-.006l.013-.02a3 3 0 0 0 .165-.289c.08-.16.201-.44.199-.728c-.002-.282-.123-.555-.203-.711a3 3 0 0 0-.162-.281l-.013-.02l-.004-.005l-.002-.003l-.412.284l.411-.285l-.004-.005l-.005-.01l-.027-.04a2 2 0 0 1-.083-.144A.8.8 0 0 1 11 3.25c0-.034.026-.13.096-.266a2 2 0 0 1 .11-.185l.005-.009h.001a.5.5 0 0 0-.117-.697"></svg:path><svg:path d="M1 6.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5c0 1.325-.514 2.663-1.277 3.785c-.697 1.025-1.626 1.906-2.628 2.452v.763a.5.5 0 0 1-.5.5H5.438a.5.5 0 0 1-.5-.5v-.763c-1.002-.546-1.938-1.425-2.643-2.45C1.524 9.166 1 7.827 1 6.5"></svg:path></svg:g>`,
})
export class LsiconSoupFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSoupOutlineIcon],svg[lsicon-soup-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.004 1.5s-.304.427-.304.75s.304.75.304.75s.293.422.296.74c.003.325-.296.76-.296.76m2.586-2s-.304.427-.304.75s.304.75.304.75s.293.422.296.74c.003.325-.296.76-.296.76m-5.18-3s.304.427.304.75S5.41 4 5.41 4s-.293.422-.296.74c-.003.325.296.76.296.76m-3.91 1c0 2.4 1.905 4.966 3.938 5.931V13.5h5.157v-1.069C12.627 11.466 14.5 8.9 14.5 6.5z"></svg:path>`,
})
export class LsiconSoupOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStampFilledIcon],svg[lsicon-stamp-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 5.5a3.5 3.5 0 1 1 5.405 2.936c-.254.166-.388.377-.403.564H12.5a1.5 1.5 0 0 1 1.5 1.5V12H2v-1.5A1.5 1.5 0 0 1 3.5 9h2.998c-.015-.187-.149-.398-.403-.564A3.5 3.5 0 0 1 4.5 5.5M14 13v1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStampFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStampOutlineIcon],svg[lsicon-stamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 13.5h12m-3-8a3 3 0 0 1-1.367 2.517C9.277 8.248 9 8.613 9 9.037V9.5h3.5a1 1 0 0 1 1 1v1h-11v-1a1 1 0 0 1 1-1H7v-.464c0-.423-.277-.788-.633-1.019A3 3 0 1 1 11 5.5Z"></svg:path>`,
})
export class LsiconStampOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStarFilledIcon],svg[lsicon-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 1.91l2.035 3.943l3.938.845l-2.71 2.868l.3 4.33L8 11.867l-3.563 2.029l.299-4.33l-2.71-2.868l3.938-.845z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStarOutlineIcon],svg[lsicon-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8 3l1.7 3.292L13 7l-2.25 2.382L11 13l-3-1.708L5 13l.25-3.618L3 7l3.3-.708z"></svg:path>`,
})
export class LsiconStarOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStopFilledIcon],svg[lsicon-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStopOutlineIcon],svg[lsicon-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path><svg:path d="M6 6h4v4H6z"></svg:path></svg:g>`,
})
export class LsiconStopOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStoreFilledIcon],svg[lsicon-store-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a.5.5 0 0 0-.447.276l-1.5 3A.5.5 0 0 0 2 5.5v3a.5.5 0 0 0 .5.5H3v5h1V9h1.5v4.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V9h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.053-.224l-1.5-3A.5.5 0 0 0 12 2zm2.5 11V9H12v4zM6 6H5v2h1zm1.5 0h1v2h-1zM11 6h-1v2h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStoreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStoreOutlineIcon],svg[lsicon-store-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 8V6M8 8V6m2.5 2V6m-7 8V9M6 8.5v5h6.5v-5M4 2.5h8l1.5 3v3h-11v-3z"></svg:path>`,
})
export class LsiconStoreOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSubmitFilledIcon],svg[lsicon-submit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V7h-1V3H3v10h2.005v1H2.5a.5.5 0 0 1-.5-.5zm11.994 6.832l-4.52 4.519a.5.5 0 0 1-.706 0l-2.51-2.51l.706-.708l2.157 2.157l4.166-4.166z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSubmitFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSubmitOutlineIcon],svg[lsicon-submit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.005 13.5H2.5v-11h11V7m-6.89 3.986l2.511 2.511l4.52-4.52"></svg:path>`,
})
export class LsiconSubmitOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSunnyFilledIcon],svg[lsicon-sunny-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 3V1h1v2zm-4.146-.354l1.5 1.5l-.708.708l-1.5-1.5zm10 .708l-1.5 1.5l-.708-.708l1.5-1.5zM4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M3 8.5H1v-1h2zm12 0h-2v-1h2zM2.646 12.646l1.5-1.5l.708.708l-1.5 1.5zm10 .708l-1.5-1.5l.708-.708l1.5 1.5zM7.5 15v-2h1v2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSunnyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSunnyOutlineIcon],svg[lsicon-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 1v2m0 10v2m5-7h2M1 8h2m8.5 3.5L13 13M4.5 4.5L3 3m8.5 1.5L13 3m-8.5 8.5L3 13m8-5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path>`,
})
export class LsiconSunnyOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceFrontFilledIcon],svg[lsicon-surface-front-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.26 2h7.48L14 4.825V14H2V4.825zm.48 1l-1.2 1.5h8.92L11.26 3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceFrontFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceFrontOutlineIcon],svg[lsicon-surface-front-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m13.5 5l-2-2.5h-7L2.5 5m11 0h-11m11 0v1m-11-1v1m11 1V6m0 1h-11m11 0v1m-11-2h11m-11 0v1m0 0v1m0 0h11m-11 0v1m11-1v1m0 0h-11m11 0v1m-11-1v1m0 0h11m-11 0v1m11-1v1m0 0h-11m11 0v.5m-11-.5v.5m0 0h11m-11 0v1m11-1v1m0 0v1h-11v-1m11 0h-11"></svg:path>`,
})
export class LsiconSurfaceFrontOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceLeftFilledIcon],svg[lsicon-surface-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l7 3.23v7.64l-7 3.23l-7-3.23V4.18zm.5 12.769L14 11.18V5.281L8.5 7.82zM8 6.949L13.307 4.5L8 2.05L2.693 4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceLeftOutlineIcon],svg[lsicon-surface-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8 14.5l-6.5-3V11M8 14.5l6.5-3v-7M8 14.5v-1m6.5-9L8 1.5l-6.5 3m13 0L8 7.5m-6.5-3l6.5 3m-6.5-3V5M8 7.5V8m0 0L1.5 5M8 8v.5M1.5 5v1m0 0L8 8.5M1.5 6v.5m6.5 2v1m0 0l-6.5-3m6.5 3v1m-6.5-4v1m0 0l6.5 3m-6.5-3v1m6.5 2v.5m0 0L1.5 8.5M8 11v.5m-6.5-3V9m0 0L8 11.5M1.5 9v1M8 11.5v.5m0 0l-6.5-2M8 12v.5M1.5 10v.5m0 0l6.5 2m-6.5-2v.5M8 12.5v1m0 0L1.5 11"></svg:path>`,
})
export class LsiconSurfaceLeftOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceRightFilledIcon],svg[lsicon-surface-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l7 3.23v7.64l-7 3.23l-7-3.23V4.18zM2 5.28v5.9l5.5 2.538v-5.9zm11.307-.78L8 2.05L2.693 4.5L8 6.95z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceRightOutlineIcon],svg[lsicon-surface-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m1.5 4.5l6.5-3l6.5 3m-13 0v7l6.5 3m-6.5-10l6.5 3m0 7l6.5-3v-.375M8 14.5V14m6.5-9.5L8 7.5m6.5-3V5M8 7.5V8m0 0l6.5-3M8 8v.5M14.5 5v.5m0 0L8 8.5m6.5-3V6M8 8.5V9m0 0l6.5-3M8 9v.5M14.5 6v.5m0 0L8 9.5m6.5-3V7M8 9.5v.5m0 0l6.5-3M8 10v.5M14.5 7v.5m0 0l-6.5 3m6.5-3V8M8 10.5v.5m0 0l6.5-3M8 11v.5M14.5 8v.5m0 0l-6.5 3m6.5-3V9M8 11.5v.5m0 0l6.5-3M8 12v.5M14.5 9v.5m0 0l-6.5 3m6.5-3v.5M8 12.5v.5m0 0l6.5-3M8 13v.5m6.5-3.5v.75m0 0L8 13.5m6.5-2.75v.375M8 13.5v.5m0 0l6.5-2.875"></svg:path>`,
})
export class LsiconSurfaceRightOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceTopFilledIcon],svg[lsicon-surface-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l1.293.596L15 4.18v7.64l-7 3.23l-7-3.23V4.18zM2 5.28v5.9l5.5 2.538v-5.9zm6.5 2.54v5.899L14 11.18V5.281z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceTopOutlineIcon],svg[lsicon-surface-top-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 4.5v7l6.5 3m-6.5-10l6.5-3l.5.23m-7 2.77l.659.304M8 14.5l6.5-3v-7M8 14.5v-7m6.5-3L8 7.5m6.5-3l-.75-.346M8 7.5l-.375-.173M2.159 4.804L8.5 1.731M2.159 4.804L3 5.192m5.5-3.461L9.083 2m0 0L3 5.192M9.083 2l.738.34M3 5.192l.667.308m0 0L9.82 2.34M3.667 5.5l.585.27M9.82 2.34l.679.314m0 0L4.252 5.77M10.5 2.654l.75.346M4.252 5.77L5 6.115m0 0L11.25 3M5 6.115l.833.385M11.25 3l.433.2m0 0l-5.85 3.3m5.85-3.3l.65.3m-6.5 3l.667.308M12.333 3.5L6.5 6.808M12.333 3.5l.667.308m-6.5 3l.75.346m0 0L13 3.808M7.25 7.154l.375.173M13 3.807l.75.347m0 0L7.625 7.327"></svg:path>`,
})
export class LsiconSurfaceTopOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSuspendFilledIcon],svg[lsicon-suspend-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 11h1V5H6zm4-6H9v6h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSuspendFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSuspendOutlineIcon],svg[lsicon-suspend-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 5v6m3 0V5m5 3a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconSuspendOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSwerveFilledIcon],svg[lsicon-swerve-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.5a7 7 0 1 0 0 14a7 7 0 0 0 0-14m1.271 5.479L9.793 7H5.5a.5.5 0 0 0-.5.5V11h1V8h3.793L8.77 9.021l.708.708l1.875-1.875a.5.5 0 0 0 0-.708L9.479 5.271z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSwerveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSwerveOutlineIcon],svg[lsicon-swerve-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10.5 7.5h-5V11m3.625-1.625L11 7.5L9.125 5.625M14 7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconSwerveOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSwitchFilledIcon],svg[lsicon-switch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.33 2.624l5 4.376H2V6h9.67l-3-2.624zM1.5 9H14v1H4.5l2.8 2.1l-.6.8z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSwitchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSwitchOutlineIcon],svg[lsicon-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14 9.5H3l4 3m-5-6h11L9 3"></svg:path>`,
})
export class LsiconSwitchOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTableFilledIcon],svg[lsicon-table-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1 2.5v2h2.5v-2zm3.5 0v2h3v-2zm6.5-1H3V3h10zm0 4h-2.5v2H13zM9.5 13v-1.5h-3V13zm-4 0v-1.5H3V13zm1-4.5v2h3v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTableFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTableOutlineIcon],svg[lsicon-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 5h12M2 8h12M2 11h12M6 5v9m4-9v9M3 2.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5Z"></svg:path>`,
})
export class LsiconTableOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTextFilledIcon],svg[lsicon-text-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4H4v1H3V3h10v2h-1V4H8.5v8H10v1H6v-1h1.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTextFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTextOutlineIcon],svg[lsicon-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3 3.5h5m5 0H8m0 0V12m-2 .5h4M12.5 4v1m-9-1v1"></svg:path>`,
})
export class LsiconTextOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThermoDynamicFilledIcon],svg[lsicon-thermo-dynamic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2c-.71 0-1.284.552-1.737 1.387C7.533 4.737 6.21 6 4.5 6a2.5 2.5 0 0 0 0 5h.516c1.424 0 2.562.934 3.331 1.927C8.858 13.587 9.578 14 10.5 14a3.5 3.5 0 0 0 2.48-5.97c-.163-.167-.353-.36-.518-.58c-.654-.872-.765-1.945-.53-2.94Q12 4.24 12 4a2 2 0 0 0-2-2m-2.616.91C7.874 2.006 8.704 1 10 1a3 3 0 0 1 3 3c0 .26-.04.51-.095.741c-.183.775-.08 1.526.357 2.109c.125.166.274.319.452.5l.003.004A4.5 4.5 0 0 1 10.5 15c-1.263 0-2.263-.583-2.943-1.46c-.695-.897-1.574-1.54-2.54-1.54H4.5a3.5 3.5 0 1 1 0-7c1.185 0 2.237-.894 2.884-2.09m3.665 1.034c-.02.1-.06.195-.102.28c-.064.128-.102.362-.074.72c.028.346.113.749.233 1.169c.24.84.602 1.685.841 2.163c.074.149.14.269.206.391c.048.09.097.18.15.283c.115.221.227.459.303.725c.159.557.142 1.162-.132 1.983c-.268.806-.896 1.19-1.505 1.34a3.5 3.5 0 0 1-1.56-.006a.99.99 0 0 1-.753-.548c-.131-.255-.175-.555-.191-.82a8 8 0 0 1 .006-.847l.008-.166c.011-.22.021-.423.021-.611c0-.4-.092-.904-.206-1.525l-.036-.198C8.133 7.589 8 6.8 8 6c0-.51.21-.983.468-1.366c.261-.386.597-.72.913-.966a3.4 3.4 0 0 1 .47-.31c.142-.077.31-.15.477-.173a.7.7 0 0 1 .338.028a.6.6 0 0 1 .357.34c.06.152.046.296.026.391M6.89 7.375c.42.525.354 1.255.057 1.849c-.32.642-1.015.836-1.55.886a4.8 4.8 0 0 1-1.518-.125a.5.5 0 0 1-.233-.131c-.27-.272-.486-.552-.593-.849a1.08 1.08 0 0 1 .08-.95c.161-.267.423-.46.697-.61c.28-.154.625-.29 1.012-.42c.837-.279 1.607-.202 2.048.35" clip-rule="evenodd"></svg:path>`,
})
export class LsiconThermoDynamicFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThermoDynamicOutlineIcon],svg[lsicon-thermo-dynamic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M12.5 4A2.5 2.5 0 0 0 10 1.5c-1.003 0-1.705.779-2.176 1.649C7.134 4.422 5.948 5.5 4.5 5.5a3 3 0 0 0 0 6h.517c1.195 0 2.203.789 2.935 1.733c.595.769 1.456 1.267 2.548 1.267a4 4 0 0 0 2.86-6.797c-.174-.177-.349-.355-.498-.553c-.545-.728-.653-1.64-.443-2.524A2.7 2.7 0 0 0 12.5 4Z"></svg:path><svg:path d="M12 11.5c-.4 1.2-1.833 1.167-2.5 1C8.737 12.416 9 11 9 10s-.5-2.5-.5-4s2.5-3 2-2s.5 3.5 1 4.5s1 1.5.5 3ZM6.5 9c-.4.8-1.833.667-2.5.5c-1-1-.5-1.5 1-2S7 8 6.5 9Z"></svg:path></svg:g>`,
})
export class LsiconThermoDynamicOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbDownFilledIcon],svg[lsicon-thumb-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.58 2h.443l-.02 9.545l1.089 2.179a.5.5 0 0 0 .447.276h.254a2.5 2.5 0 0 0 2.48-2.81l-.152-1.221h3.303a1.5 1.5 0 0 0 1.482-1.732l-.647-4.124A2.5 2.5 0 0 0 11.79 2zm-.574 7.969L5.023 2H2.5a.5.5 0 0 0-.5.5v6.969a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class LsiconThumbDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbDownOutlineIcon],svg[lsicon-thumb-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.523 9.469H2.5V2.5h3.023zm0 0L5.582 2.5h6.207a2 2 0 0 1 1.976 1.69l.647 4.124a1 1 0 0 1-.988 1.155h-3.87l.223 1.783A2 2 0 0 1 7.793 13.5h-.254z"></svg:path>`,
})
export class LsiconThumbDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbUpFilledIcon],svg[lsicon-thumb-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.539 2a.5.5 0 0 0-.447.276L5.5 5.46V14h6.289a2.5 2.5 0 0 0 2.47-2.113l.647-4.124a1.5 1.5 0 0 0-1.482-1.732h-3.303l.152-1.22A2.5 2.5 0 0 0 7.793 2zM4.5 14V6.031h-2a.5.5 0 0 0-.5.5V13.5a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class LsiconThumbUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbUpOutlineIcon],svg[lsicon-thumb-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.523 6.531H2.5V13.5h3.023zm0 0l.059 6.969h6.207a2 2 0 0 0 1.976-1.69l.647-4.124a1 1 0 0 0-.988-1.155h-3.87l.223-1.783A2 2 0 0 0 7.793 2.5h-.254z"></svg:path>`,
})
export class LsiconThumbUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimeOneFilledIcon],svg[lsicon-time-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m.5 6.793V4h-1v4.207l3.146 3.147l.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTimeOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimeOneOutlineIcon],svg[lsicon-time-one-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 4v4l3 3m3.5-3a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconTimeOneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimeTwoFilledIcon],svg[lsicon-time-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5-4v3.793l2.854 2.853l-.708.708L7.5 8.207V4zm0-1V2h-1v1zm0 11v-1h-1v1zM13 7.5h1v1h-1zm-10 0H2v1h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTimeTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimeTwoOutlineIcon],svg[lsicon-time-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 4v4l3 3M8 2v1m0 10v1M2 8h1m10 0h1m.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconTimeTwoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimingShelfDownFilledIcon],svg[lsicon-timing-shelf-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 12 0h1v-.084a7 7 0 1 0-7.084 7.083l.012-1A6 6 0 0 1 2 8"></svg:path><svg:path fill="currentColor" d="M8.5 8V4h-1v3.5H4v1h4a.5.5 0 0 0 .5-.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M11 9.5v2.293l-.646-.647l-.708.708l1.854 1.853l1.854-1.853l-.707-.708l-.647.647V9.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTimingShelfDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimingShelfDownOutlineIcon],svg[lsicon-timing-shelf-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 8h4V4m3.5 5.5V13m0 0l1.5-1.5M11.5 13L10 11.5m-2.078 3A6.5 6.5 0 1 1 14.5 8m0 3.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path>`,
})
export class LsiconTimingShelfDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToBottomFilledIcon],svg[lsicon-to-bottom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 3h12M2 2h12M7.979 2v11M11.5 9.729L7.979 13.25L4.457 9.729"></svg:path>`,
})
export class LsiconToBottomFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToBottomOutlineIcon],svg[lsicon-to-bottom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 3h12M2 2h12M7.979 2v11M11.5 9.729L7.979 13.25L4.457 9.729"></svg:path>`,
})
export class LsiconToBottomOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToTopFilledIcon],svg[lsicon-to-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.979 2l3.875 3.875l-.707.707l-2.668-2.668V12.5H14v2H2v-2h5.479V3.914L4.81 6.582l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconToTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToTopOutlineIcon],svg[lsicon-to-top-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 13h12M2 14h12m-6.021-.043v-11M11.5 6.228L7.979 2.707L4.457 6.228"></svg:path>`,
})
export class LsiconToTopOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleFilledIcon],svg[lsicon-toggle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .374.168l4 4.5l-.748.664L8 2.252l-3.626 4.08l-.748-.664l4-4.5A.5.5 0 0 1 8 1m0 12.747l-3.626-4.08l-.748.665l4 4.5a.5.5 0 0 0 .748 0l4-4.5l-.748-.664z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconToggleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleOutlineIcon],svg[lsicon-toggle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4 6l4-4.5L12 6m-8 4l4 4.5l4-4.5"></svg:path>`,
})
export class LsiconToggleOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleWarehouseXFilledIcon],svg[lsicon-toggle-warehouse-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 12.5h3.5v-7L8 3.5l-6.5 2V8m3-1.5v6m0 0l-2-2m2 2l2-2m1.5-1l2-2m0 0l2 2m-2-2V12"></svg:path>`,
})
export class LsiconToggleWarehouseXFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleWarehouseXOutlineIcon],svg[lsicon-toggle-warehouse-x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 12.5h3.5v-7L8 3.5l-6.5 2V8m3-1.5v6m0 0l-2-2m2 2l2-2m1.5-1l2-2m0 0l2 2m-2-2V12"></svg:path>`,
})
export class LsiconToggleWarehouseXOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleWarehouseYFilledIcon],svg[lsicon-toggle-warehouse-y-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 2.977l7 2.154V13h-4v-1h3V5.87L8 4.022L2 5.87V8H1V5.13zm3.354 3.17L13.707 8.5l-2.353 2.354l-.708-.708L11.793 9H7V8h4.793l-1.147-1.146zM3.207 11l1.147 1.146l-.708.708L1.293 10.5l2.353-2.354l.708.708L3.207 10H8v1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconToggleWarehouseYFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleWarehouseYOutlineIcon],svg[lsicon-toggle-warehouse-y-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 12.5h3.5v-7L8 3.5l-6.5 2V8M8 10.5H2m0 0l2 2m-2-2l2-2m3 0h6m0 0l-2-2m2 2l-2 2"></svg:path>`,
})
export class LsiconToggleWarehouseYOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTopAlignFilledIcon],svg[lsicon-top-align-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM3 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTopAlignFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTopAlignOutlineIcon],svg[lsicon-top-align-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2 2.5h12m-10.5 2h3v9h-3zm6 0h3v7h-3z"></svg:path>`,
})
export class LsiconTopAlignOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTopFilledIcon],svg[lsicon-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM7.979 4.008l4.484 4.484l-.707.707l-3.277-3.277v7.984h-1V5.922L4.2 9.199l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTopOutlineIcon],svg[lsicon-top-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 2.5h12M7.979 13.906V4.957m4.13 3.889L7.98 4.715l-4.131 4.13"></svg:path>`,
})
export class LsiconTopOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTranslateFilledIcon],svg[lsicon-translate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3V2h1v1h2v1h-.691L6.036 6.546l1.284 1.07l-.64.768l-1.286-1.071l-1.54 1.54l-.708-.707L4.623 6.67l-.943-.786l.64-.768l.927.772L6.19 4H3V3zm6.5 1h-2V3h2A1.5 1.5 0 0 1 13 4.5v2h-1v-2a.5.5 0 0 0-.5-.5m-.03 3.83L11 8l-.47-.17l.47-1.293zm.577 4.67q.088.266.164.504c.093.29.169.539.221.728q.039.141.057.224l.011.06V14h1c0-.09-.019-.187-.034-.255a5 5 0 0 0-.07-.28a21 21 0 0 0-.232-.766a92 92 0 0 0-.692-2.05a228 228 0 0 0-.916-2.582l-.086-.237L11 8l-.47-.17l-.086.237a248 248 0 0 0-.916 2.581a92 92 0 0 0-.692 2.051a21 21 0 0 0-.232.767a5 5 0 0 0-.07.279A1.3 1.3 0 0 0 8.5 14h1v.016l.011-.06q.017-.083.057-.224c.052-.19.128-.437.22-.728l.165-.504zm-.338-1A149 149 0 0 0 11 9.479a220 220 0 0 0-.709 2.021zM3 11.5V10h1v1.5a.5.5 0 0 0 .5.5H7v1H4.5A1.5 1.5 0 0 1 3 11.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTranslateFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTranslateOutlineIcon],svg[lsicon-translate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 2v1.5m0 0H3m2.5 0H8m-1 0l-1.5 3l-2 2m.5-3L7 8m2.5 4h3m.5 2c0-.5-2-6-2-6s-2 5.5-2 6m-5.5-4v1.5a1 1 0 0 0 1 1H7m2.5-9h2a1 1 0 0 1 1 1v2"></svg:path>`,
})
export class LsiconTranslateOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTreeFilledIcon],svg[lsicon-tree-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.146 2.153a.5.5 0 0 1 .354-.146h3a.5.5 0 0 1 .5.5V4.51a.5.5 0 0 1-.5.5H8.497V7h4.5a.5.5 0 0 1 .5.5V10H14.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V8h-4v2H9.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V8h-4v2H4.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V7.5a.5.5 0 0 1 .5-.5h4.5V5.01H6.5a.5.5 0 0 1-.5-.5V2.508a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTreeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTreeOutlineIcon],svg[lsicon-tree-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7.997 4.152V7.5m0 0h5V11m-5-3.5h-5V11m5-3.5V11M9.5 2.507V4.51h-3V2.507zm5 7.993v2h-3v-2zm-5 0v2h-3v-2zm-5 0v2h-3v-2z"></svg:path>`,
})
export class LsiconTreeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleDownFilledIcon],svg[lsicon-triangle-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.554 5.773A.5.5 0 0 1 4 5.5h8a.5.5 0 0 1 .404.794l-4 5.5a.5.5 0 0 1-.808 0l-4-5.5a.5.5 0 0 1-.042-.52" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleDownOutlineIcon],svg[lsicon-triangle-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M12 6H4l4 5.5z"></svg:path>`,
})
export class LsiconTriangleDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleLeftFilledIcon],svg[lsicon-triangle-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.227 3.554A.5.5 0 0 1 10.5 4v8a.5.5 0 0 1-.794.404l-5.5-4a.5.5 0 0 1 0-.808l5.5-4a.5.5 0 0 1 .52-.042" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleLeftOutlineIcon],svg[lsicon-triangle-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4.5 8l5.5 4V4z"></svg:path>`,
})
export class LsiconTriangleLeftOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleRightFilledIcon],svg[lsicon-triangle-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.773 3.554a.5.5 0 0 1 .521.042l5.5 4a.5.5 0 0 1 0 .808l-5.5 4A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .273-.446" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleRightOutlineIcon],svg[lsicon-triangle-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 12V4l5.5 4z"></svg:path>`,
})
export class LsiconTriangleRightOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleUpFilledIcon],svg[lsicon-triangle-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .404.206l4 5.5A.5.5 0 0 1 12 10.5H4a.5.5 0 0 1-.404-.794l4-5.5A.5.5 0 0 1 8 4" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleUpOutlineIcon],svg[lsicon-triangle-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M12 10H4l4-5.5z"></svg:path>`,
})
export class LsiconTriangleUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleWarningFilledIcon],svg[lsicon-triangle-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.842 14L8 1.456L1.158 14zM7.5 6v4h1V6zm.5 4.745a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleWarningFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleWarningOutlineIcon],svg[lsicon-triangle-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 6v4m6 3.5l-6-11l-6 11zm-6-2.005h.005v.005H8zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Z"></svg:path>`,
})
export class LsiconTriangleWarningOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUndoFilledIcon],svg[lsicon-undo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a5 5 0 0 0-4.325 2.489H5.49v1h-3.5V3.01h1V4.7a6 6 0 1 1 .282 6.993l.787-.615A5 5 0 1 0 8 3" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUndoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUndoOutlineIcon],svg[lsicon-undo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.489 3.011V5.99h3m-1.825 5.396a5.5 5.5 0 1 0-.857-5.203"></svg:path>`,
})
export class LsiconUndoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUnlinkFilledIcon],svg[lsicon-unlink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2v2H6V2zm2.297.98a2.625 2.625 0 0 1 3.712 3.712l-1.561 1.562l-.707-.707l1.561-1.562a1.625 1.625 0 0 0-2.298-2.298L8.443 5.25l-.707-.707zM3.44 2.732l1.415 1.414l-.708.708l-1.414-1.415zM2 6h2v1H2zm3.379 2.313L3.817 9.874a1.625 1.625 0 0 0 2.298 2.298l1.562-1.561l.707.707l-1.562 1.562A2.625 2.625 0 0 1 3.11 9.167l1.562-1.561zM14 10h-2V9h2zm-2.146 1.146l1.414 1.415l-.707.707l-1.415-1.415zM9 14v-2h1v2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUnlinkFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUnlinkOutlineIcon],svg[lsicon-unlink-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.03 10.965l-1.56 1.561a2.125 2.125 0 1 1-3.005-3.005l1.561-1.562m6.07-.059l1.56-1.561a2.125 2.125 0 1 0-3.004-3.005L8.089 4.895M4 6.5H2M6.5 4V2m-2 2.5L3.086 3.086m9.828 9.828L11.5 11.5m.5-2h2M9.5 12v2"></svg:path>`,
})
export class LsiconUnlinkOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUnlockFilledIcon],svg[lsicon-unlock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3v3H3v8h10V7H6V4a2 2 0 1 1 4 0v1h1V4a3 3 0 0 0-3-3m0 8.5a1 1 0 0 0-.5 1.866V12.5h1v-1.134A1 1 0 0 0 8 9.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUnlockFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUnlockOutlineIcon],svg[lsicon-unlock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 5V4a2.5 2.5 0 0 0-5 0v3M8 10v2.5M8 10a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM3.5 7.5h9v7h-9z"></svg:path>`,
})
export class LsiconUnlockOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUpFilledIcon],svg[lsicon-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 5.293l3.854 3.853l-.707.708L8 6.707L4.854 9.854l-.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUpOutlineIcon],svg[lsicon-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 9.5L8 6l3.5 3.5"></svg:path>`,
})
export class LsiconUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUploadingFilledIcon],svg[lsicon-uploading-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.55 9.529v3.996H2.501V9.53M8 11.053l-.022-8.097m3.286 3.035L7.979 2.706L4.693 5.99"></svg:path>`,
})
export class LsiconUploadingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUploadingOutlineIcon],svg[lsicon-uploading-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.55 9.529v3.996H2.501V9.53M8 11.053l-.022-8.097m3.286 3.035L7.979 2.706L4.693 5.99"></svg:path>`,
})
export class LsiconUploadingOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUrgencyFilledIcon],svg[lsicon-urgency-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.083.739v6.205h3.357l-5.523 8.192V9.61H5.603zM6.5 4H2V3h4.5zm-1 4.5H2v-1h3.5zm1 4.5H2v-1h4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUrgencyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUrgencyOutlineIcon],svg[lsicon-urgency-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 3.5h4.5M2 8h3.5M2 12.5h4.5m4.083-5.056V2.5L6.5 9.111h2.917V13.5L13.5 7.444z"></svg:path>`,
})
export class LsiconUrgencyOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserAllFilledIcon],svg[lsicon-user-all-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m10-1h-3V3h3zm0 2h-3V5h3zm0 2h-3V7h3zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserAllFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserAllOutlineIcon],svg[lsicon-user-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11 5.5h3m-3 2h3m-3-4h3M2.5 14v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m-2-9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconUserAllOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserBlackFilledIcon],svg[lsicon-user-black-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 0 0-4.383 10.098A3.5 3.5 0 0 1 7 9.5h2c.38 0 .748.061 1.092.174l-.311.95A2.5 2.5 0 0 0 9 10.5H7a2.5 2.5 0 0 0-2.497 2.376a6.02 6.02 0 0 0 4.956.946l.242.97a7 7 0 1 1 5.123-5.226l-.975-.223Q14 8.695 14 8a6 6 0 0 0-6-6m0 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m6.293 6.5l-1.147-1.146l.708-.708l1.146 1.147l1.146-1.147l.708.708l-1.147 1.146l1.147 1.146l-.708.708l-1.146-1.147l-1.146 1.147l-.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserBlackFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserBlackOutlineIcon],svg[lsicon-user-black-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m11 11l3 3m-3 0l3-3M4 13a3 3 0 0 1 3-3h2q.492.002.937.15m-.357 4.157a6.5 6.5 0 1 1 4.757-4.852M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class LsiconUserBlackOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserCrowdFilledIcon],svg[lsicon-user-crowd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.195 4.105a2.105 2.105 0 1 1 4.21 0a2.105 2.105 0 0 1-4.21 0m7.5 0a2.105 2.105 0 1 1 4.21 0a2.105 2.105 0 0 1-4.21 0m-3.8 3a2.105 2.105 0 1 1 4.21 0a2.105 2.105 0 0 1-4.21 0M5 6.8H3.5A2.5 2.5 0 0 0 1 9.3v1.2h4zm6 0h1.5A2.5 2.5 0 0 1 15 9.3v1.2h-4zm-6.3 5.5a2.5 2.5 0 0 1 2.5-2.5h1.6a2.5 2.5 0 0 1 2.5 2.5V14H4.7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserCrowdFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserCrowdOutlineIcon],svg[lsicon-user-crowd-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.8 14v-1.7a2 2 0 0 0-2-2H7.2a2 2 0 0 0-2 2V14m9.3-3.5V9.3a2 2 0 0 0-2-2H11m-9.5 3.2V9.3a2 2 0 0 1 2-2H5m4.605-.195a1.605 1.605 0 1 1-3.21 0a1.605 1.605 0 0 1 3.21 0Zm3.8-3a1.605 1.605 0 1 1-3.21 0a1.605 1.605 0 0 1 3.21 0Zm-7.5 0a1.605 1.605 0 1 1-3.21 0a1.605 1.605 0 0 1 3.21 0Z"></svg:path>`,
})
export class LsiconUserCrowdOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserFilledIcon],svg[lsicon-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2 9v-.5A4.5 4.5 0 0 1 7.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserLeaveFilledIcon],svg[lsicon-user-leave-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8.5 1.293V4h1v2.293l.646-.647l.708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5l.708-.708zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserLeaveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserLeaveOutlineIcon],svg[lsicon-user-leave-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13 4v3.5m0 0L14.5 6M13 7.5L11.5 6m-9 8v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m-2-9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconUserLeaveOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserLikeFilledIcon],svg[lsicon-user-like-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m9.92-1.5c.218 0 .43.048.627.14c.196.092.37.225.513.388c.287.328.44.758.44 1.196s-.153.868-.44 1.195v.002l-1.684 1.91a.5.5 0 0 1-.75 0L10.94 6.42l-.002-.002a1.82 1.82 0 0 1-.439-1.195c0-.438.153-.867.44-1.195a1.6 1.6 0 0 1 .513-.388A1.47 1.47 0 0 1 13 3.822q.136-.107.295-.182c.196-.092.409-.14.626-.14M2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserLikeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserLikeOutlineIcon],svg[lsicon-user-like-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 14v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m2.421-10a1 1 0 0 0-.414.093c-.13.062-.25.152-.35.265l-.156.18l-.16-.18a1.1 1.1 0 0 0-.349-.265a.97.97 0 0 0-.827 0q-.198.094-.35.265a1.32 1.32 0 0 0-.315.866c0 .324.113.635.316.866L13 8l1.683-1.91c.203-.231.316-.542.316-.866s-.113-.635-.316-.866a1.1 1.1 0 0 0-.35-.265A1 1 0 0 0 13.922 4ZM9.5 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconUserLikeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserNewFilledIcon],svg[lsicon-user-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8-.54V4h-1v4h1V6.175l.103.129l.007.008c.253.317.492.616.669.867q.133.189.193.303L13 7.54V8h1V4h-1v1.825l-.103-.129l-.007-.008a20 20 0 0 1-.669-.867a3 3 0 0 1-.193-.303zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserNewFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserNewOutlineIcon],svg[lsicon-user-new-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11.5 8V4.5m0 0V4m0 .5c0 .5 2 2.5 2 3m0-3.5v3.5m0 0V8m-11 6v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m-2-9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconUserNewOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserOutlineIcon],svg[lsicon-user-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 14v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m-2-9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconUserOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserPortrayalFilledIcon],svg[lsicon-user-portrayal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14.064A6.97 6.97 0 0 1 8 15c-1.275 0-2.47-.34-3.5-.937V13A2.5 2.5 0 0 1 7 10.5h2a2.5 2.5 0 0 1 2.5 2.5zM8 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 13.362V13A3.5 3.5 0 0 0 9 9.5H7A3.5 3.5 0 0 0 3.5 13v.362a7 7 0 1 1 9 0M5.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserPortrayalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserPortrayalOutlineIcon],svg[lsicon-user-portrayal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 13a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3m10.5-5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0ZM10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class LsiconUserPortrayalOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserSilenceFilledIcon],svg[lsicon-user-silence-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8.793 0H11V4h3v1a.5.5 0 0 1-.146.354L12.207 7H14v1h-3V7a.5.5 0 0 1 .146-.354zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserSilenceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserSilenceOutlineIcon],svg[lsicon-user-silence-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11 4.5h2.5m0 0h.5m-.5 0V5l-2 2v.5m-.5 0h.5m0 0H14M2.5 14v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m-2-9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconUserSilenceOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserWhiteFilledIcon],svg[lsicon-user-white-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" d="M10 12.286L11.454 14L14 11"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 0 0-4.383 10.098A3.5 3.5 0 0 1 7 9.5h2c.38 0 .748.061 1.092.174l-.311.95A2.5 2.5 0 0 0 9 10.5H7a2.5 2.5 0 0 0-2.497 2.376a6.02 6.02 0 0 0 4.956.946l.242.97a7 7 0 1 1 5.123-5.226l-.975-.223Q14 8.695 14 8a6 6 0 0 0-6-6m0 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LsiconUserWhiteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserWhiteOutlineIcon],svg[lsicon-user-white-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linejoin="round" d="M10 12.286L11.454 14L14 11"></svg:path><svg:path d="M4 13a3 3 0 0 1 3-3h2q.492.002.937.15m-.357 4.157a6.5 6.5 0 1 1 4.757-4.852M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path></svg:g>`,
})
export class LsiconUserWhiteOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalCenterFilledIcon],svg[lsicon-vertical-center-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 3V1h1v2h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4v2h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3v2h-1v-2h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3V7h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVerticalCenterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalCenterOutlineIcon],svg[lsicon-vertical-center-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8 1v2.5m0 3v3m0 3V15M3.5 3.5h9v3h-9zm1 6h7v3h-7z"></svg:path>`,
})
export class LsiconVerticalCenterOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalSplitFilledIcon],svg[lsicon-vertical-split-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM3 6h10v4H3zm11 8H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVerticalSplitFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalSplitOutlineIcon],svg[lsicon-vertical-split-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 2.5h12m-12 11h12m-10.5-4v-3h9v3z"></svg:path>`,
})
export class LsiconVerticalSplitOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconViewFilledIcon],svg[lsicon-view-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.5 8l.415-.208V7.79l-.003-.003l-.006-.012l-.021-.04l-.08-.144a8 8 0 0 0-.311-.494a9.4 9.4 0 0 0-1.255-1.485C12.113 4.532 10.38 3.43 8 3.43c-2.378 0-4.112 1.101-5.238 2.182a9.4 9.4 0 0 0-1.255 1.485a8 8 0 0 0-.412.678l-.006.012l-.002.003v.001s-.001.001.414.209l-.415-.209a.47.47 0 0 0 0 .417L1.5 8l-.415.208v.002l.003.003l.006.012a3 3 0 0 0 .1.184a9.4 9.4 0 0 0 1.566 1.98c1.127 1.08 2.86 2.18 5.24 2.18c2.379 0 4.113-1.1 5.24-2.181a9.5 9.5 0 0 0 1.254-1.485a8 8 0 0 0 .391-.638l.021-.04l.006-.012l.002-.003v-.001s.001-.001-.414-.209m0 0l.415.209a.47.47 0 0 0 0-.417zM7.94 6.464a1.536 1.536 0 1 0 0 3.072a1.536 1.536 0 0 0 0-3.072M5.478 8a2.464 2.464 0 1 1 4.928 0a2.464 2.464 0 0 1-4.928 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconViewFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconViewOffFilledIcon],svg[lsicon-view-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.428 7.163C4.436 8.13 5.944 9.076 8 9.076s3.564-.946 4.572-1.913a8.5 8.5 0 0 0 1.124-1.332a7 7 0 0 0 .34-.55l.014-.028l.003-.006l.447.224l.447.224l-.001.002l-.002.003l-.006.012a4 4 0 0 1-.102.185c-.07.122-.174.293-.313.497a9.5 9.5 0 0 1-1.259 1.49a8.5 8.5 0 0 1-1.358 1.065l1.22 2.636l-.908.42l-1.194-2.58a7.2 7.2 0 0 1-2.56.637V13h-1v-2.943a7.2 7.2 0 0 1-2.468-.623l-1.205 2.573l-.905-.425l1.228-2.621a8.4 8.4 0 0 1-1.378-1.077a9.5 9.5 0 0 1-1.26-1.49a8 8 0 0 1-.414-.682L1.056 5.7l-.002-.003v-.002l.446-.224l.447-.224l.003.006l.015.028q.02.039.065.116a8.5 8.5 0 0 0 1.398 1.766" clip-rule="evenodd"></svg:path>`,
})
export class LsiconViewOffFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconViewOffOutlineIcon],svg[lsicon-view-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 5.47S12.447 9.577 8 9.577S1.5 5.471 1.5 5.471m6.464 4.051V13m3.2-4.463l1.508 3.257M4.75 8.781l-1.412 3.013"></svg:path>`,
})
export class LsiconViewOffOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconViewOutlineIcon],svg[lsicon-view-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width=".929"><svg:path d="M8 3.895C12.447 3.895 14.5 8 14.5 8s-2.053 4.105-6.5 4.105S1.5 8 1.5 8S3.553 3.895 8 3.895Z"></svg:path><svg:path d="M9.94 8a2 2 0 1 1-3.999 0a2 2 0 0 1 4 0Z"></svg:path></svg:g>`,
})
export class LsiconViewOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVipConsumeFilledIcon],svg[lsicon-vip-consume-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.624 2.17A.5.5 0 0 1 5 2h6a.5.5 0 0 1 .376.17l3.5 4a.5.5 0 0 1-.022.684l-1.5 1.5l-.708-.708l1.17-1.169L10.773 3H5.227L2.173 6.49l5.84 6.29l1.133-1.134l.708.708l-1.5 1.5a.5.5 0 0 1-.72-.014l-6.5-7a.5.5 0 0 1-.01-.67zm3.002 8.662l-4-4.5l.748-.664L8 9.748l3.626-4.08l.748.664l-4 4.5a.5.5 0 0 1-.748 0M12.5 9v2.293l.646-.647l.708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5l.708-.708l.646.647V9z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVipConsumeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVipConsumeOutlineIcon],svg[lsicon-vip-consume-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4 6l4 4.5L12 6m0 6.5L10.5 11m1.5 1.5V9m0 3.5l1.5-1.5m-4 1l-.5.5l-1 1l-6.5-7l3.5-4h6l3.5 4l-1 1l-.5.5"></svg:path>`,
})
export class LsiconVipConsumeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVipFilledIcon],svg[lsicon-vip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.227 2H4.773L.827 6.51L8 14.235l7.173-7.725zM4.374 5.668l-.748.664L8 11.252l4.374-4.92l-.748-.664L8 9.748z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVipFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVipOutlineIcon],svg[lsicon-vip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m4 6l4 4.5L12 6m-4 7.5l6.5-7l-3.5-4H5l-3.5 4z"></svg:path>`,
})
export class LsiconVipOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeDownFilledIcon],svg[lsicon-volume-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.709 2.046A.5.5 0 0 1 9 2.5v11a.5.5 0 0 1-.825.38L4.815 11H2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.315l3.36-2.88a.5.5 0 0 1 .534-.074M14 8.5h-4v-1h4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeDownOutlineIcon],svg[lsicon-volume-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10 8h4M2.5 5.5H5l3.5-3v11l-3.5-3H2.5z"></svg:path>`,
})
export class LsiconVolumeDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeFilledIcon],svg[lsicon-volume-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.413v13.174L4.815 11H2V5h2.815zm4.053 1.99a6.5 6.5 0 0 1 0 9.193l-.707-.707a5.5 5.5 0 0 0 0-7.778zm-2.078 2.122a3.5 3.5 0 0 1 0 4.95l-.707-.707a2.5 2.5 0 0 0 0-3.536z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeMuteFilledIcon],svg[lsicon-volume-mute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.416v4.66H8l-1.245-1.43l-.649-.761zM4.293 5L1.646 2.354l.708-.708l12 12l-.707.707L9 9.708v4.88L4.815 11H2V5zm8.76-1.596a6.5 6.5 0 0 1 1.36 7.202c-.153.373-.233.566-.533.972l-.804-.595c.226-.305.268-.407.411-.754l.051-.124a5.5 5.5 0 0 0-1.192-5.994zm-2.078 2.121A3.5 3.5 0 0 1 12 8c0 .281-.079.553-.143.733a3 3 0 0 1-.126.3l-.01.021l-.004.007v.002l-.001.001l-.444-.23l-.444-.23l.004-.009a2 2 0 0 0 .083-.199c.05-.138.085-.283.085-.396a2.5 2.5 0 0 0-.732-1.768z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeMuteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeMuteOutlineIcon],svg[lsicon-volume-mute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.7 3.757a6 6 0 0 1 1.3 6.54c-.188.453-.231.59-.522.984m-2.206-2.447s.228-.44.228-.834a3 3 0 0 0-.879-2.121m-5.375-.57C5.08 5.45 5 5.5 5 5.5H2.5v5H5l3.5 3V8.834M6.43 4.265L8.5 2.5v3.575M2 2l12 12"></svg:path>`,
})
export class LsiconVolumeMuteOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeOutlineIcon],svg[lsicon-volume-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.7 12.243a6 6 0 0 0 0-8.486m-2.079 6.364a3 3 0 0 0 0-4.242M2.5 5.5H5l3.5-3v11l-3.5-3H2.5z"></svg:path>`,
})
export class LsiconVolumeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeUpFilledIcon],svg[lsicon-volume-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.709 2.046A.5.5 0 0 1 9 2.5v11a.5.5 0 0 1-.825.38L4.815 11H2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.315l3.36-2.88a.5.5 0 0 1 .534-.074M11.5 7.5V6h1v1.5H14v1h-1.5V10h-1V8.5H10v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeUpOutlineIcon],svg[lsicon-volume-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10 8h4m-2-2v4M2.5 5.5H5l3.5-3v11l-3.5-3H2.5z"></svg:path>`,
})
export class LsiconVolumeUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseFilledIcon],svg[lsicon-warehouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.658 2.092a1 1 0 0 1 .684 0l5 1.818a1 1 0 0 1 .658.94V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.85a1 1 0 0 1 .658-.94zm.342.94L3 4.85V10h4V9a1 1 0 0 1 1-1h5V4.85zM5.5 12v1h-1v-1zm4.5 1h1v-2h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWarehouseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseIntoFilledIcon],svg[lsicon-warehouse-into-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.853 3.022a.5.5 0 0 1 .294 0l6.5 2A.5.5 0 0 1 15 5.5v7a.5.5 0 0 1-.5.5H11v-1h3V5.87L8 4.022L2 5.87V8H1V5.5a.5.5 0 0 1 .353-.478zm-.5 5.624l2 2a.5.5 0 0 1 0 .708l-2 2l-.707-.708L7.793 11.5H1v-1h6.793L6.646 9.354z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWarehouseIntoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseIntoOutlineIcon],svg[lsicon-warehouse-into-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11 12.5h3.5v-7L8 3.5l-6.5 2V8M1 11h8m0 0L7 9m2 2l-2 2"></svg:path>`,
})
export class LsiconWarehouseIntoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseOutlineIcon],svg[lsicon-warehouse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 10.5h5V13M5 12v1.5m8.5-5H8a.5.5 0 0 0-.5.5v3.5m3-1.5v2M7.83 2.562l-5 1.818a.5.5 0 0 0-.33.47V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4.85a.5.5 0 0 0-.33-.47l-5-1.818a.5.5 0 0 0-.34 0Z"></svg:path>`,
})
export class LsiconWarehouseOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehousePreFilledIcon],svg[lsicon-warehouse-pre-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.658 2.092a1 1 0 0 1 .684 0l5 1.818a1 1 0 0 1 .658.94V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.85a1 1 0 0 1 .658-.94zM5 13h1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h1V7H5zm7 0V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6H3V4.85l5-1.818l5 1.818V13z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWarehousePreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehousePreOutlineIcon],svg[lsicon-warehouse-pre-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 14V7a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v7m-5 0v-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3M7.83 2.562l-5 1.818a.5.5 0 0 0-.33.47V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4.85a.5.5 0 0 0-.33-.47l-5-1.818a.5.5 0 0 0-.34 0Z"></svg:path>`,
})
export class LsiconWarehousePreOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiAbnormalFilledIcon],svg[lsicon-wifi-abnormal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 10.5V2h1v8.5zM4.209 3.264a9.8 9.8 0 0 1 2.737-.707l.108.994a8.8 8.8 0 0 0-2.458.635A8.9 8.9 0 0 0 1.71 6.143L.998 5.44a9.9 9.9 0 0 1 3.211-2.176m4.843-.707a9.8 9.8 0 0 1 2.738.707A9.9 9.9 0 0 1 15 5.44l-.712.703a8.9 8.9 0 0 0-2.887-1.957a8.8 8.8 0 0 0-2.457-.635zM7.081 6.752a5.74 5.74 0 0 0-3.156 1.637l-.712-.702a6.74 6.74 0 0 1 3.706-1.922zm4.993 1.637a5.74 5.74 0 0 0-3.156-1.637l.161-.987a6.74 6.74 0 0 1 3.707 1.922zm-2.682.746a3.6 3.6 0 0 1 1.178.798l-.711.702a2.6 2.6 0 0 0-.854-.578zm-3.964.798a3.6 3.6 0 0 1 1.179-.798l.387.922c-.319.133-.61.33-.854.578zM6.99 12.49a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWifiAbnormalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiAbnormalOutlineIcon],svg[lsicon-wifi-abnormal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.645 5.791a9.4 9.4 0 0 0-3.05-2.066a9.3 9.3 0 0 0-2.597-.671M1.354 5.791a9.4 9.4 0 0 1 3.049-2.066A9.3 9.3 0 0 1 7 3.054M3.569 8.038a6.24 6.24 0 0 1 3.43-1.78m5.43 1.78A6.24 6.24 0 0 0 9 6.258m1.215 4.026a3.1 3.1 0 0 0-1.016-.688m-2.398 0a3.1 3.1 0 0 0-1.016.688M8 2v8.5m-.01 1.99H8v.01h-.01zm.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path>`,
})
export class LsiconWifiAbnormalOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiCloseFilledIcon],svg[lsicon-wifi-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.105 3.812L1.646 2.354l.708-.708l12 12l-.708.708L9.893 10.6l-.034.034a2.597 2.597 0 0 0-3.719 0l-.712-.702A3.6 3.6 0 0 1 8.15 8.857L6.247 6.954A5.75 5.75 0 0 0 3.925 8.39l-.712-.702a6.8 6.8 0 0 1 2.255-1.512L3.84 4.547a8.9 8.9 0 0 0-2.13 1.595L.998 5.44a10 10 0 0 1 2.107-1.628m1.912-.846a9.78 9.78 0 0 1 6.773.298A9.9 9.9 0 0 1 15 5.44l-.712.702a8.9 8.9 0 0 0-2.887-1.956a8.8 8.8 0 0 0-6.08-.268zm7.057 5.423a5.72 5.72 0 0 0-4.075-1.712v-1c1.797 0 3.519.724 4.787 2.01zM6.99 12.49a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWifiCloseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiCloseOutlineIcon],svg[lsicon-wifi-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.645 5.791a9.4 9.4 0 0 0-3.05-2.066a9.3 9.3 0 0 0-6.425-.283m-3.816 2.35a9.4 9.4 0 0 1 2.751-1.935m-.536 4.181a6.24 6.24 0 0 1 2.93-1.676M8 6.177a6.22 6.22 0 0 1 4.43 1.861m-2.215 2.246a3.097 3.097 0 0 0-4.43 0M2 2l12 12m-6.01-1.51H8v.01h-.01zm.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path>`,
})
export class LsiconWifiCloseOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiFilledIcon],svg[lsicon-wifi-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.209 3.264a9.8 9.8 0 0 1 7.58 0a9.9 9.9 0 0 1 3.212 2.176l-.712.702a8.9 8.9 0 0 0-2.887-1.956a8.8 8.8 0 0 0-6.806 0A8.9 8.9 0 0 0 1.71 6.143L.998 5.44a9.9 9.9 0 0 1 3.211-2.176m3.79 3.413A5.72 5.72 0 0 0 3.925 8.39l-.712-.702a6.72 6.72 0 0 1 4.786-2.01c1.797 0 3.519.724 4.787 2.01l-.712.702a5.72 5.72 0 0 0-4.075-1.712M6.607 9.135a3.6 3.6 0 0 1 3.963.798l-.711.702a2.6 2.6 0 0 0-.854-.578a2.6 2.6 0 0 0-2.865.578l-.712-.702a3.6 3.6 0 0 1 1.179-.798m.383 3.355a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWifiFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiOutlineIcon],svg[lsicon-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14.645 5.791a9.4 9.4 0 0 0-3.05-2.066a9.3 9.3 0 0 0-7.192 0a9.4 9.4 0 0 0-3.05 2.066M3.57 8.038A6.22 6.22 0 0 1 8 6.178a6.22 6.22 0 0 1 4.43 1.86m-2.215 2.246a3.097 3.097 0 0 0-4.43 0M7.99 12.49H8v.01h-.01zm.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path>`,
})
export class LsiconWifiOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWordCloudFilledIcon],svg[lsicon-word-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a5 5 0 0 0-5 5v.541A3 3 0 0 0 .5 10.5v1A2.5 2.5 0 0 0 3 14h10a2.5 2.5 0 0 0 2.5-2.5v-1A3 3 0 0 0 13 7.541V7a5 5 0 0 0-5-5M5.5 7.5h2V11h1V7.5h2v-1h-5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWordCloudFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWordCloudOutlineIcon],svg[lsicon-word-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 7H8m0 0h2.5M8 7v4m-5 2.5a2 2 0 0 1-2-2v-1A2.5 2.5 0 0 1 3.5 8V7a4.5 4.5 0 0 1 9 0v1a2.5 2.5 0 0 1 2.5 2.5v1a2 2 0 0 1-2 2z"></svg:path>`,
})
export class LsiconWordCloudOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderAbnormalFilledIcon],svg[lsicon-work-order-abnormal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H7v-1H4V2h8v5h1V1.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="currentColor" d="M5 5h6V4H5zm0 2h4V6H5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m.5 3.5v-2h-1v2zm-.5.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderAbnormalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderAbnormalOutlineIcon],svg[lsicon-work-order-abnormal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7 14.5H3.5v-13h9V7M5 6.5h4m-4-2h6m-.5 7v-2m3 2a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-3 1.25h.005v.005H10.5zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Z"></svg:path>`,
})
export class LsiconWorkOrderAbnormalOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderAppointmentFilledIcon],svg[lsicon-work-order-appointment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h3v-1H4V2h8v5h1V1.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="currentColor" d="M5 5h6V4H5zm0 2h4V6H5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10 9.5v2a.5.5 0 0 0 .146.354l1.5 1.5l.708-.708L11 11.293V9.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderAppointmentFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderAppointmentOutlineIcon],svg[lsicon-work-order-appointment-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 14.5h-3v-13h9V7M5 4.5h6m-6 2h4m1.5 3v2L12 13m1.5-1.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path>`,
})
export class LsiconWorkOrderAppointmentOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderCheckFilledIcon],svg[lsicon-work-order-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V7h-1V2H4v12h2.5v1h-3a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm1 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-3 2a3 3 0 1 1 5.445 1.738l1.409 1.408l-.708.708l-1.408-1.409A3 3 0 0 1 7 11" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderCheckFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderCheckOutlineIcon],svg[lsicon-work-order-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 14.5h-3v-13h9V7M5 4.5h6m-6 2h4m4.5 8l-2-2m1-1.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconWorkOrderCheckOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderFilledIcon],svg[lsicon-work-order-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM11 5.5H5v-1h6zm0 3H5v-1h6zm-6 3h4v-1H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderInfoFilledIcon],svg[lsicon-work-order-info-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm1.5 2V8h1v1H13v1h-2.5c-.274 0-.5.226-.5.5s.226.5.5.5h1c.826 0 1.5.674 1.5 1.5s-.674 1.5-1.5 1.5v1h-1v-1H9v-1h2.5c.274 0 .5-.226.5-.5s-.226-.5-.5-.5h-1c-.826 0-1.5-.674-1.5-1.5S9.674 9 10.5 9M7 12H5v-1h2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderInfoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderInfoOutlineIcon],svg[lsicon-work-order-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 6.5h4m-4-2h6m-6 7h2m2 2h2.5c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.55 0-1-.45-1-1s.45-1 1-1H13M11 8v1.167M11 13v2m-4-.5H3.5v-13h9v5"></svg:path>`,
})
export class LsiconWorkOrderInfoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderOutlineIcon],svg[lsicon-work-order-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 8h6M5 5h6m-6 6h4M3.5 1.5v13h9v-13z"></svg:path>`,
})
export class LsiconWorkOrderOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkingOddFilledIcon],svg[lsicon-working-odd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V7h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm-2 4.5A3.5 3.5 0 0 1 10.5 8a.5.5 0 0 1 .5.5V11h2.5a.5.5 0 0 1 .5.5a3.5 3.5 0 1 1-7 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkingOddFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkingOddOutlineIcon],svg[lsicon-working-odd-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 6.5h4m-4-2h6m-4 10H3.5v-13h9V7m1 4.5a3 3 0 1 1-3-3v3z"></svg:path>`,
})
export class LsiconWorkingOddOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconZoomInFilledIcon],svg[lsicon-zoom-in-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2a5.5 5.5 0 1 0 3.52 9.727l2.626 2.627l.708-.708l-2.627-2.626A5.5 5.5 0 0 0 7.5 2M7 4.5V7H4.5v1H7v2.5h1V8h2.5V7H8V4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconZoomInFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconZoomInOutlineIcon],svg[lsicon-zoom-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 7.5h6m-3-3v6m3.5.5l3 3m-1.5-6.5a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></svg:path>`,
})
export class LsiconZoomInOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconZoomOutFilledIcon],svg[lsicon-zoom-out-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2a5.5 5.5 0 1 0 3.52 9.727l2.626 2.627l.708-.708l-2.627-2.626A5.5 5.5 0 0 0 7.5 2m-3 6h6V7h-6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconZoomOutFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconZoomOutOutlineIcon],svg[lsicon-zoom-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 7.5h6M11 11l3 3m-1.5-6.5a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></svg:path>`,
})
export class LsiconZoomOutOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAddChatTwoFilledIcon],svg[lsicon-add-chat-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 10.943-.794l.99-.143a6.501 6.501 0 1 0-12.279 3.782v3.03l3.04-.01a6.54 6.54 0 0 0 3.889.546l-.166-.987a5.54 5.54 0 0 1-3.383-.506l-.107-.054l-2.273.008v-2.265L3.1 10.5A5.5 5.5 0 0 1 2.5 8m9.5-.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-.5 2v1h-1v1h1v1h1v-1h1v-1h-1v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAddChatTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAddOneOutlineIcon],svg[lsicon-add-one-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 8h10M8 3v10"></svg:path>`,
})
export class LsiconAddOneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAdjustWidthFilledIcon],svg[lsicon-adjust-width-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 13V3h1v10zm14 0h-1V3h1zM4.207 8.5l1.147 1.146l-.708.708L2.293 8l2.353-2.354l.708.708L4.207 7.5H7v1zm7.147-2.854L13.707 8l-2.353 2.354l-.708-.708L11.793 8.5H9v-1h2.793l-1.147-1.146z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAdjustWidthFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAdjustHightOutlineIcon],svg[lsicon-adjust-hight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 1.5H3m10 13H3M8 7V3m0 0l2 2M8 3L6 5m2 8V9m0 4l-2-2m2 2l2-2"></svg:path>`,
})
export class LsiconAdjustHightOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAddChatOutlineIcon],svg[lsicon-add-chat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 8h6M8 5v6m-5.5 2.5H8A5.5 5.5 0 1 0 2.5 8z"></svg:path>`,
})
export class LsiconAddChatOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
