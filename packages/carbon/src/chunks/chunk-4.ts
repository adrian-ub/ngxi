import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStatusPartialFailIcon],svg[carbon-status-partial-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M25.14 23.764l1.532 1.285a13.976 13.976 0 0 0 2.441-4.182l-1.878-.683a11.973 11.973 0 0 1-2.094 3.58z" fill="currentColor"></svg:path><svg:path d="M18 27.81l.413 1.968a13.889 13.889 0 0 0 4.541-1.638L22 26.409a12.52 12.52 0 0 1-4 1.401z" fill="currentColor"></svg:path><svg:path d="M10 26.409L9 28.14a14.14 14.14 0 0 0 4.587 1.638l.347-1.967A12.152 12.152 0 0 1 10 26.409z" fill="currentColor"></svg:path><svg:path d="M4.765 20.184l-1.878.683a13.976 13.976 0 0 0 2.44 4.182l1.532-1.285a11.973 11.973 0 0 1-2.094-3.58z" fill="currentColor"></svg:path><svg:path d="M16 22a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z" fill="currentColor"></svg:path><svg:path d="M15 8h2v11h-2z" fill="currentColor"></svg:path><svg:path d="M30 16h-2a12 12 0 0 0-24 0H2a14 14 0 0 1 28 0z" fill="currentColor"></svg:path>`,
})
export class CarbonStatusPartialFailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStatusResolvedIcon],svg[carbon-status-resolved-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 28.414l-5-5.001L17.413 22L21 25.586L28.585 18L30 19.415l-9 8.999z" fill="currentColor"></svg:path><svg:path d="M12 15.59L9.41 13L8 14.41l4 4l7-7L17.59 10L12 15.59z" fill="currentColor"></svg:path><svg:path d="M11.82 25.802a11.992 11.992 0 1 1 13.982-9.621l-1.967-.362a10.001 10.001 0 1 0-11.654 8.016z" fill="currentColor"></svg:path>`,
})
export class CarbonStatusResolvedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStayInsideIcon],svg[carbon-stay-inside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 30h-2v-2a3.003 3.003 0 0 0-3-3h-4a3.003 3.003 0 0 0-3 3v2H9v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zm-7-17a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="M30 30h-2V14.464L16 4.31L4 14.464V30H2V14a1 1 0 0 1 .354-.763l13-11a1 1 0 0 1 1.292 0l13 11A1 1 0 0 1 30 14Z"></svg:path>`,
})
export class CarbonStayInsideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStemLeafPlotIcon],svg[carbon-stem-leaf-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 13a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8 4a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8 13a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1M12 2h2v28h-2zM7 28a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-5a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-5a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class CarbonStemLeafPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStethoscopeIcon],svg[carbon-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2v2h2v6a4 4 0 0 1-8 0V4h2V2h-4v8a6.005 6.005 0 0 0 5 5.91V22a6 6 0 0 1-12 0v-6.142a4 4 0 1 0-2 0V22a8 8 0 0 0 16 0v-6.09A6.005 6.005 0 0 0 28 10V2ZM6 12a2 2 0 1 1 2 2a2 2 0 0 1-2-2"></svg:path>`,
})
export class CarbonStethoscopeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStickiesIcon],svg[carbon-stickies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 22V10c0-1.1-.9-2-2-2H12c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c.3 0 .5-.1.7-.3l7-7c.2-.2.3-.4.3-.7m-8 0h5.6L22 27.6zm6-2h-6c-1.1 0-2 .9-2 2v6h-8V10h16z"></svg:path><svg:path fill="currentColor" d="M4 22V4h16v2h2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h4v-2z"></svg:path>`,
})
export class CarbonStickiesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStopIcon],svg[carbon-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 8v16H8V8zm0-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonStopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStopFilledIcon],svg[carbon-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m6 18a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class CarbonStopFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStopFilledAltIcon],svg[carbon-stop-filled-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 6H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonStopFilledAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStopOutlineIcon],svg[carbon-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path><svg:path fill="currentColor" d="M20 12v8h-8v-8zm0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonStopOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStopOutlineFilledIcon],svg[carbon-stop-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m6 18a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"></svg:path><svg:path fill="currentColor" d="M12 12h8v8h-8z"></svg:path>`,
})
export class CarbonStopOutlineFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStopSignIcon],svg[carbon-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.586 29h-9.172A2 2 0 0 1 10 28.414L3.586 22A2 2 0 0 1 3 20.586v-9.172A2 2 0 0 1 3.586 10L10 3.586A2 2 0 0 1 11.414 3h9.172A2 2 0 0 1 22 3.586L28.414 10A2 2 0 0 1 29 11.414v9.172A2 2 0 0 1 28.414 22L22 28.414a2 2 0 0 1-1.414.586M11.414 5L5 11.414v9.172L11.414 27h9.172L27 20.586v-9.172L20.586 5z"></svg:path>`,
})
export class CarbonStopSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStopSignFilledIcon],svg[carbon-stop-sign-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.586 29h-9.172A2 2 0 0 1 10 28.414L3.586 22A2 2 0 0 1 3 20.586v-9.172A2 2 0 0 1 3.586 10L10 3.586A2 2 0 0 1 11.414 3h9.172A2 2 0 0 1 22 3.586L28.414 10A2 2 0 0 1 29 11.414v9.172A2 2 0 0 1 28.414 22L22 28.414a2 2 0 0 1-1.414.586"></svg:path>`,
})
export class CarbonStopSignFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStoragePoolIcon],svg[carbon-storage-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path><svg:path fill="currentColor" d="M17.5 13A3.5 3.5 0 1 1 21 9.5a3.504 3.504 0 0 1-3.5 3.5m0-5A1.5 1.5 0 1 0 19 9.5A1.5 1.5 0 0 0 17.5 8m-3 18a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5m-5-3a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 9.5 18m0-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 9.5 13m13 8a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class CarbonStoragePoolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStorageRequestIcon],svg[carbon-storage-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21H2v3a2.006 2.006 0 0 0 2 2h3v-2H4zM4 8h3V6H4a2.006 2.006 0 0 0-2 2v3h2zm13-2h6v2h-6zM9 6h6v2H9zm8 18h6v2h-6zm11-9H4v-2H2v6h2v-2h24v2h2v-6h-2zm0 9h-3v2h3a2.006 2.006 0 0 0 2-2v-3h-2zm0-18h-3v2h3v3h2V8a2.006 2.006 0 0 0-2-2M9 24h6v2H9z"></svg:path><svg:circle cx="7" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="20" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonStorageRequestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStoreIcon],svg[carbon-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 10.68l-2-6A1 1 0 0 0 27 4H5a1 1 0 0 0-1 .68l-2 6A1.2 1.2 0 0 0 2 11v6a1 1 0 0 0 1 1h1v10h2V18h6v10h16V18h1a1 1 0 0 0 1-1v-6a1.2 1.2 0 0 0 0-.32M26 26H14v-8h12Zm2-10h-4v-4h-2v4h-5v-4h-2v4h-5v-4H8v4H4v-4.84L5.72 6h20.56L28 11.16Z"></svg:path>`,
})
export class CarbonStoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStormTrackerIcon],svg[carbon-storm-tracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a1 1 0 0 0-.974.771l-1.722 7.322a10.065 10.065 0 1 0 8.603 8.603l7.322-1.722A1 1 0 0 0 30 16A14.016 14.016 0 0 0 16 2m-4.707 18.707A1 1 0 0 0 12 21a1 1 0 0 0 .229-.026l3.762-.886a3.996 3.996 0 1 1-4.08-4.08l-.885 3.763a1 1 0 0 0 .267.936m2.05-2.05l2.271-9.65a7.5 7.5 0 0 1 7.38 7.38ZM20 20a8 8 0 1 1-8-8a8 8 0 0 1 .844.047l-.464 1.972c-.127-.008-.253-.019-.38-.019a6 6 0 1 0 6 6c0-.127-.011-.253-.019-.38l1.972-.464A8 8 0 0 1 20 20m4.97-4.08a9.5 9.5 0 0 0-8.89-8.89l.706-3.005a12.02 12.02 0 0 1 11.189 11.189Z"></svg:path>`,
})
export class CarbonStormTrackerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStrategyPlayIcon],svg[carbon-strategy-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.415L10.586 2L7 5.587L3.414 2L2 3.415L5.586 7L2 10.586L3.414 12L7 8.414L10.586 12L12 10.586L8.414 7zM25 2l-5 5l1.409 1.419L24 5.794V15H8c-1.103 0-2 .898-2 2v3.101c-2.28.464-4 2.484-4 4.899c0 2.757 2.243 5 5 5s5-2.243 5-5a5.01 5.01 0 0 0-4-4.899V17h16c1.103 0 2-.897 2-2V5.847l2.591 2.572L30 7zM10 25c0 1.654-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3"></svg:path><svg:path fill="currentColor" d="M30 21.415L28.586 20L25 23.587L21.414 20L20 21.415L23.586 25L20 28.586L21.414 30L25 26.414L28.586 30L30 28.586L26.414 25z"></svg:path>`,
})
export class CarbonStrategyPlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStrawberryIcon],svg[carbon-strawberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10h2v2H9zm0 4h2v2H9zm4-2h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M9 28a5 5 0 0 1-.744-.054A5.094 5.094 0 0 1 4 22.866V11.2a7.16 7.16 0 0 1 6.31-7.166a6.96 6.96 0 0 1 4.464 1.07l7.97 4.981a6.98 6.98 0 0 1-.69 12.19l-10.88 5.229A5 5 0 0 1 9 28m2.002-22q-.248 0-.5.024A5.146 5.146 0 0 0 6 11.198v11.669a3.084 3.084 0 0 0 2.544 3.1a3.03 3.03 0 0 0 1.762-.265l10.883-5.23a4.98 4.98 0 0 0 .488-8.696l-7.972-4.982A4.97 4.97 0 0 0 11.002 6M26 7h-4a4.005 4.005 0 0 1-4-4V2h2v1a2 2 0 0 0 2 2h4z"></svg:path>`,
})
export class CarbonStrawberryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStressBreathEditorIcon],svg[carbon-stress-breath-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z" fill="currentColor"></svg:path><svg:path d="M30 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5h-2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" fill="currentColor"></svg:path><svg:path d="M11 8H5a3 3 0 0 1-3-3V3h2v2a1 1 0 0 0 1 1h6z" fill="currentColor"></svg:path><svg:path d="M4 15H2v-2a3 3 0 0 1 3-3h6v2H5a1 1 0 0 0-1 1z" fill="currentColor"></svg:path>`,
})
export class CarbonStressBreathEditorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStringIntegerIcon],svg[carbon-string-integer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 12h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-7 10h-6v-4a2 2 0 0 1 2-2h2v-2h-4v-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4zM8 20v-8H6v1H4v2h2v5H4v2h6v-2z"></svg:path>`,
})
export class CarbonStringIntegerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStringTextIcon],svg[carbon-string-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 22h-5a2.003 2.003 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5zM18 12h-4V8h-2v14h6a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zm-6-8H3v2h5v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2m0 8H4v-2h4z"></svg:path>`,
})
export class CarbonStringTextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStudyNextIcon],svg[carbon-study-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M23.93 21L30 15l-6.07-6l-1.43 1.41L27.14 15l-4.64 4.59L23.93 21z" fill="currentColor"></svg:path><svg:path d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z" fill="currentColor"></svg:path><svg:path d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyNextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStudyPreviousIcon],svg[carbon-study-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.07 21L2 15l6.07-6l1.43 1.41L4.86 15l4.64 4.59L8.07 21z" fill="currentColor"></svg:path><svg:path d="M20 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z" fill="currentColor"></svg:path><svg:path d="M30 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5h-2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyPreviousIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStudyReadIcon],svg[carbon-study-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 29.414l-5-5.001L17.413 23L21 26.586L28.585 19L30 20.415l-9 8.999z" fill="currentColor"></svg:path><svg:path d="M20 14v-2h-5v-2h3V8h-3V6h-2v2h-3v2h3v2H8v2h5v2H8v2h5v2h-3v2h5v-4h3v-2h-3v-2h5z" fill="currentColor"></svg:path><svg:path d="M13 24H4V4h20v12h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h9z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyReadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStudySkipIcon],svg[carbon-study-skip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 9h5.2A11 11 0 0 0 7 15H5a13 13 0 0 1 23-8.3V3h2v8h-8z" fill="currentColor"></svg:path><svg:path d="M16 12a3 3 0 1 1-3 3a2.95 2.95 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5z" fill="currentColor"></svg:path><svg:path d="M23 30h-2v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3H9v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5z" fill="currentColor"></svg:path>`,
})
export class CarbonStudySkipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStudyTransferIcon],svg[carbon-study-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.586 19.414L13.165 24l-4.579 4.586L10 30l6-6l-6-6l-1.414 1.414z" fill="currentColor"></svg:path><svg:path d="M2.586 19.414L7.165 24l-4.579 4.586L4 30l6-6l-6-6l-1.414 1.414z" fill="currentColor"></svg:path><svg:path d="M12 14v-2h5v-2h-3V8h3V6h2v2h3v2h-3v2h5v2h-5v2h5v2h-5v2h3v2h-5v-4h-3v-2h3v-2h-5z" fill="currentColor"></svg:path><svg:path d="M19 24h9V4H8v12H6V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-9z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyTransferIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStudyUnreadIcon],svg[carbon-study-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4z" fill="currentColor"></svg:path><svg:path d="M20 14v-2h-5v-2h3V8h-3V6h-2v2h-3v2h3v2H8v2h5v2H8v2h5v2h-3v2h7v-2h-2v-2h3v-2h-3v-2h5z" fill="currentColor"></svg:path><svg:path d="M15 24H4V4h20v11h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h11z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyUnreadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStudyViewIcon],svg[carbon-study-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 20h-3v-2h3V4H14v3h-2V4a2.002 2.002 0 0 1 2-2h14a2.002 2.002 0 0 1 2 2v14a2.003 2.003 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M17 22v-2h-4v-2h3v-2h-3v-2h-2v2H8v2h3v2H7v2h4v2H8v2h8v-2h-3v-2h4z" fill="currentColor"></svg:path><svg:path d="M20 30H4a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v16a2.002 2.002 0 0 1-2 2zM4 12v16h16V12z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubVolumeIcon],svg[carbon-sub-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M29.474 19.12L23.681 16l5.793-3.12a1 1 0 0 0 0-1.76l-13-7a.998.998 0 0 0-.948 0l-13 7a1 1 0 0 0 0 1.76L8.319 16l-5.793 3.12a1 1 0 0 0 0 1.76l13 7a1 1 0 0 0 .948 0l13-7a1 1 0 0 0 0-1.76zM16 6.136L26.89 12L16 17.864L5.11 12zm0 19.728L5.11 20l5.319-2.864l5.097 2.744a1 1 0 0 0 .948 0l5.097-2.745L26.891 20z" fill="currentColor"></svg:path>`,
})
export class CarbonSubVolumeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubclassificationIcon],svg[carbon-subclassification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 28V18h7a1 1 0 0 0 .868-1.496l-8-14C12.676 2.168 12.338 2 12 2s-.676.168-.868.504l-8 14A1 1 0 0 0 4 18h7v10a2 2 0 0 0 2 2h15v-2zM5.723 16L12 5.016L18.277 16z"></svg:path>`,
})
export class CarbonSubclassificationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubdirectoryIcon],svg[carbon-subdirectory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 20l1.414 1.414L7.828 24H26V4h2v20c0 1.103-.897 2-2 2H7.828l2.586 2.586L9 30l-5-5z"></svg:path>`,
})
export class CarbonSubdirectoryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubflowIcon],svg[carbon-subflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30A14.016 14.016 0 0 1 2 16h2a12.003 12.003 0 0 0 18.46 10.114l1.08 1.684A13.95 13.95 0 0 1 16 30"></svg:path><svg:path fill="currentColor" d="m26 17l-1.414 1.414L26.172 20H15.816a3 3 0 0 0-.275-.576l4.481-5.601A3 3 0 0 0 21 14a3 3 0 1 0-2.816-4h-4.368a2.982 2.982 0 0 0-5.632 0H2v2h6.184a2.982 2.982 0 0 0 5.632 0h4.368a3 3 0 0 0 .274.576l-4.48 5.601A3 3 0 0 0 13 18a3 3 0 1 0 2.816 4h10.356l-1.586 1.586L26 25l4-4Zm-5-7a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-10 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2 10a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M30 16h-2A12.003 12.003 0 0 0 9.54 5.886L8.46 4.202A14.002 14.002 0 0 1 30 16"></svg:path>`,
})
export class CarbonSubflowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubflowLocalIcon],svg[carbon-subflow-local-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.347 29.985a14 14 0 0 1-4.205-.852l.694-1.875a12 12 0 0 0 3.603.73zm4.265-.456l-.514-1.932a11.9 11.9 0 0 0 3.363-1.483l1.078 1.685a13.9 13.9 0 0 1-3.927 1.73M7.395 27.044a14 14 0 0 1-2.94-3.122l1.648-1.133a12 12 0 0 0 2.522 2.678zm-4.798-6.99A14 14 0 0 1 2 16h2a12 12 0 0 0 .512 3.476zM26 17l-1.414 1.414L26.172 20H15.816a3 3 0 0 0-.275-.576l4.481-5.601A3 3 0 0 0 21 14a3 3 0 1 0-2.816-4h-4.368a2.982 2.982 0 0 0-5.632 0H2v2h6.184a2.982 2.982 0 0 0 5.632 0h4.368a3 3 0 0 0 .274.576l-4.48 5.601A3 3 0 0 0 13 18a3 3 0 1 0 2.816 4h10.356l-1.586 1.586L26 25l4-4zm-5-7a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-10 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2 10a1 1 0 1 1 1-1a1 1 0 0 1-1 1m15-6a12 12 0 0 0-.512-3.476l1.915-.578A14 14 0 0 1 30 16zm-2.104-6.789a12 12 0 0 0-2.522-2.678l1.23-1.577a14 14 0 0 1 2.94 3.122zM9.54 5.886L8.461 4.201a13.9 13.9 0 0 1 3.927-1.73l.514 1.932A11.9 11.9 0 0 0 9.54 5.886m10.625-1.144a12 12 0 0 0-3.603-.73l.092-1.997a14 14 0 0 1 4.205.851z"></svg:path>`,
})
export class CarbonSubflowLocalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubjectDefinitionIcon],svg[carbon-subject-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.775 20.502h-.086c-.31.896-1.034 1.706-2.515 1.706c-1.844 0-2.877-1.275-2.877-3.515v-5.685h2.205v5.461c0 1.24.465 1.913 1.516 1.913c.878 0 1.757-.466 1.757-1.43v-5.944h2.205v8.993h-2.205zM6.62 20.21l1.533-1.481c.827.964 1.843 1.481 3.083 1.481c1.396 0 2.12-.672 2.12-1.688c0-.81-.38-1.31-1.637-1.533l-1.137-.172c-2.43-.38-3.6-1.534-3.6-3.497c0-2.154 1.67-3.55 4.358-3.55c1.809 0 3.152.62 4.117 1.775l-1.55 1.464c-.586-.74-1.413-1.24-2.688-1.24c-1.292 0-1.964.517-1.964 1.413c0 .913.517 1.292 1.671 1.499l1.12.206c2.429.431 3.566 1.516 3.566 3.497c0 2.274-1.637 3.825-4.514 3.825c-2.05 0-3.462-.81-4.479-1.998"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 28h24V4H4z"></svg:path>`,
})
export class CarbonSubjectDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubjectUsageIcon],svg[carbon-subject-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.775 20.502h-.086c-.31.896-1.034 1.706-2.515 1.706c-1.844 0-2.877-1.275-2.877-3.515v-5.685h2.205v5.461c0 1.24.465 1.913 1.516 1.913c.878 0 1.757-.466 1.757-1.43v-5.944h2.205v8.993h-2.205zM6.62 20.21l1.533-1.481c.827.964 1.843 1.481 3.083 1.481c1.396 0 2.12-.672 2.12-1.688c0-.81-.38-1.31-1.637-1.533l-1.137-.172c-2.43-.38-3.6-1.534-3.6-3.497c0-2.154 1.67-3.55 4.358-3.55c1.809 0 3.152.62 4.117 1.775l-1.55 1.464c-.586-.74-1.413-1.24-2.688-1.24c-1.292 0-1.964.517-1.964 1.413c0 .913.517 1.292 1.671 1.499l1.12.206c2.429.431 3.566 1.516 3.566 3.497c0 2.274-1.637 3.825-4.514 3.825c-2.05 0-3.462-.81-4.479-1.998"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonSubjectUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubnetAclRulesIcon],svg[carbon-subnet-acl-rules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h12v2H18zm0 5h8v2h-8zm0-10h12v2H18z"></svg:path><svg:path fill="currentColor" d="M22 24v4H6V16h8v-2h-4V8a4 4 0 0 1 7.668-1.6l1.832-.8A6.001 6.001 0 0 0 8 8v6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4Z"></svg:path>`,
})
export class CarbonSubnetAclRulesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubtractIcon],svg[carbon-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15h16v2H8z"></svg:path>`,
})
export class CarbonSubtractIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubtractAltIcon],svg[carbon-subtract-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2"></svg:path><svg:path fill="currentColor" d="M8 15h16v2H8z"></svg:path>`,
})
export class CarbonSubtractAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubtractFilledIcon],svg[carbon-subtract-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.4 2 2 8.4 2 16s6.4 14 14 14s14-6.4 14-14S23.6 2 16 2m8 15H8v-2h16z"></svg:path><svg:path fill="none" d="M24 17H8v-2h16z"></svg:path>`,
})
export class CarbonSubtractFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSubtractLargeIcon],svg[carbon-subtract-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15v2h22v-2z"></svg:path>`,
})
export class CarbonSubtractLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSuccessionIcon],svg[carbon-succession-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 28v2h-4v-2zm6 0v2h-4v-2zm-15 0v-3h-2v3a2 2 0 0 0 2 2h3v-2zm-2-9h2v4h-2zm0-6h2v4h-2z"></svg:path><svg:path fill="currentColor" d="M22 12L12 2L2 12l1.414 1.414L11 5.828V11h2V5.828l7.586 7.586z"></svg:path>`,
})
export class CarbonSuccessionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSummaryKpiIcon],svg[carbon-summary-kpi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.667 27.503L2 22.448l1.331-1.492l5.641 5.031l7.69-7.445a1.93 1.93 0 0 1 2.674-.008l3.624 3.464l5.58-5.973L30 17.39l-5.581 5.975a1.996 1.996 0 0 1-2.838.08l-3.577-3.419l-7.666 7.42a1.963 1.963 0 0 1-2.671.056M30 11h-4l2-3zm-8-7h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2V6a2 2 0 0 0-2-2m-6 10h-6v-4a2 2 0 0 1 2-2h2V6h-4V4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4zM6 12V4H4v1H2v2h2v5H2v2h6v-2z"></svg:path>`,
})
export class CarbonSummaryKpiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSummaryKpiMirrorIcon],svg[carbon-summary-kpi-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.3 27.5l5.7-5.1l-1.3-1.4l-5.7 5l-7.7-7.4c-.7-.7-1.9-.7-2.7 0L9 22l-5.6-6L2 17.4l5.6 6c.8.8 2 .8 2.8.1L14 20l7.7 7.4c.7.8 1.9.8 2.6.1M28 12V4h-2v1h-2v2h2v5h-2v2h6v-2zm-6 2h-6v-4c0-1.1.9-2 2-2h2V6h-4V4h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2v2h4zM12 4H8v2h4v2H9v2h3v2H8v2h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-6 7H2l2-3z"></svg:path>`,
})
export class CarbonSummaryKpiMirrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSunIcon],svg[carbon-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"></svg:path>`,
})
export class CarbonSunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSunriseIcon],svg[carbon-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 27h27.998v2H2zm14-7a4.005 4.005 0 0 1 4 4h2a6 6 0 0 0-12 0h2a4.005 4.005 0 0 1 4-4m9 2h5v2h-5zm-3.313-5.1l3.506-3.507l1.414 1.414l-3.506 3.506zM16 4l-5 5l1.41 1.41L15 7.83V15h2V7.83l2.59 2.58L21 9zM5.393 14.807l1.414-1.414l3.506 3.506L8.9 18.313zM2 22h5v2H2z"></svg:path>`,
})
export class CarbonSunriseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSunsetIcon],svg[carbon-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 27.005h27.998v2H2zm14-7a4.005 4.005 0 0 1 4 4h2a6 6 0 0 0-12 0h2a4.005 4.005 0 0 1 4-4m9 2h5v2h-5zm-3.313-5.101l3.506-3.506l1.414 1.414l-3.506 3.506zM19.59 9.595L17 12.175v-8.17h-2v8.17l-2.59-2.58l-1.41 1.41l5 5l5-5zM5.394 14.812l1.414-1.414l3.506 3.506l-1.415 1.414zM2 22.005h5v2H2z"></svg:path>`,
})
export class CarbonSunsetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSupportVectorMachineIcon],svg[carbon-support-vector-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26" cy="18" r="4" fill="currentColor"></svg:circle><svg:circle cx="18" cy="26" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M2 28.586L28.586 2L30 3.414L3.414 30zM14 10c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4m0-6c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2M6 18c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4m0-6c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2"></svg:path>`,
})
export class CarbonSupportVectorMachineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSustainabilityIcon],svg[carbon-sustainability-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.57 27.75A12.9 12.9 0 0 1 16 29C8.832 29 3 23.168 3 16c0-3.075 1.057-5.979 3-8.308V10h2V4H2v2h2.842A14.86 14.86 0 0 0 1 16c0 8.271 6.729 15 15 15a14.9 14.9 0 0 0 6.43-1.444z"></svg:path><svg:path fill="currentColor" d="M21 9c-3.16 0-5.751 2.457-5.978 5.56A5.97 5.97 0 0 0 11 13H7v4c0 3.309 2.692 6 6 6h2v4h2v-8h2c3.308 0 6-2.691 6-6V9zm-8 12c-2.206 0-4-1.794-4-4v-2h2c2.206 0 4 1.794 4 4v.586l-2.293-2.293l-1.414 1.414L13.586 21zm10-8c0 2.206-1.794 4-4 4h-.586l2.293-2.293l-1.414-1.414L17 15.586V15c0-2.206 1.794-4 4-4h2z"></svg:path><svg:path fill="currentColor" d="M31 16c0-8.271-6.729-15-15-15a14.9 14.9 0 0 0-6.43 1.444l.86 1.806A12.9 12.9 0 0 1 16 3c7.168 0 13 5.832 13 13c0 3.075-1.057 5.979-3 8.308V22h-2v6h6v-2h-2.842A14.86 14.86 0 0 0 31 16"></svg:path>`,
})
export class CarbonSustainabilityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSvgIcon],svg[carbon-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h4v-4h-2v-2h4zM18 9l-2 13l-2-13h-2l2.52 14h2.96L20 9zM8 23H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonSvgIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSwimIcon],svg[carbon-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 26h-2a4.93 4.93 0 0 1-4-1.987a5.02 5.02 0 0 1-8 0a5.02 5.02 0 0 1-8 0A4.93 4.93 0 0 1 4 26H2v-2h2a3.44 3.44 0 0 0 3.053-2.321A.97.97 0 0 1 8 21a1.01 1.01 0 0 1 .949.684A3.44 3.44 0 0 0 12 24a3.44 3.44 0 0 0 3.053-2.321A.99.99 0 0 1 16 21a1.01 1.01 0 0 1 .949.684A3.44 3.44 0 0 0 20 24a3.44 3.44 0 0 0 3.053-2.321a1 1 0 0 1 1.896.005A3.44 3.44 0 0 0 28 24h2zm-7-8.414l-8.707-8.707A2.98 2.98 0 0 0 12.171 8H4v2h8.171a1 1 0 0 1 .708.293L15.586 13L10 18.586L11.414 20L17 14.414L21.586 19zM20 10a4 4 0 1 1 4 4a4.004 4.004 0 0 1-4-4m2 0a2 2 0 1 0 2-2a2 2 0 0 0-2 2"></svg:path>`,
})
export class CarbonSwimIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSwitchLayer2Icon],svg[carbon-switch-layer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 26v-2H5.83l2.58-2.59L7 20l-5 5l5 5l1.41-1.41L5.83 26zm0-12v-2H5.83l2.58-2.59L7 8l-5 5l5 5l1.41-1.41L5.83 14zm0-8v2h10.17l-2.58 2.59L25 12l5-5l-5-5l-1.41 1.41L26.17 6zm0 12v2h10.17l-2.58 2.59L25 24l5-5l-5-5l-1.41 1.41L26.17 18z"></svg:path>`,
})
export class CarbonSwitchLayer2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSwitchLayer3Icon],svg[carbon-switch-layer-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v2h2.586l-5 5L21 12.414l5-5V10h2V4zM10 4v2H7.414l5 5L11 12.414l-5-5V10H4V4zm10 1l-4-4l-4 4l1.414 1.414L15 4.829V11h2V4.829l1.586 1.585zm2 23v-2h2.586l-5-5L21 19.586l5 5V22h2v6zm-12 0v-2H7.414l5-5L11 19.586l-5 5V22H4v6zm10-1l-4 4l-4-4l1.414-1.414L15 27.171V21h2v6.171l1.586-1.585zM5 12l-4 4l4 4l1.414-1.414L4.829 17H11v-2H4.829l1.585-1.586zm22 0l4 4l-4 4l-1.414-1.414L27.171 17H21v-2h6.171l-1.585-1.586z"></svg:path>`,
})
export class CarbonSwitchLayer3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSwitcherIcon],svg[carbon-switcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h4v4h-4zM4 4h4v4H4zm20 0h4v4h-4zM14 14h4v4h-4zM4 14h4v4H4zm20 0h4v4h-4zM14 24h4v4h-4zM4 24h4v4H4zm20 0h4v4h-4z"></svg:path>`,
})
export class CarbonSwitcherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSyncSettingsIcon],svg[carbon-sync-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 24v-2h-3.6L22 11.4V15h2V8h-7v2h3.6L10 20.6V17H8v7zm10-4v2h3c1.1 0 2-.9 2-2v-3h-2v3zm3-10h2v4h-2zm-3-8v2h3v3h2V4c0-1.1-.9-2-2-2zm-7 0h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M10 4v3h2V4h3V2h-3c-1.1 0-2 .9-2 2m2 6H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8h-2v8H4V12h8z"></svg:path>`,
})
export class CarbonSyncSettingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSysProvisionIcon],svg[carbon-sys-provision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20v10l9-5z"></svg:path><svg:circle cx="14" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 20a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M25.951 12.91h-.006A12.05 12.05 0 1 0 17 25.605v-2.066a9.981 9.981 0 1 1 6.624-6.81l1.924.544A12 12 0 0 0 26 14q0-.55-.049-1.09"></svg:path>`,
})
export class CarbonSysProvisionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSysplexDistributorIcon],svg[carbon-sysplex-distributor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zm1-8h-8v-2h-2v2H7c-1.103 0-2 .898-2 2v4h2v-4h8v4h2v-4h8v4h2v-4c0-1.102-.897-2-2-2M20 2h-8c-1.103 0-2 .898-2 2v8c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2m-1.414 2L12 10.586V4zm-5.172 8L20 5.414L20.001 12z"></svg:path>`,
})
export class CarbonSysplexDistributorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTIcon],svg[carbon-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 11h3v12h2V11h3V9h-8v2z" fill="currentColor"></svg:path>`,
})
export class CarbonTIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTAltIcon],svg[carbon-t-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 11h3v12h2V11h3V9H8v2z" fill="currentColor"></svg:path><svg:path d="M24 9h-2V7h-2v2h-2v2h2v6l1 1l1-1v-6h2V9z" fill="currentColor"></svg:path>`,
})
export class CarbonTAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTableIcon],svg[carbon-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2Zm-2 0v4H5V5Zm0 22H5v-4h22Zm0-6H5v-4h22Zm0-6H5v-4h22Z"></svg:path>`,
})
export class CarbonTableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTableAliasIcon],svg[carbon-table-alias-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 29H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-7-9v7h7v-7Z"></svg:path><svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v10h2v-4h10v4h2v-4h10v7H17v2h10v7H17v2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 6H5V5h22Z"></svg:path>`,
})
export class CarbonTableAliasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTableBuiltIcon],svg[carbon-table-built-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-4V4a2.003 2.003 0 0 0-2-2H4a2.003 2.003 0 0 0-2 2v18a2.003 2.003 0 0 0 2 2h4v4a2.003 2.003 0 0 0 2 2h18a2.003 2.003 0 0 0 2-2V10a2.003 2.003 0 0 0-2-2m-6 14h-8v-5h8Zm0-7h-8v-5h8Zm-10 0H4v-5h8ZM22 4v4H4V4ZM4 22v-5h8v5Zm24 6H10v-4h12a2.003 2.003 0 0 0 2-2V10h4Z"></svg:path>`,
})
export class CarbonTableBuiltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTableOfContentsIcon],svg[carbon-table-of-contents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h18v2H4zm0 6h18v2H4zm0 6h18v2H4zm0 6h18v2H4zM26 6h2v2h-2zm0 6h2v2h-2zm0 6h2v2h-2zm0 6h2v2h-2z"></svg:path>`,
})
export class CarbonTableOfContentsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTableShortcutIcon],svg[carbon-table-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18v2h5.586L3 27.586L4.414 29L12 21.414V27h2v-9z"></svg:path><svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v10h2v-4h10v4h2v-4h10v7H17v2h10v7H17v2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 6H5V5h22Z"></svg:path>`,
})
export class CarbonTableShortcutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTableSplitIcon],svg[carbon-table-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v4H5V5Zm-10 6h10v7H17Zm-2 7H5v-7h10ZM5 20h10v7H5Zm12 7v-7h10v7Z"></svg:path>`,
})
export class CarbonTableSplitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTabletIcon],svg[carbon-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 24v2h-6v-2z"></svg:path><svg:path fill="currentColor" d="M25 30H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v24a2.003 2.003 0 0 1-2 2M7 4v24h18V4Z"></svg:path>`,
})
export class CarbonTabletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTabletLandscapeIcon],svg[carbon-tablet-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 13h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M30 7v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24a2.003 2.003 0 0 1 2 2M4 25h24V7H4Z"></svg:path>`,
})
export class CarbonTabletLandscapeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTagIcon],svg[carbon-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 1.998 2.004A2 2 0 0 0 10 8"></svg:path><svg:path fill="currentColor" d="M16.644 29.415L2.586 15.355A2 2 0 0 1 2 13.942V4a2 2 0 0 1 2-2h9.941a2 2 0 0 1 1.414.586l14.06 14.058a2 2 0 0 1 0 2.828l-9.943 9.943a2 2 0 0 1-2.828 0M4 4v9.942L18.058 28L28 18.058L13.942 4Z"></svg:path>`,
})
export class CarbonTagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTagEditIcon],svg[carbon-tag-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.707 7.293l-3-3a1 1 0 0 0-1.414 0L16 13.586V18h4.414l9.293-9.293a1 1 0 0 0 0-1.414M19.586 16H18v-1.586l5-5L24.586 11zM26 9.586L24.414 8L26 6.414L27.586 8zM10 14a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 1.998 2.004A2 2 0 0 0 10 8"></svg:path><svg:path fill="currentColor" d="m27.006 14.235l-1.414 1.414L28 18.058L18.058 28L4 13.941V4h9.942l4.406 4.407l1.415-1.415l-4.407-4.406A2 2 0 0 0 13.94 2H4a2 2 0 0 0-2 2v9.941a2 2 0 0 0 .586 1.414l14.058 14.06a2 2 0 0 0 2.828 0l9.943-9.943a2 2 0 0 0 0-2.828Z"></svg:path>`,
})
export class CarbonTagEditIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTagExportIcon],svg[carbon-tag-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31 18l-6-6l-1.414 1.414L27.172 17H17v2h10.172l-3.586 3.586L25 24zm-21-4a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 1.998 2.004A2 2 0 0 0 10 8"></svg:path><svg:path fill="currentColor" d="m21.06 25l-3.002 3L4 13.941V4h9.942l7 7l1.414-1.414l-7.001-7A2 2 0 0 0 13.941 2H4a2 2 0 0 0-2 2v9.941a2 2 0 0 0 .586 1.414l14.058 14.06a2 2 0 0 0 2.828 0l3.002-3Z"></svg:path>`,
})
export class CarbonTagExportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTagGroupIcon],svg[carbon-tag-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 30a1 1 0 0 1-.71-.29L4.59 19A2 2 0 0 1 4 17.59V10a2 2 0 0 1 2-2h7.59a2 2 0 0 1 1.41.59l10.71 10.7a1 1 0 0 1 0 1.42l-9 9A1 1 0 0 1 16 30M6 10v7.59l10 10L23.59 20l-10-10Z"></svg:path><svg:path fill="currentColor" d="M27.71 13.29L17 2.59A2 2 0 0 0 15.59 2H8a2 2 0 0 0-2 2v2h2V4h7.59l10 10l-1.3 1.29l1.42 1.42l2-2a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class CarbonTagGroupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTagImportIcon],svg[carbon-tag-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 18l6-6l1.414 1.414L19.828 17H30v2H19.828l3.586 3.586L22 24zm-6-4a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 1.998 2.004A2 2 0 0 0 10 8"></svg:path><svg:path fill="currentColor" d="m20.059 26l-2.001 2L4 13.941V4h9.942l6 6l1.414-1.414l-6.001-6A2 2 0 0 0 13.941 2H4a2 2 0 0 0-2 2v9.941a2 2 0 0 0 .586 1.414l14.058 14.06a2 2 0 0 0 2.828 0l2-2.001Z"></svg:path>`,
})
export class CarbonTagImportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTagNoneIcon],svg[carbon-tag-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.092 10.322L30 3.414L28.586 2L2 28.586L3.414 30l6.908-6.908l6.322 6.323a2 2 0 0 0 2.828 0l9.943-9.943a2 2 0 0 0 0-2.828zM18.058 28l-6.322-6.322l9.942-9.942L28 18.058zM10 14a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 1.998 2.004A2 2 0 0 0 10 8"></svg:path><svg:path fill="currentColor" d="m7.493 20.263l1.414-1.414L4 13.94V4h9.942l4.907 4.907l1.414-1.414l-4.908-4.907A2 2 0 0 0 13.942 2H4a2 2 0 0 0-2 2v9.941a2 2 0 0 0 .586 1.414Z"></svg:path>`,
})
export class CarbonTagNoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTankIcon],svg[carbon-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 13v-2H18.618l-.723-1.447A1 1 0 0 0 17 9H9a1 1 0 0 0-1 1v5H4v2h18.638l3.6 3H3a1 1 0 0 0-1 1v2a5.006 5.006 0 0 0 5 5h18a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-.36-.769l-6-5A1 1 0 0 0 23 15h-2.382l-1-2Zm-2 10a3.003 3.003 0 0 1-3 3H7a3.003 3.003 0 0 1-3-3v-1h24Zm-18-8v-4h6.382l2 4Z"></svg:path>`,
})
export class CarbonTankIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskIcon],svg[carbon-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 20.18l-3.59-3.59L9 18l5 5l9-9l-1.41-1.42z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"></svg:path>`,
})
export class CarbonTaskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskAddIcon],svg[carbon-task-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h10v-2H7V7h3v3h12V7h3v9h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskApprovedIcon],svg[carbon-task-approved-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 20a6 6 0 1 0-10 4.46V32l4-1.894L28 32v-7.54A5.98 5.98 0 0 0 30 20m-4 8.84l-2-.947l-2 .947v-3.19a5.9 5.9 0 0 0 4 0ZM24 24a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskApprovedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskAssetViewIcon],svg[carbon-task-asset-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 26a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path><svg:path fill="currentColor" d="M22.5 31a8.5 8.5 0 1 1 8.5-8.5a8.51 8.51 0 0 1-8.5 8.5m0-15a6.5 6.5 0 1 0 6.5 6.5a6.507 6.507 0 0 0-6.5-6.5"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h5v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskAssetViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskCompleteIcon],svg[carbon-task-complete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v11h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskCompleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskLocationIcon],svg[carbon-task-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="21" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m24 31l-4.779-6.402A5.94 5.94 0 0 1 18 21a6 6 0 0 1 12 0a5.94 5.94 0 0 1-1.225 3.603Zm0-14a4.005 4.005 0 0 0-4 4a3.96 3.96 0 0 0 .82 2.397l3.18 4.26l3.176-4.255A3.96 3.96 0 0 0 28 21a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskLocationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskRemoveIcon],svg[carbon-task-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.41 25L30 21.41L28.59 20L25 23.59L21.41 20L20 21.41L23.59 25L20 28.59L21.41 30L25 26.41L28.59 30L30 28.59z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v10h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskRemoveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskSettingsIcon],svg[carbon-task-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h7v-2H7V7h3v3h12V7h3v6h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskSettingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskStarIcon],svg[carbon-task-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 17l2.23 4.32L30 22l-3.5 3.167L28 30l-5-2.792L18 30l1.5-4.833L16 22l4.9-.68z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h7v-2H7V7h3v3h12V7h3v7h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskStarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskToolsIcon],svg[carbon-task-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.5 32a3.48 3.48 0 0 1-2.475-1.025l-4.128-4.128a6.496 6.496 0 0 1-7.348-8.956l.588-1.34l4.156 4.156a1.023 1.023 0 0 0 1.414 0a1 1 0 0 0 0-1.414l-4.156-4.157l1.34-.588a6.497 6.497 0 0 1 8.956 7.349l4.128 4.128A3.5 3.5 0 0 1 28.5 32m-6.03-7.409l4.97 4.97a1.535 1.535 0 0 0 2.12 0a1.5 1.5 0 0 0 0-2.121l-4.969-4.97l.188-.583A4.496 4.496 0 0 0 20.5 16q-.126 0-.25.007l1.872 1.872a3 3 0 0 1 0 4.242a3.07 3.07 0 0 1-4.243 0l-1.872-1.872Q16 20.374 16 20.5a4.497 4.497 0 0 0 5.888 4.28Z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h7v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskToolsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaskViewIcon],svg[carbon-task-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="none" d="M22 28a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.003 2.003 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24ZM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M12 28H7V7h3v3h12V7h3v9h2V7a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h5Zm0-24h8v4h-8Z"></svg:path>`,
})
export class CarbonTaskViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTasteIcon],svg[carbon-taste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h4v8a8 8 0 0 0 16 0V6h4V4zm18 10a6 6 0 0 1-12 0V6h5v8h2V6h5zM11 26h2v2h-2zm-4-2h2v2H7zm8 0h2v2h-2zm4 2h2v2h-2zm4-2h2v2h-2z"></svg:path>`,
})
export class CarbonTasteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTaxiIcon],svg[carbon-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.39 16.08l-6.69-2.87l-2.54-4.34l-.08-.12A2 2 0 0 0 18.52 8h-8a2 2 0 0 0-1.67.89L5.46 14H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.61-.92M9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.14a4 4 0 0 0-7.72 0h-6.28a4 4 0 0 0-7.72 0H4v-7h2a1 1 0 0 0 .83-.45L10.54 10h8l2.63 4.5a1 1 0 0 0 .47.42L28 17.66Z"></svg:path>`,
})
export class CarbonTaxiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTcpIpServiceIcon],svg[carbon-tcp-ip-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28h14v2H16zm11-2h-8c-1.103 0-2-.897-2-2v-5c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v5c0 1.103-.897 2-2 2m-8-7v5h8v-5zm-4 4h-5c-1.103 0-2-.897-2-2v-4h2v4h5zM2 13h14v2H2zm11-2H5c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v5c0 1.103-.897 2-2 2M5 4v5h8V4z"></svg:path>`,
})
export class CarbonTcpIpServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureIcon],svg[carbon-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17.26V6a4 4 0 0 0-8 0v11.26a7 7 0 1 0 8 0M9 4a2 2 0 0 1 2 2v7H7V6a2 2 0 0 1 2-2m0 24a5 5 0 0 1-2.5-9.33l.5-.28V15h4v3.39l.5.28A5 5 0 0 1 9 28M20 4h10v2H20zm0 6h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7z"></svg:path>`,
})
export class CarbonTemperatureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureCelsiusIcon],svg[carbon-temperature-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 18h-6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6v2h-6v10h6Z"></svg:path><svg:circle cx="18" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 20.184V12H8v8.184a3 3 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3"></svg:path>`,
})
export class CarbonTemperatureCelsiusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureCelsiusAltIcon],svg[carbon-temperature-celsius-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 27h-9a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h9v2h-9v14h9zM8 13a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path>`,
})
export class CarbonTemperatureCelsiusAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureFahrenheitIcon],svg[carbon-temperature-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 6V4h-8v14h2v-6h5v-2h-5V6z"></svg:path><svg:circle cx="18" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 20.184V12H8v8.184a3 3 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3"></svg:path>`,
})
export class CarbonTemperatureFahrenheitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureFahrenheitAltIcon],svg[carbon-temperature-fahrenheit-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 11V9H15v18h2v-8h8v-2h-8v-6zM8 13a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path>`,
})
export class CarbonTemperatureFahrenheitAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureFeelsLikeIcon],svg[carbon-temperature-feels-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30h-4a2.006 2.006 0 0 1-2-2v-7a2.006 2.006 0 0 1-2-2v-6a2.947 2.947 0 0 1 3-3h6a2.947 2.947 0 0 1 3 3v6a2.006 2.006 0 0 1-2 2v7a2.006 2.006 0 0 1-2 2m-5-18a.945.945 0 0 0-1 1v6h2v9h4v-9h2v-6a.945.945 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2M10 20.184V12H8v8.184a3 3 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3"></svg:path>`,
})
export class CarbonTemperatureFeelsLikeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureFrigidIcon],svg[carbon-temperature-frigid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.167 16.89L21.72 13l5.447-3.891l2.517.839l.632-1.897L28 7.279V5h-2v2.485l-5 3.572v-5.69l2.555-1.703L22.445 2L20 3.63L17.555 2l-1.11 1.664L19 5.367v5.69l-3-2.143v2.458L18.28 13L16 14.628v2.458l3-2.143v6.76L22.445 24l1.11-1.664L21 20.633v-5.69l5 3.572V21h2v-2.279l2.316-.773l-.632-1.897zM12 23a3 3 0 0 1-6 0z"></svg:path><svg:path fill="currentColor" d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3"></svg:path>`,
})
export class CarbonTemperatureFrigidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureHotIcon],svg[carbon-temperature-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 13h4v2h-4zm-3-5.414l2.828-2.828l1.414 1.414L24.414 9zm0 12.828L24.414 19l2.828 2.828l-1.414 1.414zM17 2h2v4h-2zm1 6a6 6 0 0 0-1 .09v2.052A4 4 0 0 1 18 10a4 4 0 0 1 0 8v2a6 6 0 0 0 0-12m-8 12.184V7H8v13.184a3 3 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3"></svg:path>`,
})
export class CarbonTemperatureHotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureInversionIcon],svg[carbon-temperature-inversion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 8h-6v6h2v-2.459A5.94 5.94 0 0 1 28 16a6.004 6.004 0 0 1-5.094 5.924A7.03 7.03 0 0 0 20 17.262V6a4 4 0 0 0-8 0v11.262a6.996 6.996 0 1 0 10.93 6.68A7.98 7.98 0 0 0 27.264 10H30zM14 6a2 2 0 0 1 4 0v7h-4zm2 22a4.997 4.997 0 0 1-2.499-9.325l.499-.29V15h4v3.386l.499.289A4.997 4.997 0 0 1 16 28M2 10a8.04 8.04 0 0 0 2.735 6H2v2h6v-6H6v2.46A5.94 5.94 0 0 1 4 10a6.007 6.007 0 0 1 6-6V2a8.01 8.01 0 0 0-8 8"></svg:path>`,
})
export class CarbonTemperatureInversionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureMaxIcon],svg[carbon-temperature-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-10-1.816V7H8v13.184a3 3 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M30 4H12.974A4.983 4.983 0 0 0 4 7v11.11a7 7 0 1 0 10 0V7a5 5 0 0 0-.101-1H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28"></svg:path>`,
})
export class CarbonTemperatureMaxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureMinIcon],svg[carbon-temperature-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-8 7a3 3 0 0 1-6 0z"></svg:path><svg:path fill="currentColor" d="M30 22H15.92A7 7 0 0 0 14 18.11V7A5 5 0 0 0 4 7v11.11A6.995 6.995 0 1 0 15.92 24H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28"></svg:path>`,
})
export class CarbonTemperatureMinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureWaterIcon],svg[carbon-temperature-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0A4.93 4.93 0 0 0 30 9V7a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 26 4a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 22 7a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 18 4a.97.97 0 0 0-.947.679A3.44 3.44 0 0 1 14 7h-1V6a4 4 0 0 0-8 0v11.262a7.013 7.013 0 1 0 8.874.738H14a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0A4.93 4.93 0 0 0 30 18v-2a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 26 13a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 22 16a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 18 13a.97.97 0 0 0-.947.679A3.44 3.44 0 0 1 14 16h-1V9ZM7 6a2 2 0 0 1 4 0v6H7Zm2 22a4.997 4.997 0 0 1-2.499-9.325l.499-.29V14h4v4.386l.499.289A4.997 4.997 0 0 1 9 28"></svg:path>`,
})
export class CarbonTemperatureWaterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTemplateIcon],svg[carbon-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6v4H6V6zm0-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10 16v10H6V16zm0-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m16 2v10H16V16zm0-2H16a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonTemplateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTennisIcon],svg[carbon-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="4" height="4" x="20" y="2" fill="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" d="M11 16a1 1 0 0 1-.707-1.707l7-7a1 1 0 1 1 1.414 1.414l-7 7A1 1 0 0 1 11 16"></svg:path><svg:path fill="currentColor" d="M23.707 24.293a8.4 8.4 0 0 0-4.72-2.209q.3-.245.578-.521a9.24 9.24 0 0 0 1.733-9.914l-1.877.697c1.11 2.98.635 5.898-1.272 7.802a6.7 6.7 0 0 1-5.56 1.805a9.78 9.78 0 0 1-5.772-2.786c-2.973-2.97-4.076-8.227-.98-11.32c1.906-1.905 4.826-2.38 7.809-1.27l.699-1.875c-3.683-1.369-7.486-.706-9.924 1.731c-3.943 3.939-2.676 10.496.98 14.149a11.8 11.8 0 0 0 6.976 3.36c.21.022.416.023.623.033V24h4.996a6.85 6.85 0 0 1 4.297 1.707L26.586 30L28 28.586Z"></svg:path>`,
})
export class CarbonTennisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTennisBallIcon],svg[carbon-tennis-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4a8.98 8.98 0 0 0-8.169 12.755L2 25.585L3.414 27l8.487-8.487a9 9 0 0 0 1.586 1.586L10 23.586L11.414 25l3.831-3.831A8.996 8.996 0 1 0 19 4m6.906 7.906a7.005 7.005 0 0 1-5.812-5.812a7.005 7.005 0 0 1 5.812 5.812m-13.812 2.188a7.005 7.005 0 0 1 5.812 5.812a7.005 7.005 0 0 1-5.812-5.812m7.836 5.837a9.01 9.01 0 0 0-7.861-7.862a7.004 7.004 0 0 1 6-6a9.01 9.01 0 0 0 7.861 7.862a7.004 7.004 0 0 1-6 6"></svg:path>`,
})
export class CarbonTennisBallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTermIcon],svg[carbon-term-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 26h-3v-2h3V8h-3V6h3a2 2 0 0 1 2 2v16a2.003 2.003 0 0 1-2 2"></svg:path><svg:circle cx="23" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3v2H4v16h3Z"></svg:path>`,
})
export class CarbonTermIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTermReferenceIcon],svg[carbon-term-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm24 5h-3v-2h3V7h-3V5h3c1.103 0 2 .897 2 2v16c0 1.103-.897 2-2 2"></svg:path><svg:circle cx="23" cy="15" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="15" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="15" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 17V7h3V5H4c-1.103 0-2 .897-2 2v10z"></svg:path>`,
})
export class CarbonTermReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTerminalIcon],svg[carbon-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4.01H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2m0 2v4H6v-4Zm-20 20v-14h20v14Z"></svg:path><svg:path fill="currentColor" d="m10.76 16.18l2.82 2.83l-2.82 2.83l1.41 1.41l4.24-4.24l-4.24-4.24z"></svg:path>`,
})
export class CarbonTerminalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTerminal3270Icon],svg[carbon-terminal-3270-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v4H6V6ZM6 26V12h20v14Z"></svg:path>`,
})
export class CarbonTerminal3270Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTestToolIcon],svg[carbon-test-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 9.2l-2.6-2.6L19 8l4 4l7-7l-1.4-1.4zM12 5.4L10.6 4L8 6.6L5.4 4L4 5.4L6.6 8L4 10.6L5.4 12L8 9.4l2.6 2.6l1.4-1.4L9.4 8zm0 16L10.6 20L8 22.6L5.4 20L4 21.4L6.6 24L4 26.6L5.4 28L8 25.4l2.6 2.6l1.4-1.4L9.4 24z"></svg:path><svg:path fill="currentColor" d="M17 15V2h-2v13H2v2h13v13h2V17h13v-2z"></svg:path>`,
})
export class CarbonTestToolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignCenterIcon],svg[carbon-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h20v2H6zm4 6h12v2H10zm-4 6h20v2H6zm4 6h12v2H10z"></svg:path>`,
})
export class CarbonTextAlignCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignJustifyIcon],svg[carbon-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h20v2H6zm0 6h20v2H6zm0 6h20v2H6zm0 6h20v2H6z"></svg:path>`,
})
export class CarbonTextAlignJustifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignLeftIcon],svg[carbon-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6h14v2H12zm0 6h10v2H12zm0 6h14v2H12zm0 6h10v2H12zM6 4h2v24H6z"></svg:path>`,
})
export class CarbonTextAlignLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignMixedIcon],svg[carbon-text-align-mixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4H9v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6V6a2 2 0 0 0-2-2m0 8h-4v-2h4zm8 14v-8h-2v1h-2v2h2v5h-2v2h6v-2zM2 2h2v14H2zm26 14h2v14h-2z"></svg:path>`,
})
export class CarbonTextAlignMixedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignRightIcon],svg[carbon-text-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h14v2H6zm4 6h10v2H10zm-4 6h14v2H6zm4 6h10v2H10zM24 4h2v24h-2z"></svg:path>`,
})
export class CarbonTextAlignRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextAllCapsIcon],svg[carbon-text-all-caps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8v2h6v14h2V10h6V8zm16 0v2h6v14h2V10h6V8z"></svg:path>`,
})
export class CarbonTextAllCapsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextAnnotationToggleIcon],svg[carbon-text-annotation-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M29.537 13.76l-3.297-3.297a1.586 1.586 0 0 0-2.24 0L10 24.467V30h5.533l14.004-14a1.586 1.586 0 0 0 0-2.24zM14.704 28H12v-2.704l9.44-9.441l2.705 2.704zM25.56 17.145l-2.704-2.704l2.267-2.267l2.704 2.704z" fill="currentColor"></svg:path><svg:path d="M11 17h2v-7h3V8H8v2h3v7z" fill="currentColor"></svg:path><svg:path d="M8 20H4V4h16v4h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4z" fill="currentColor"></svg:path>`,
})
export class CarbonTextAnnotationToggleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextBoldIcon],svg[carbon-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 25H9V7h8.5a5.25 5.25 0 0 1 4 8.65A5.25 5.25 0 0 1 18.25 25M12 22h6.23a2.25 2.25 0 1 0 0-4.5H12Zm0-7.5h5.5a2.25 2.25 0 1 0 0-4.5H12Z"></svg:path>`,
})
export class CarbonTextBoldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextClearFormatIcon],svg[carbon-text-clear-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.438 16.572l-7.985-7.986a2 2 0 0 0-2.829 0l-5.358 5.358L9 2H7L2 16h2l.999-3h6l.803 2.408l-7.216 7.216a2 2 0 0 0 0 2.829L9.132 30h9.59l10.716-10.717a1.917 1.917 0 0 0 0-2.712M5.665 11l2.331-7l2.336 7Zm12.23 17H9.96L6 24.038l6.312-6.311l7.928 7.927Zm3.76-3.76l-7.928-7.927L20.039 10l7.927 7.927Z"></svg:path>`,
})
export class CarbonTextClearFormatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextColorIcon],svg[carbon-text-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 21h2L17 4h-2L8 21h2l1.61-4h8.74zm-9.57-6l3.44-8.37h.26L19.54 15zM6 24h20v4H6z"></svg:path>`,
})
export class CarbonTextColorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextCreationIcon],svg[carbon-text-creation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 22.14V9.86A4 4 0 1 0 22.14 5H9.86A4 4 0 1 0 5 9.86v12.28A4 4 0 1 0 9.86 27h12.28A4 4 0 1 0 27 22.14M26 4a2 2 0 1 1-2 2a2 2 0 0 1 2-2M4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16.14-3H9.86A4 4 0 0 0 7 22.14V9.86A4 4 0 0 0 9.86 7h12.28A4 4 0 0 0 25 9.86v12.28A4 4 0 0 0 22.14 25M26 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M21 11H11v2h4v9h2v-9h4z"></svg:path>`,
})
export class CarbonTextCreationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextFillIcon],svg[carbon-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h24v4H4z"></svg:path><svg:path fill="currentColor" d="M26 14.54a1 1 0 0 0-.25-.69l-8.58-9.52A1 1 0 0 0 17 4.2V2h-2v3L4.32 14.74a1 1 0 0 0-.06 1.41l8.57 9.52a1 1 0 0 0 .69.33h.05a1 1 0 0 0 .68-.26L24 16.8V21a1 1 0 0 0 2 0zm-12.35 9l-7.23-8L15 7.67V12h2V7.13l6.59 7.33Z"></svg:path>`,
})
export class CarbonTextFillIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextFontIcon],svg[carbon-text-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 12h-5v2h5a1 1 0 0 1 1 1v2h-4a3.003 3.003 0 0 0-3 3v1a3.003 3.003 0 0 0 3 3h6v-9a3.003 3.003 0 0 0-3-3m-3 10a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4v3zm-6 2h2L12 7h-2L4 24h2l1.694-5h6.613zm-7.629-7l2.497-7.371h.266L13.63 17z"></svg:path>`,
})
export class CarbonTextFontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextFootnoteIcon],svg[carbon-text-footnote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v2h7v16h2V9h7V7zm28 4.076l-.744-1.857L26 10.522V7h-2v3.523L20.744 9.22L20 11.077l3.417 1.367L20.9 15.8l1.6 1.2l2.5-3.333L27.5 17l1.6-1.2l-2.517-3.357z"></svg:path>`,
})
export class CarbonTextFootnoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextHighlightIcon],svg[carbon-text-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5V5a1 1 0 0 0-1-1H3V2h6a3 3 0 0 1 3 3zM5 9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5V9zm15 14v2a1 1 0 0 0 1 1h5v-4h-5a1 1 0 0 0-1 1"></svg:path><svg:path fill="currentColor" d="M2 30h28V2Zm26-2h-7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5v-2a1 1 0 0 0-1-1h-6v-2h6a3 3 0 0 1 3 3Z"></svg:path>`,
})
export class CarbonTextHighlightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextIndentIcon],svg[carbon-text-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h14v2H14zm0 6h14v2H14zm-7 6h21v2H7zm0 6h21v2H7zM4 13.59L7.29 10L4 6.41L5.42 5l4.62 5l-4.62 5z"></svg:path>`,
})
export class CarbonTextIndentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextIndentLessIcon],svg[carbon-text-indent-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h10v2H2zm3 6h7v2H5zm-3 6h10v2H2zm3 6h7v2H5zM16 4h2v24h-2zm12.15 19.5l1.41-1.38L23.27 16l6.29-6.12l-1.41-1.38l-7.71 7.5z"></svg:path>`,
})
export class CarbonTextIndentLessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextIndentMoreIcon],svg[carbon-text-indent-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h10v2H20zm0 6h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zM14 4h2v24h-2zM3.85 22.5l-1.41-1.38L8.73 15L2.44 8.88L3.85 7.5l7.71 7.5z"></svg:path>`,
})
export class CarbonTextIndentMoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextItalicIcon],svg[carbon-text-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 9V7H12v2h5.14l-4.37 14H7v2h13v-2h-5.14l4.37-14z"></svg:path>`,
})
export class CarbonTextItalicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextKerningIcon],svg[carbon-text-kerning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24H18.83l2.29-2.29l-1.41-1.42L15 25l4.71 4.71l1.41-1.42L18.83 26H30zm-16-3l6-17h-2l-6 17zM13 4L9 16L5 4H3l5 14h2l5-14zm15 14h2L25 4h-2l-5 14h2l1-3h6zm-6.33-5L24 6l2.33 7z"></svg:path>`,
})
export class CarbonTextKerningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextLeadingIcon],svg[carbon-text-leading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h16v2H14zm1 15h15v2H15zm10.85-1H28l-4.36-10h-2.28L17 27h2.15l.8-2h5.1zm-5.1-4l1.75-4.37L24.25 23zm5.1-11H28L23.64 2h-2.28L17 12h2.15l.8-2h5.1zm-5.1-4l1.75-4.37L24.25 8zM6 15.83l2.58 2.58L10 17l-4-4l-4 4l1.41 1.42zm0 11.34l-2.58-2.58L2 26l4 4l4-4l-1.41-1.42z"></svg:path>`,
})
export class CarbonTextLeadingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextLineSpacingIcon],svg[carbon-text-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6h13v2H17zm0 6h10v2H17zm0 6h13v2H17zm0 6h10v2H17zm-5.41-10.59L8 9.83l-3.59 3.59L3 12l5-5l5 5zm0 5.18L8 22.17l-3.59-3.59L3 20l5 5l5-5z"></svg:path>`,
})
export class CarbonTextLineSpacingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextLinkIcon],svg[carbon-text-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.706 27.585a5.262 5.262 0 0 1-3.723-8.983l1.415 1.414a3.264 3.264 0 1 0 4.616 4.616l6.03-6.03a3.264 3.264 0 0 0-4.616-4.616l-1.414-1.414a5.264 5.264 0 0 1 7.444 7.444l-6.03 6.03a5.25 5.25 0 0 1-3.722 1.539"></svg:path><svg:path fill="currentColor" d="M10.264 29.997a5.262 5.262 0 0 1-3.722-8.983l6.03-6.03a5.264 5.264 0 1 1 7.444 7.443l-1.414-1.414a3.264 3.264 0 1 0-4.616-4.615l-6.03 6.03a3.264 3.264 0 0 0 4.616 4.616l1.414 1.414a5.25 5.25 0 0 1-3.722 1.54M2 10h8v2H2zm0-4h12v2H2zm0-4h12v2H2z"></svg:path>`,
})
export class CarbonTextLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextLinkAnalysisIcon],svg[carbon-text-link-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10h8v2H8zm0-4h12v2H8zm0-4h12v2H8z"></svg:path><svg:path fill="currentColor" d="m4.711 28l5.631-9.996l7.434 6.49a2 2 0 0 0 3.084-.534l6.97-10.403l-1.661-1.114l-7 10.448l-.07.103l-7.435-6.49a2.003 2.003 0 0 0-3.08.53L4 25.183V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path>`,
})
export class CarbonTextLinkAnalysisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextLongParagraphIcon],svg[carbon-text-long-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 24h14v2H6zm0-6h20v2H6zm0-6h20v2H6zm0-6h20v2H6z"></svg:path>`,
})
export class CarbonTextLongParagraphIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextMiningIcon],svg[carbon-text-mining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28h8v2h-8zm0-4h12v2H18zm0-4h12v2H18z"></svg:path><svg:path fill="currentColor" d="M16.001 26.473H16L4.284 12.955L9.5 6h13l5.216 6.955l-3.24 3.737l1.513 1.31l4.295-4.957L23.5 4h-15l-6.784 9.045l12.772 14.737z"></svg:path>`,
})
export class CarbonTextMiningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextMiningApplierIcon],svg[carbon-text-mining-applier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.001 26.473H16L4.284 12.955L9.5 6h13l5.216 6.955l-3.24 3.737l1.513 1.31l4.295-4.957L23.5 4h-15l-6.784 9.045l12.772 14.737z"></svg:path><svg:path fill="currentColor" d="m20 19l7 5l-7 5z"></svg:path>`,
})
export class CarbonTextMiningApplierIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextNewLineIcon],svg[carbon-text-new-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.586 14.414L24.172 18H6V8H4v10a2 2 0 0 0 2 2h18.172l-3.586 3.586L22 25l6-6l-6-6Z"></svg:path>`,
})
export class CarbonTextNewLineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextScaleIcon],svg[carbon-text-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 5v3h-8v18h-3V8h-8V5z"></svg:path><svg:path fill="currentColor" d="M7 26V14H2v-2h12v2H9v12z"></svg:path>`,
})
export class CarbonTextScaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextSelectionIcon],svg[carbon-text-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 27h-7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5v-2a1 1 0 0 0-1-1h-6v-2h6a3 3 0 0 1 3 3zm-7-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v-4zM13 7h3V5h-3a4 4 0 0 0-3 1.38A4 4 0 0 0 7 5H4v2h3a2 2 0 0 1 2 2v5H5v2h4v7a2 2 0 0 1-2 2H4v2h3a4 4 0 0 0 3-1.38A4 4 0 0 0 13 27h3v-2h-3a2 2 0 0 1-2-2v-7h4v-2h-4V9a2 2 0 0 1 2-2"></svg:path>`,
})
export class CarbonTextSelectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextShortParagraphIcon],svg[carbon-text-short-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h14v2H6zm0-6h20v2H6z"></svg:path>`,
})
export class CarbonTextShortParagraphIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextSmallCapsIcon],svg[carbon-text-small-caps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 27V15h-5v-2h12v2h-5v12z"></svg:path><svg:path fill="currentColor" d="M11 27V8H2V6h20v2h-9v19z"></svg:path>`,
})
export class CarbonTextSmallCapsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextStrikethroughIcon],svg[carbon-text-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 15H17.956a40 40 0 0 0-1.338-.335c-2.808-.664-4.396-1.15-4.396-3.423a2.87 2.87 0 0 1 .787-2.145a4.8 4.8 0 0 1 3.013-1.09c2.83-.07 4.135.89 5.202 2.35l1.615-1.18a7.47 7.47 0 0 0-6.83-3.17a6.77 6.77 0 0 0-4.4 1.661a4.83 4.83 0 0 0-1.386 3.574A4.37 4.37 0 0 0 11.957 15H4v2h13.652c1.967.57 3.143 1.312 3.173 3.358a3.12 3.12 0 0 1-.862 2.393A5.82 5.82 0 0 1 16.243 24a6.63 6.63 0 0 1-5.145-2.691l-1.533 1.284A8.53 8.53 0 0 0 16.212 26h.1a7.67 7.67 0 0 0 5.048-1.819a5.08 5.08 0 0 0 1.465-3.853A4.95 4.95 0 0 0 21.675 17H28Z"></svg:path>`,
})
export class CarbonTextStrikethroughIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextSubscriptIcon],svg[carbon-text-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 25h-6v-6h4v-2h-4v-2h6v6h-4v2h4zM5 7v2h7v16h2V9h7V7z"></svg:path>`,
})
export class CarbonTextSubscriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextSuperscriptIcon],svg[carbon-text-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 17h-6v-6h4V9h-4V7h6v6h-4v2h4zM4 7v2h7v16h2V9h7V7z"></svg:path>`,
})
export class CarbonTextSuperscriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextTrackingIcon],svg[carbon-text-tracking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25.29 19.29l-1.41 1.42L26.17 23H5.83l2.29-2.29l-1.41-1.42L2 24l4.71 4.71l1.41-1.42L5.83 25h20.34l-2.29 2.29l1.41 1.42L30 24zM26 17h2L23 3h-2l-5 14h2l1-3h6zm-6.33-5L22 5l2.33 7zM14 3l-4 12L6 3H4l5 14h2l5-14z"></svg:path>`,
})
export class CarbonTextTrackingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextUnderlineIcon],svg[carbon-text-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h24v2H4zm12-3a7 7 0 0 1-7-7V5h2v11a5 5 0 0 0 10 0V5h2v11a7 7 0 0 1-7 7"></svg:path>`,
})
export class CarbonTextUnderlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextVerticalAlignmentIcon],svg[carbon-text-vertical-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28h14v2H16zm0-5h14v2H16zm-5.154 7H13L8.64 20H6.36L2 30h2.154l.8-2h5.092zm-5.092-4L7.5 21.635L9.246 26zM2 15h28v2H2zm14-8h14v2H16zm0-5h14v2H16zm-5.154 10H13L8.64 2H6.36L2 12h2.154l.8-2h5.092zM5.754 8L7.5 3.635L9.246 8z"></svg:path>`,
})
export class CarbonTextVerticalAlignmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTextWrapIcon],svg[carbon-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 23h8v2H4zm20.523-9H4v2h20.5a3.5 3.5 0 0 1 0 7h-5.672l2.586-2.586L20 19l-5 5l5 5l1.414-1.414L18.828 25h5.705a5.5 5.5 0 0 0-.01-11M4 5h24v2H4z"></svg:path>`,
})
export class CarbonTextWrapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTheaterIcon],svg[carbon-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 25a6.99 6.99 0 0 1-5.833-3.129l1.666-1.107a5 5 0 0 0 8.334 0l1.666 1.107A6.99 6.99 0 0 1 20 25m4-11a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2m-8 0a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M28 8h-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a10.01 10.01 0 0 0 8.803 9.921A9.999 9.999 0 0 0 30 20V10a2 2 0 0 0-2-2M4 14V4h16v4h-8a2 2 0 0 0-2 2v10a10 10 0 0 0 .168 1.78A8.01 8.01 0 0 1 4 14m24 6a8 8 0 0 1-16 0V10h16Z"></svg:path>`,
})
export class CarbonTheaterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThisSideUpIcon],svg[carbon-this-side-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zM7 5.828V24h2V5.828l3.586 3.586L14 8L8 2L2 8l1.414 1.414zm16 0V24h2V5.828l3.586 3.586L30 8l-6-6l-6 6l1.414 1.414z"></svg:path>`,
})
export class CarbonThisSideUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThresholdIcon],svg[carbon-threshold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26 4H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2zM6 6h20v10h-2v2h2v2h-2v2h2v2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2H8v2H6z" fill="currentColor"></svg:path><svg:path d="M8 20h2v2H8z" fill="currentColor"></svg:path><svg:path d="M12 20h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M16 20h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M20 20h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M8 16h2v2H8z" fill="currentColor"></svg:path><svg:path d="M16 16h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M20 16h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M20 12h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M20 8h2v2h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonThresholdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbnail1Icon],svg[carbon-thumbnail-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 30H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm14 6h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm14 6h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M4 4v14h24V4z"></svg:path>`,
})
export class CarbonThumbnail1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbnail2Icon],svg[carbon-thumbnail-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 30H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm14 6h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm14 6h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zM8 20H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm14 6h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm14 6h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zM8 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h4V4zm14 6h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4V4zm14 6h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4V4z"></svg:path>`,
})
export class CarbonThumbnail2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbnailPreviewIcon],svg[carbon-thumbnail-preview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 12H4a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V14a2.003 2.003 0 0 0-2-2zm-8 16h-8v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm8 0h-6v-1a3.003 3.003 0 0 0-3-3h-6a3.003 3.003 0 0 0-3 3v1H4V14h24.002z" fill="currentColor"></svg:path><svg:path d="M16 23a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M30 4v4a2.003 2.003 0 0 1-2 2h-4a2.003 2.003 0 0 1-2-2V4a2.003 2.003 0 0 1 2-2h4a2.003 2.003 0 0 1 2 2zm-2 4l.002-4H24v4z" fill="currentColor"></svg:path><svg:path d="M20 4v4a2.003 2.003 0 0 1-2 2h-4a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h4a2.003 2.003 0 0 1 2 2zm-2 4l.002-4H14v4z" fill="currentColor"></svg:path><svg:path d="M10 4v4a2.002 2.002 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2zM8 8l.002-4H4v4z" fill="currentColor"></svg:path>`,
})
export class CarbonThumbnailPreviewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbsDownIcon],svg[carbon-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 16V9a7.01 7.01 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4M8 14H4V4h4Zm20 2a2.003 2.003 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"></svg:path>`,
})
export class CarbonThumbsDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbsDownFilledIcon],svg[carbon-thumbs-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5v14H2zm21 0H9v14.803l3.042 4.563l.845 5.917A2.01 2.01 0 0 0 14.868 29H15a3.003 3.003 0 0 0 3-3v-6h8a4.005 4.005 0 0 0 4-4V9a7.01 7.01 0 0 0-7-7"></svg:path>`,
})
export class CarbonThumbsDownFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbsUpIcon],svg[carbon-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.01 7.01 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4M8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.003 2.003 0 0 1 2 2Z"></svg:path>`,
})
export class CarbonThumbsUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbsUpDoubleIcon],svg[carbon-thumbs-up-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 14H15V9.6C15 7.5 13.8 6 12 6h-1C9.5 6 9.2 7.5 9.1 8.4c0 .1 0 .3-.1.5l-.6 4.3l-2 3.9H2v13h16.3c3.7 0 6.7-3 6.7-6.7v-5.1c0-2.4-1.9-4.3-4.2-4.3M4 28v-9h2v9zm19-4.7c0 2.6-2.1 4.7-4.7 4.7H8v-9.8l2.4-4.5l.6-4.5c0-.2.1-.4.1-.5c0-.2.1-.5.1-.6h.8c1 0 1 1.4 1 1.6V16h7.8c1.2 0 2.2 1 2.2 2.2zM27 9h-6V4.4c0-2-1.2-3.4-3-3.4h-.8c-1.8 0-2 1.9-2.1 2.6L14.9 6h2l.1-1l.1-1.2c0-.5.1-.7.1-.8h.8c.9 0 1 .9 1 1.4V11h8c1.2 0 2 .8 2 2v5c0 1.7-.9 3.4-2.1 4.2l1.1 1.7c1.8-1.2 2.9-3.5 2.9-5.9v-5c.1-2.4-1.5-4-3.9-4"></svg:path>`,
})
export class CarbonThumbsUpDoubleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbsUpDoubleFilledIcon],svg[carbon-thumbs-up-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 14H15V9.6C15 7.5 13.8 6 12 6h-1C9.5 6 9.2 7.5 9.1 8.4c0 .1 0 .3-.1.5l-.6 4.3L7 16v14h11.3c3.7 0 6.7-3 6.7-6.7v-5.1c0-2.3-1.9-4.2-4.2-4.2M2 30V17h3v13zM26.8 9H21V4.6C21 2.5 19.8 1 18 1h-1c-1.5 0-1.8 1.5-1.9 2.3c0 .2 0 .3-.1.5l-.1 1.1c1.3 1 2.1 2.6 2.1 4.6V12h3.8c3.4 0 6.2 2.8 6.2 6.2v5.1c0 .4 0 .8-.1 1.1c2.4-1 4.1-3.4 4.1-6.1v-5.1c0-2.3-1.9-4.2-4.2-4.2"></svg:path>`,
})
export class CarbonThumbsUpDoubleFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThumbsUpFilledIcon],svg[carbon-thumbs-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h5v14H2zm21 14H9V15.197l3.042-4.563l.845-5.917A2.01 2.01 0 0 1 14.868 3H15a3.003 3.003 0 0 1 3 3v6h8a4.005 4.005 0 0 1 4 4v7a7.01 7.01 0 0 1-7 7"></svg:path>`,
})
export class CarbonThumbsUpFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThunderstormIcon],svg[carbon-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22"></svg:path><svg:path fill="currentColor" d="m15.87 30.5l-1.74-1l3.15-5.5h-6l4.85-8.5l1.74 1l-3.15 5.5h6z"></svg:path>`,
})
export class CarbonThunderstormIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThunderstormScatteredIcon],svg[carbon-thunderstorm-scattered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.338 30l-1.736-1l2.287-4H10l3.993-7l1.737 1l-2.284 4h3.891z"></svg:path><svg:path fill="currentColor" d="M27 11a5.996 5.996 0 0 0-11.366-2.669A7.4 7.4 0 0 0 13.5 8a7.55 7.55 0 0 0-7.15 5.244A5.993 5.993 0 0 0 8 25v-2a3.993 3.993 0 0 1-.673-7.93l.663-.112l.146-.656a5.496 5.496 0 0 1 10.73 0l.145.656l.663.113A3.993 3.993 0 0 1 19 23v2a5.985 5.985 0 0 0 5.216-8.946A6 6 0 0 0 27 11m-4.073 3.49a6 6 0 0 0-2.278-1.246a7.52 7.52 0 0 0-3.185-4.069a3.987 3.987 0 1 1 5.463 5.314M28.586 19l-2.122-2.12l1.414-1.415L30 17.587zM29 10h3v2h-3zm-2.536-4.878L28.586 3L30 4.414l-2.122 2.122zM20 0h2v3h-2zm-5.878 6.536L12 4.414L13.414 3l2.122 2.122z"></svg:path>`,
})
export class CarbonThunderstormScatteredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThunderstormScatteredNightIcon],svg[carbon-thunderstorm-scattered-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.338 30l-1.736-1l2.287-4H10l3.993-7l1.737 1l-2.284 4h3.891z"></svg:path><svg:path fill="currentColor" d="M29.844 13.035a1.52 1.52 0 0 0-1.231-.866a5.36 5.36 0 0 1-3.41-1.716A6.47 6.47 0 0 1 23.92 4.06a1.6 1.6 0 0 0-.3-1.546a1.46 1.46 0 0 0-1.36-.492l-.019.004a7.85 7.85 0 0 0-6.105 6.48A7.4 7.4 0 0 0 13.5 8a7.55 7.55 0 0 0-7.15 5.244A5.993 5.993 0 0 0 8 25v-2a3.993 3.993 0 0 1-.673-7.93l.663-.112l.145-.656a5.496 5.496 0 0 1 10.73 0l.145.656l.663.113A3.993 3.993 0 0 1 19 23v2a5.955 5.955 0 0 0 5.88-7.145a7.5 7.5 0 0 0 4.867-3.3a1.54 1.54 0 0 0 .097-1.52m-5.693 2.918a5.97 5.97 0 0 0-3.502-2.709a7.5 7.5 0 0 0-2.62-3.694a6.01 6.01 0 0 1 3.77-5.333a8.46 8.46 0 0 0 1.939 7.596a7.4 7.4 0 0 0 3.902 2.228a5.44 5.44 0 0 1-3.489 1.912"></svg:path>`,
})
export class CarbonThunderstormScatteredNightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThunderstormSevereIcon],svg[carbon-thunderstorm-severe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 21 30M9 32a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 9 32m6.901-1.504l-1.736-.992L17.309 24H11.31l4.855-8.496l1.736.992L14.756 22h6.001zM27.951 15a4 4 0 0 1 .049.5a4.505 4.505 0 0 1-4.5 4.5H23v2h.5a6.51 6.51 0 0 0 6.5-6.5c0-.17-.031-.333-.044-.5z"></svg:path><svg:path fill="none" d="M25.75 8h-1.5V4h1.5ZM25 9a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M31.912 11.936L25.628.37a.718.718 0 0 0-1.257 0l-6.283 11.564A.72.72 0 0 0 18.72 13h12.56a.72.72 0 0 0 .631-1.065M24.25 4h1.5v4h-1.5zm.75 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m-16.856.019l.815-.064l.1-.812a6.986 6.986 0 0 1 9.97-5.45L20 2.947a8.978 8.978 0 0 0-12.8 6.19a6.493 6.493 0 0 0 .23 12.767l-1.324 2.649a1 1 0 1 0 1.788.894l2-4a1 1 0 0 0-.447-1.341A1 1 0 0 0 9 20.01V20h-.5a4.498 4.498 0 0 1-.356-8.981"></svg:path>`,
})
export class CarbonThunderstormSevereIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonThunderstormStrongIcon],svg[carbon-thunderstorm-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 21 30M9 32a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 9 32m6.901-1.504l-1.736-.992L17.31 24h-6l4.855-8.496l1.736.992L14.756 22h6.001z"></svg:path><svg:path fill="currentColor" d="M24.8 9.136a8.994 8.994 0 0 0-17.6 0a6.493 6.493 0 0 0 .23 12.768l-1.324 2.649a1 1 0 1 0 1.789.894l2-4a1 1 0 0 0-.447-1.341A1 1 0 0 0 9 20.01V20h-.5a4.498 4.498 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.498 4.498 0 0 1 23.5 20H23v2h.5a6.497 6.497 0 0 0 1.3-12.864"></svg:path>`,
})
export class CarbonThunderstormStrongIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTicketIcon],svg[carbon-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 14a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1a2 2 0 0 1 0 4a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1a2 2 0 0 1 0-4m-1 5.87V24h-7v-3h-2v3H4v-4.13a4 4 0 0 0 0-7.74V8h15v3h2V8h7v4.13a4 4 0 0 0 0 7.74"></svg:path><svg:path fill="currentColor" d="M19 13h2v6h-2z"></svg:path>`,
})
export class CarbonTicketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTidesIcon],svg[carbon-tides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7L9 2L4 7l1.413 1.416L8 5.833V14h2V5.833l2.586 2.581zm12.586.586L24 10.167V2h-2v8.167l-2.587-2.583L18 9l5 5l5-5zM20 20a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 16 17a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 12 20a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 8 17a.97.97 0 0 0-.947.679A3.44 3.44 0 0 1 4 20H2v2h2a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0A4.93 4.93 0 0 0 20 22h10v-2zm8 8a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 24 25a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 20 28a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 16 25a.97.97 0 0 0-.947.679A3.44 3.44 0 0 1 12 28H2v2h10a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0A4.93 4.93 0 0 0 28 30h2v-2z"></svg:path>`,
})
export class CarbonTidesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTifIcon],svg[carbon-tif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 11V9h-8v14h2v-6h5v-2h-5v-4zm-18 0h3v10h-3v2h8v-2h-3V11h3V9h-8zM2 11h3v12h2V11h3V9H2z"></svg:path>`,
})
export class CarbonTifIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTimeIcon],svg[carbon-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"></svg:path><svg:path fill="currentColor" d="M20.59 22L15 16.41V7h2v8.58l5 5.01z"></svg:path>`,
})
export class CarbonTimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTimeFilledIcon],svg[carbon-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.4 2 2 8.4 2 16s6.4 14 14 14s14-6.4 14-14S23.6 2 16 2m4.587 20L15 16.41V7h2v8.582l5 5.004z"></svg:path><svg:path fill="none" d="M20.587 22L15 16.41V7h2v8.582l5 5.005z"></svg:path>`,
})
export class CarbonTimeFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTimePlotIcon],svg[carbon-time-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.586 13L21 10.414V6h2v3.586l2 2z"></svg:path><svg:path fill="currentColor" d="M22 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6"></svg:path><svg:path fill="currentColor" d="m8.63 18l7 6H30v-2H16.37l-7-6H4V2H2v26a2.003 2.003 0 0 0 2 2h26v-2H4V18Z"></svg:path>`,
})
export class CarbonTimePlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTimerIcon],svg[carbon-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11h2v9h-2zm-2-9h6v2h-6z"></svg:path><svg:path fill="currentColor" d="m28 9l-1.42-1.41l-2.25 2.25a10.94 10.94 0 1 0 1.18 1.65ZM16 26a9 9 0 1 1 9-9a9 9 0 0 1-9 9"></svg:path>`,
})
export class CarbonTimerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTimingBeltIcon],svg[carbon-timing-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="24" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 12c0-1.824-1.234-3.35-2.906-3.829L7.209 2.207A4 4 0 0 0 6 2C3.794 2 2 3.794 2 6c0 .603.144 1.169.384 1.682l8.101 18.678A6.01 6.01 0 0 0 16 30a6 6 0 0 0 5.242-3.089l8.002-12.59A3.97 3.97 0 0 0 30 12m-14 6a6 6 0 0 0-5.447 3.5L5.538 9.953c.153.018.304.047.462.047c2.206 0 4-1.794 4-4c0-.32-.047-.625-.118-.923L23.27 9.093A3.98 3.98 0 0 0 22 12c0 2.147 1.703 3.89 3.827 3.982l-4.06 6.381C21.053 19.85 18.74 18 16 18m12-6c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .898 2 2M6 4c1.103 0 2 .898 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2m10 24c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"></svg:path>`,
})
export class CarbonTimingBeltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonToolBoxIcon],svg[carbon-tool-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 9h-3V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v3H5a3 3 0 0 0-3 3v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a3 3 0 0 0-3-3M10 6h12v3H10Zm18 20H4v-9h8v5h8v-5h8Zm-14-9h4v3h-4ZM4 15v-3a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v3Z"></svg:path>`,
})
export class CarbonToolBoxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonToolKitIcon],svg[carbon-tool-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.914 24.5l4.257-4.257l-1.414-1.414L7.5 23.086l-.793-.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414ZM5 28.586L3.414 27L6 24.414L7.586 26Z"></svg:path><svg:path fill="currentColor" d="M24 30a6.007 6.007 0 0 1-6-6a5.8 5.8 0 0 1 .21-1.547L9.548 13.79A6 6 0 0 1 8 14a5.976 5.976 0 0 1-5.577-8.184l.558-1.421l3.312 3.312a1.023 1.023 0 0 0 1.414 0a1 1 0 0 0 0-1.414L4.393 2.979l1.423-.557A5.977 5.977 0 0 1 14 8a5.8 5.8 0 0 1-.21 1.547l8.663 8.663A6 6 0 0 1 24 18a5.976 5.976 0 0 1 5.577 8.184l-.557 1.421l-3.313-3.312a1.023 1.023 0 0 0-1.413 0a1 1 0 0 0-.001 1.414l3.313 3.313l-1.422.558A6 6 0 0 1 24 30M10.063 11.476l10.46 10.462l-.239.609a3.975 3.975 0 0 0 3.466 5.445l-.871-.87a3 3 0 0 1 0-4.243a3.07 3.07 0 0 1 4.243 0l.87.871a3.976 3.976 0 0 0-5.446-3.466l-.609.239l-10.46-10.46l.24-.61A3.976 3.976 0 0 0 8.25 4.008l.87.87a3 3 0 0 1 0 4.243a3.07 3.07 0 0 1-4.243 0l-.87-.871a3.975 3.975 0 0 0 5.445 3.466Z"></svg:path><svg:path fill="currentColor" d="M29.123 2.85a3.07 3.07 0 0 0-4.243 0l-7.48 7.48l1.414 1.414l7.48-7.48a1.024 1.024 0 0 1 1.414 0a1 1 0 0 1 0 1.414l-7.48 7.48l1.414 1.415l7.48-7.48a3.003 3.003 0 0 0 0-4.243"></svg:path>`,
})
export class CarbonToolKitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonToolsIcon],svg[carbon-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.1 2a9.8 9.8 0 0 0-5.4 1.6l6.4 6.4a2.1 2.1 0 0 1 .2 3a2.1 2.1 0 0 1-3-.2L3.7 6.4A9.84 9.84 0 0 0 2 12.1a10.14 10.14 0 0 0 10.1 10.1a11 11 0 0 0 2.6-.3l6.7 6.7a5 5 0 0 0 7.1-7.1l-6.7-6.7a11 11 0 0 0 .3-2.6A10 10 0 0 0 12.1 2m8 10.1a7.6 7.6 0 0 1-.3 2.1l-.3 1.1l.8.8l6.7 6.7a2.88 2.88 0 0 1 .9 2.1A2.72 2.72 0 0 1 27 27a2.9 2.9 0 0 1-4.2 0l-6.7-6.7l-.8-.8l-1.1.3a7.6 7.6 0 0 1-2.1.3a8.27 8.27 0 0 1-5.7-2.3A7.63 7.63 0 0 1 4 12.1a8.3 8.3 0 0 1 .3-2.2l4.4 4.4a4.14 4.14 0 0 0 5.9.2a4.14 4.14 0 0 0-.2-5.9L10 4.2a6.5 6.5 0 0 1 2-.3a8.27 8.27 0 0 1 5.7 2.3a8.5 8.5 0 0 1 2.4 5.9"></svg:path>`,
})
export class CarbonToolsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonToolsAltIcon],svg[carbon-tools-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.1 16l6.3-6.3c.8-.8.8-2 0-2.8l-4.2-4.2c-.8-.8-2-.8-2.8 0L16 8.9L9.7 2.6c-.8-.8-2-.8-2.8 0L2.6 6.8c-.8.8-.8 2 0 2.8L8.9 16L2 22.9V30h7.1l6.9-6.9l6.3 6.3c.8.8 2 .8 2.8 0l4.2-4.2c.8-.8.8-2 0-2.8zm.7-12L28 8.2l-6.3 6.3l-4.2-4.2zM8.2 28H4v-4.2l6.3-6.3l4.2 4.2zm15.6 0L4 8.2L8.2 4l3.5 3.5l-2.1 2.1L11 11l2.1-2.1l4.2 4.2l-2.1 2.1l1.4 1.4l2.1-2.1l4.2 4.2l-1.9 2.2l1.4 1.4l2.1-2.1l3.5 3.5z"></svg:path>`,
})
export class CarbonToolsAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTornadoIcon],svg[carbon-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 26h4v2h-4zm-4-4h6v2h-6zm-4-4h10v2H8zm0-4h12v2H8zm2-4h14v2H10zM8 6h18v2H8z"></svg:path>`,
})
export class CarbonTornadoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTornadoWarningIcon],svg[carbon-tornado-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h16v2H2zm2 4h12v2H4zm-2 4h12v2H2zm0 4h10v2H2zm2 4h8v2H4zm4 4h6v2H8zm4 4h4v2h-4z"></svg:path><svg:path fill="none" d="M23.75 10h-1.5V6h1.5ZM23 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M29.912 13.936L23.628 2.37a.718.718 0 0 0-1.256 0l-6.283 11.564A.72.72 0 0 0 16.72 15h12.56a.72.72 0 0 0 .631-1.065M22.25 6h1.5v4h-1.5Zm.75 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonTornadoWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTouch1Icon],svg[carbon-touch-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-2A5 5 0 0 0 8 8H6a7 7 0 0 1 14 0"></svg:path><svg:path fill="currentColor" d="M25 15a2.94 2.94 0 0 0-1.47.4A3 3 0 0 0 21 14a2.94 2.94 0 0 0-1.47.4A3 3 0 0 0 16 13.18V8a3 3 0 0 0-6 0v11.1l-2.23-1.52A2.93 2.93 0 0 0 6 17a3 3 0 0 0-2.12 5.13l8 7.3A6.16 6.16 0 0 0 16 31h5a7 7 0 0 0 7-7v-6a3 3 0 0 0-3-3m1 9a5 5 0 0 1-5 5h-5a4.17 4.17 0 0 1-2.76-1l-7.95-7.3A1 1 0 0 1 5 20a1 1 0 0 1 1.6-.8l5.4 3.7V8a1 1 0 0 1 2 0v11h2v-3a1 1 0 0 1 2 0v3h2v-2a1 1 0 0 1 2 0v2h2v-1a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class CarbonTouch1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTouch1DownIcon],svg[carbon-touch-1-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 24h-2a5 5 0 0 1-10 0H6a7 7 0 0 0 14 0"></svg:path><svg:path fill="currentColor" d="M28 14V8a7.01 7.01 0 0 0-7-7h-5a6.15 6.15 0 0 0-4.105 1.566L3.883 9.874a2.999 2.999 0 0 0 3.881 4.55l.001.001L10 12.895V24a3 3 0 0 0 6 0v-5.184a2.94 2.94 0 0 0 3.53-1.217A2.96 2.96 0 0 0 21 18a3 3 0 0 0 2.53-1.401A2.96 2.96 0 0 0 25 17a3.003 3.003 0 0 0 3-3m-2 0a1 1 0 0 1-2 0v-1h-2v2a1 1 0 0 1-2 0v-2h-2v3a1 1 0 0 1-2 0v-3h-2v11a1 1 0 0 1-2 0V9.105L6.6 12.8a1 1 0 0 1-1.308-1.505l7.95-7.251A4.15 4.15 0 0 1 16 3h5a5.006 5.006 0 0 1 5 5Z"></svg:path>`,
})
export class CarbonTouch1DownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTouch1DownFilledIcon],svg[carbon-touch-1-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 30a6.007 6.007 0 0 1-6-6h2a4 4 0 0 0 8 0h2a6.007 6.007 0 0 1-6 6"></svg:path><svg:path fill="currentColor" d="M21 2h-4.44a4 4 0 0 0-2.708 1.057l-9.2 8.466a2.002 2.002 0 0 0 .118 3.055a2.074 2.074 0 0 0 2.658-.173L11 11.143V24a2 2 0 0 0 4 0v-7a2 2 0 0 0 4 0v-1a2 2 0 0 0 4 0v-1a2 2 0 0 0 4 0V8a6 6 0 0 0-6-6"></svg:path>`,
})
export class CarbonTouch1DownFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTouch1FilledIcon],svg[carbon-touch-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a6.007 6.007 0 0 0-6 6h2a4 4 0 0 1 8 0h2a6.007 6.007 0 0 0-6-6"></svg:path><svg:path fill="currentColor" d="M21 30h-4.44a4 4 0 0 1-2.708-1.057l-9.2-8.466a2.002 2.002 0 0 1 .118-3.055a2.074 2.074 0 0 1 2.658.173L11 20.857V8a2 2 0 0 1 4 0v7a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v7a6 6 0 0 1-6 6"></svg:path>`,
})
export class CarbonTouch1FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTouch2Icon],svg[carbon-touch-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 15h-2a11 11 0 0 0-22 0H3a13 13 0 0 1 26 0"></svg:path><svg:path fill="currentColor" d="M25 28h-2V15a7 7 0 1 0-14 0v13H7V15a9 9 0 0 1 18 0Z"></svg:path><svg:path fill="currentColor" d="M21 20H11v-5a5 5 0 0 1 10 0Zm-8-2h6v-3a3 3 0 0 0-6 0Z"></svg:path>`,
})
export class CarbonTouch2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTouch2FilledIcon],svg[carbon-touch-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12a3.003 3.003 0 0 0-3 3v3h6v-3a3.003 3.003 0 0 0-3-3"></svg:path><svg:path fill="currentColor" d="M16 6a9.01 9.01 0 0 0-9 9v13h18V15a9.01 9.01 0 0 0-9-9m5 14H11v-5a5 5 0 0 1 10 0Z"></svg:path><svg:path fill="currentColor" d="M29 15h-2a11 11 0 0 0-22 0H3a13 13 0 0 1 26 0"></svg:path>`,
})
export class CarbonTouch2FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTouchInteractionIcon],svg[carbon-touch-interaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 21v-1a1 1 0 0 1 2 0v10h2V20a3.003 3.003 0 0 0-3-3a2.96 2.96 0 0 0-1.47.401a2.954 2.954 0 0 0-4-1A3 3 0 0 0 19 15a3 3 0 0 0-1 .185V10a3 3 0 0 0-6 0v11.105l-2.235-1.53v.001a2.999 2.999 0 0 0-3.882 4.55L12.323 30l1.347-1.478l-6.378-5.818A1 1 0 0 1 7 22a1 1 0 0 1 1.6-.8l5.4 3.695V10a1 1 0 0 1 2 0v11h2v-3a1 1 0 0 1 2 0v3h2v-2a1 1 0 0 1 2 0v2Z"></svg:path><svg:path fill="currentColor" d="M28 12h-6v-2h6V4H4v6h4v2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonTouchInteractionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTourIcon],svg[carbon-tour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 18l-4.779-6.402A5.94 5.94 0 0 1 18 8c0-3.308 2.691-6 6-6s6 2.692 6 6a5.94 5.94 0 0 1-1.225 3.603zm0-14c-2.206 0-4 1.794-4 4c0 .858.284 1.687.82 2.397l3.18 4.26l3.176-4.255C27.716 9.687 28 8.858 28 8c0-2.206-1.794-4-4-4"></svg:path><svg:circle cx="24" cy="8" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 18v4H4V6h10V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-4zM18 28h-4v-4h4z"></svg:path>`,
})
export class CarbonTourIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrafficConeIcon],svg[carbon-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.796 28L18.975 2.775A1 1 0 0 0 18 2h-4a1 1 0 0 0-.975.775L7.205 28H4v2h24v-2Zm-4.822-12h-7.948l.923-4h6.102Zm.461 2l.923 4H10.642l.923-4Zm-5.64-14h2.41l1.384 6H13.41ZM10.18 24h11.64l.923 4H9.257Z"></svg:path>`,
})
export class CarbonTrafficConeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrafficEventIcon],svg[carbon-traffic-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21h6v2h-6z"></svg:path><svg:path fill="currentColor" d="m24.246 8l1.714 6H30v-2h-2.531l-1.3-4.549A2.01 2.01 0 0 0 24.246 6h-1.349l-.728-2.549A2.01 2.01 0 0 0 20.246 2H7.754a2.01 2.01 0 0 0-1.922 1.45L4.532 8H2v2h4.04l1.714-6h12.492l.571 2h-9.063a2.01 2.01 0 0 0-1.922 1.45L8.817 11H7.714a2 2 0 0 0-1.891 1.352L4.572 16H2v2h2v7a2.003 2.003 0 0 0 2 2v3h2v-3h12v3h2v-3a2.003 2.003 0 0 0 2-2v-7h2v-2h-2.571l-1.251-3.647A2 2 0 0 0 20.286 11h-9.389l.857-3ZM22 19v2h-2v2h2v2H6v-2h2v-2H6v-2Zm-.343-2H6.343l1.371-4h12.572Z"></svg:path>`,
})
export class CarbonTrafficEventIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrafficFlowIcon],svg[carbon-traffic-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 8l-4-4l-4 4l1.41 1.42L21 7.83V18h2V7.83l1.58 1.58zM12.59 22.58L11 24.17V14H9v10.17l-1.58-1.58L6 24l4 4l4-4zM2 2h2v28H2zm26 0h2v28h-2zM15 2h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2z"></svg:path>`,
})
export class CarbonTrafficFlowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrafficFlowIncidentIcon],svg[carbon-traffic-flow-incident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 9.42L24.59 8l-2.585 2.585L22 10.58l-.005.005L19.42 8.01L18 9.42L20.58 12L18 14.58L19.41 16l2.585-2.585l.005.005l.005-.005l2.575 2.575L26 14.58L23.42 12zm-12 8L12.59 16l-2.585 2.585L10 18.58l-.005.005L7.42 16.01L6 17.42L8.58 20L6 22.58L7.41 24l2.585-2.585l.005.005l.005-.005l2.575 2.575L14 22.58L11.42 20zM2 2h2v28H2zm26 0h2v28h-2zM15 2h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2z"></svg:path>`,
})
export class CarbonTrafficFlowIncidentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrafficIncidentIcon],svg[carbon-traffic-incident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zm9.486-14.072l4.242-4.242l1.414 1.414l-4.242 4.242z"></svg:path><svg:path fill="currentColor" d="m12.082 23.433l4.116 2.318a2.01 2.01 0 0 0 2.386-.335l8.832-8.832a2.01 2.01 0 0 0 .334-2.386l-2.298-4.136l1.79-1.79l-1.414-1.414l-1.414 1.414l-4.95-4.95a2.003 2.003 0 0 0-2.828 0L14.515 1.2L13.1 2.615l2.121 2.121l-8.485 8.486l-2.12-2.122L3.2 12.515l2.121 2.12a2.003 2.003 0 0 0 0 2.83l4.95 4.95l-1.414 1.413l1.414 1.414Zm13.92-8.264l-8.833 8.833l-4.546-2.525l10.854-10.853ZM9.564 18.88l1.414-1.415l-1.414-1.414l-1.414 1.414l-1.415-1.414L18.05 4.736l1.414 1.415l-1.414 1.414l1.414 1.414l1.415-1.414l1.414 1.414l-11.314 11.314Z"></svg:path>`,
})
export class CarbonTrafficIncidentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrafficWeatherIncidentIcon],svg[carbon-traffic-weather-incident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 24h2v6H2zM28 2h2v28h-2zM15 2h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2zM6 12a3.9 3.9 0 0 1-4-3.777a3.9 3.9 0 0 1 .653-2.064L5.17 2.414a1.038 1.038 0 0 1 1.66 0L9.314 6.11A3.97 3.97 0 0 1 10 8.223A3.9 3.9 0 0 1 6 12m0-7.237L4.344 7.226A1.9 1.9 0 0 0 4 8.223a1.9 1.9 0 0 0 2 1.778a1.9 1.9 0 0 0 2-1.778a2 2 0 0 0-.375-1.047zm5 7l-1.656 2.462a1.9 1.9 0 0 0-.344.998A1.9 1.9 0 0 0 11 17a1.9 1.9 0 0 0 2-1.777a2 2 0 0 0-.375-1.047zm-5 4l-1.656 2.462a1.9 1.9 0 0 0-.344.998A1.9 1.9 0 0 0 6 21a1.9 1.9 0 0 0 2-1.777a2 2 0 0 0-.375-1.047z"></svg:path>`,
})
export class CarbonTrafficWeatherIncidentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrainIcon],svg[carbon-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H11a5.006 5.006 0 0 0-5 5v12a4.99 4.99 0 0 0 3.582 4.77L7.769 29h2.176l1.714-4h8.682l1.714 4h2.176l-1.813-4.23A4.99 4.99 0 0 0 26 20V8a5.006 5.006 0 0 0-5-5M11 5h10a2.995 2.995 0 0 1 2.816 2H8.184A2.995 2.995 0 0 1 11 5m13 14h-3v2h2.816A2.995 2.995 0 0 1 21 23H11a2.995 2.995 0 0 1-2.816-2H11v-2H8v-2h16Zm0-4H8V9h16Z"></svg:path>`,
})
export class CarbonTrainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrainHeartIcon],svg[carbon-train-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.303 2a2.66 2.66 0 0 0-1.908.806l-.393.405l-.397-.405a2.66 2.66 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L25.002 11l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.66 2.66 0 0 0 27.303 2M22 13v3H6v-6h9V8H6.184A2.995 2.995 0 0 1 9 6h6V4H9a5.006 5.006 0 0 0-5 5v12a4.99 4.99 0 0 0 3.582 4.77L5.769 30h2.176l1.714-4h8.682l1.714 4h2.176l-1.813-4.23A4.99 4.99 0 0 0 24 21v-8zm0 7h-3v2h2.816A2.995 2.995 0 0 1 19 24H9a2.995 2.995 0 0 1-2.816-2H9v-2H6v-2h16z"></svg:path>`,
})
export class CarbonTrainHeartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrainProfileIcon],svg[carbon-train-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 25H2v2h2v2h2v-2h5v2h2v-2h5v2h2v-2h5v2h2v-2h3zM8 16H2v-2h6v-2H2v-2h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="m28.55 14.23l-8.58-7.864A8.98 8.98 0 0 0 13.888 4H2v2h10v4a2 2 0 0 0 2 2h9.157l4.041 3.705A2.472 2.472 0 0 1 25.528 20H2v2h23.527a4.473 4.473 0 0 0 3.023-7.77M14 10V6.005a6.98 6.98 0 0 1 4.618 1.835L20.975 10Z"></svg:path>`,
})
export class CarbonTrainProfileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrainSpeedIcon],svg[carbon-train-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 25H2v2h2v2h2v-2h5v2h2v-2h5v2h2v-2h5v2h2v-2h3zm-.286-8.41L18.15 8.64A14.93 14.93 0 0 0 9.652 6H2v2h7.652a12.95 12.95 0 0 1 7.365 2.287l1.036.713H9v2h11.962l7.62 5.238A.966.966 0 0 1 28.033 20H2v2h26.034a2.966 2.966 0 0 0 1.68-5.41"></svg:path>`,
})
export class CarbonTrainSpeedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrainTicketIcon],svg[carbon-train-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.126 7.125a1.125 1.125 0 1 1 0-2.25H30V2H18v2.875h.875a1.125 1.125 0 0 1 0 2.25H18V10h12V7.125Z"></svg:path><svg:path fill="currentColor" d="M22 13v3H6v-6h9V8H6.186a2.995 2.995 0 0 1 2.816-2h6V4H9a5.006 5.006 0 0 0-5 5v12a4.99 4.99 0 0 0 3.582 4.77L5.77 30h2.176l1.714-4h8.681l1.714 4h2.176l-1.812-4.23A4.99 4.99 0 0 0 24 21v-8Zm0 7h-3v2h2.816a2.995 2.995 0 0 1-2.815 2H9a2.995 2.995 0 0 1-2.816-2H9v-2H6v-2h16Z"></svg:path>`,
})
export class CarbonTrainTicketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrainTimeIcon],svg[carbon-train-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m25.496 10.088l-2.622-2.622V3h2.25v3.534l1.964 1.964z"></svg:path><svg:path fill="currentColor" d="M24 1a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6m1.497 9.088l-2.622-2.622V3h2.25v3.534l1.964 1.964Z"></svg:path><svg:path fill="currentColor" d="M6 16v-6h9V8H6.184A2.995 2.995 0 0 1 9 6h6V4H9a5.006 5.006 0 0 0-5 5v12a4.99 4.99 0 0 0 3.582 4.77L5.769 30h2.176l1.714-4h8.682l1.714 4h2.176l-1.813-4.23A4.99 4.99 0 0 0 24 21v-5Zm16 4h-3v2h2.816A2.995 2.995 0 0 1 19 24H9a2.995 2.995 0 0 1-2.816-2H9v-2H6v-2h16Z"></svg:path>`,
})
export class CarbonTrainTimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTramIcon],svg[carbon-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-4V4h6V2H9v2h6v2h-4a5.006 5.006 0 0 0-5 5v11a4.99 4.99 0 0 0 3.582 4.77L8.198 30h2.176l1.285-3h8.682l1.286 3h2.175l-1.384-3.23A4.99 4.99 0 0 0 26 22V11a5.006 5.006 0 0 0-5-5M11 8h10a2.995 2.995 0 0 1 2.816 2H8.184A2.995 2.995 0 0 1 11 8m13 13h-3v2h2.816A2.995 2.995 0 0 1 21 25H11a2.995 2.995 0 0 1-2.816-2H11v-2H8v-2h16Zm0-4H8v-5h16Z"></svg:path>`,
})
export class CarbonTramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTransformBinaryIcon],svg[carbon-transform-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20h-2c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2m-2-6v4h2v-4zm-6-2h2v8h-2z"></svg:path><svg:path fill="currentColor" d="M11 20H9c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2m-2-6v4h2v-4zm7-12v2c6.6 0 12 5.4 12 12s-5.4 12-12 12v2c7.7 0 14-6.3 14-14S23.7 2 16 2M8.2 25.1L7 26.7c1.2 1 2.6 1.9 4.2 2.4l.7-1.9c-1.4-.5-2.6-1.2-3.7-2.1m-4-7.1l-2 .4c.3 1.6.9 3.2 1.7 4.6l1.7-1c-.7-1.2-1.2-2.6-1.4-4m1.4-8L3.9 9c-.8 1.4-1.4 3-1.6 4.6l2 .3c.1-1.4.6-2.7 1.3-3.9m6.2-5.2l-.7-1.9C9.6 3.5 8.2 4.3 7 5.3l1.3 1.5c1-.8 2.2-1.5 3.5-2"></svg:path>`,
})
export class CarbonTransformBinaryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTransformCodeIcon],svg[carbon-transform-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.9 4.737a12 12 0 0 0-3.598 2.09L7.02 5.296a14 14 0 0 1 4.198-2.438zm-8 4.278a13.9 13.9 0 0 0-1.677 4.556l1.984.35c.252-1.4.73-2.72 1.422-3.909zm.293 9.067l-1.968.347c.288 1.636.86 3.174 1.664 4.563l1.73-.999a12 12 0 0 1-1.426-3.911m4.114 7.087l-1.294 1.54a14 14 0 0 0 4.201 2.44l.686-1.884a12.1 12.1 0 0 1-3.593-2.096M29.775 13.57a13.9 13.9 0 0 0-1.664-4.563a14.1 14.1 0 0 0-3.124-3.718a14 14 0 0 0-4.201-2.439A13.9 13.9 0 0 0 16 2.001v2c1.443 0 2.822.262 4.1.735a12.1 12.1 0 0 1 4.877 3.353c.525.593.998 1.232 1.398 1.921a12 12 0 0 1 1.43 3.908c.12.678.195 1.371.195 2.082c0 .712-.086 1.402-.209 2.08a11.9 11.9 0 0 1-1.426 3.904a12.2 12.2 0 0 1-2.673 3.183a12.1 12.1 0 0 1-3.594 2.093c-1.282.47-2.658.74-4.098.74v2a14.04 14.04 0 0 0 8.981-3.297a14.1 14.1 0 0 0 3.118-3.717a13.9 13.9 0 0 0 1.678-4.557C29.918 17.64 30 16.831 30 16s-.086-1.638-.225-2.429Zm-17.052.537l.919-.918l.778-.778L13 11l-.65.65l-1.422 1.422L9.2 14.801L8 16l1.2 1.198l1.728 1.73l1.422 1.42L13 21l1.42-1.412l-.778-.778l-.919-.918l-1.117-1.117l-.775-.775l.775-.775zm6.554 3.784l-.919.918l-.778.778L19 21l.65-.65l1.422-1.422L22.8 17.2l1.2-1.199l-1.2-1.2l-1.73-1.728l-1.421-1.422L19 11l-1.42 1.412l.778.778l.919.918l1.117 1.117l.775.775l-.775.775z"></svg:path>`,
})
export class CarbonTransformCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTransformInstructionsIcon],svg[carbon-transform-instructions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V9h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H9v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V23h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path><svg:path fill="currentColor" d="M16 2v2c6.6 0 12 5.4 12 12s-5.4 12-12 12v2c7.7 0 14-6.3 14-14S23.7 2 16 2M8.2 25.1L7 26.7c1.2 1 2.6 1.9 4.2 2.4l.7-1.9c-1.4-.5-2.6-1.2-3.7-2.1m-4-7.1l-2 .4c.3 1.6.9 3.2 1.7 4.6l1.7-1c-.7-1.2-1.2-2.6-1.4-4m1.4-8L3.9 9c-.8 1.4-1.4 3-1.6 4.6l2 .3c.1-1.4.6-2.7 1.3-3.9m6.2-5.2l-.7-1.9C9.6 3.5 8.2 4.3 7 5.3l1.3 1.5c1-.8 2.2-1.5 3.5-2"></svg:path>`,
})
export class CarbonTransformInstructionsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTransformLanguageIcon],svg[carbon-transform-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19h8v2h-8zm0-4h12v2H10zm0-4h12v2H10z"></svg:path><svg:path fill="currentColor" d="M16 2v2c6.6 0 12 5.4 12 12s-5.4 12-12 12v2c7.7 0 14-6.3 14-14S23.7 2 16 2M8.2 25.1L7 26.7c1.2 1 2.6 1.9 4.2 2.4l.7-1.9c-1.4-.5-2.6-1.2-3.7-2.1m-4-7.1l-2 .4c.3 1.6.9 3.2 1.7 4.6l1.7-1c-.7-1.2-1.2-2.6-1.4-4m1.4-8L3.9 9c-.8 1.4-1.4 3-1.6 4.6l2 .3c.1-1.4.6-2.7 1.3-3.9m6.2-5.2l-.7-1.9C9.6 3.5 8.2 4.3 7 5.3l1.3 1.5c1-.8 2.2-1.5 3.5-2"></svg:path>`,
})
export class CarbonTransformLanguageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTransgenderIcon],svg[carbon-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2h4.586l-6.402 6.401a6.95 6.95 0 0 0-8.368 0L10.414 9L13 6.414L11.586 5L9 7.586L5.414 4H10V2H2v8h2V5.414L7.586 9L5 11.585L6.414 13L9 10.414l1.401 1.401A6.98 6.98 0 0 0 15 22.92V25h-4v2h4v3h2v-3h4v-2h-4v-2.08a6.98 6.98 0 0 0 4.598-11.104L28 5.414V10h2V2Zm-6 19a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5"></svg:path>`,
})
export class CarbonTransgenderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTranslateIcon],svg[carbon-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23zM18 7V5h-7V2H9v3H2v2h10.74a14.7 14.7 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.5 16.5 0 0 0 3 5.58A16.8 16.8 0 0 1 3 18l.75 1.86A18.5 18.5 0 0 0 9.53 16a16.9 16.9 0 0 0 5.76 3.84L16 18a14.5 14.5 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"></svg:path>`,
})
export class CarbonTranslateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTransmissionLteIcon],svg[carbon-transmission-lte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.57 30l.933-2h8.993l.933 2h2.208L17 15.778V11h-2v4.778L8.363 30zM16 18.365L17.697 22h-3.393zM13.37 24h5.26l.933 2h-7.126zM10.783 9.333a7 7 0 0 1 10.434 0l-1.49 1.333a5 5 0 0 0-7.453 0z"></svg:path><svg:path fill="currentColor" d="M7.2 6.4a11.002 11.002 0 0 1 17.6 0l-1.6 1.2a9 9 0 0 0-14.401 0Z"></svg:path>`,
})
export class CarbonTransmissionLteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTransposeIcon],svg[carbon-transpose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 26h-5v-2h5a5.006 5.006 0 0 0 5-5v-5h2v5a7.01 7.01 0 0 1-7 7M8 30H4a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M4 14v14h4V14zm24-4H14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M14 4v4h14V4z"></svg:path>`,
})
export class CarbonTransposeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrashCanIcon],svg[carbon-trash-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"></svg:path><svg:path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"></svg:path>`,
})
export class CarbonTrashCanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTreeIcon],svg[carbon-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 30H9v-2h3V15.566l-3.515-2.109l1.03-1.714l3.514 2.108A2.01 2.01 0 0 1 14 15.566V28a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M22 30h-3a2 2 0 0 1-2-2V17h6a4 4 0 0 0 3.981-4.396A4.15 4.15 0 0 0 22.785 9h-1.583l-.177-.779C20.452 5.696 18.031 4 15 4a6.02 6.02 0 0 0-5.441 3.486l-.309.667l-.863-.114A3 3 0 0 0 8 8a4 4 0 1 0 0 8v2A6 6 0 1 1 8 6l.079.001A8.03 8.03 0 0 1 15 2c3.679 0 6.692 1.978 7.752 5h.033a6.164 6.164 0 0 1 6.187 5.414A6 6 0 0 1 23 19h-4v9h3Z"></svg:path>`,
})
export class CarbonTreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTreeFallRiskIcon],svg[carbon-tree-fall-risk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M23.75 10h-1.5V6h1.5ZM23 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M29.912 13.936L23.628 2.37a.718.718 0 0 0-1.256 0l-6.283 11.564A.72.72 0 0 0 16.72 15h12.56a.72.72 0 0 0 .631-1.065M22.25 6h1.5v4h-1.5zm.75 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 6v-2h-9v11a2.003 2.003 0 0 0 2 2h3v-2h-3v-9zM12 30H9v-2h3V15.566l-3.515-2.109l1.03-1.714l3.514 2.108A2.01 2.01 0 0 1 14 15.566V28a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="m18.664 5.006l.96-1.767A8.93 8.93 0 0 0 15 2a8.03 8.03 0 0 0-6.921 4.001L8 6a6 6 0 0 0 0 12v-2a4 4 0 0 1 0-8a3 3 0 0 1 .387.04l.863.113l.309-.667A6.02 6.02 0 0 1 15 4a6.9 6.9 0 0 1 3.664 1.006"></svg:path>`,
})
export class CarbonTreeFallRiskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTreeViewIcon],svg[carbon-tree-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 20v-8h-8v3h-5V7a2 2 0 0 0-2-2h-5V2H2v8h8V7h5v18a2 2 0 0 0 2 2h5v3h8v-8h-8v3h-5v-8h5v3ZM8 8H4V4h4Zm16 16h4v4h-4Zm0-10h4v4h-4Z"></svg:path>`,
})
export class CarbonTreeViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTreeViewAltIcon],svg[carbon-tree-view-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9.005h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1H11v-1a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h4v20a2 2 0 0 0 2 2h4v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1h-4v-9h4v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1h-4v-9h4v1a2 2 0 0 0 2 2m0-6h6v4h-6Zm-14 4H3v-4h6Zm14 18h6v4h-6Zm0-11h6v4h-6Z"></svg:path>`,
})
export class CarbonTreeViewAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleDownOutlineIcon],svg[carbon-triangle-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.125 4.488l13.019 23.987A.98.98 0 0 0 16 29a.98.98 0 0 0 .856-.525L29.874 4.488A1 1 0 0 0 30 4c-.002-.523-.411-1-.98-1H2.98c-.569 0-.979.477-.98 1c0 .163.039.33.125.488M27.323 5L16 25.868L4.677 5z"></svg:path>`,
})
export class CarbonTriangleDownOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleDownSolidIcon],svg[carbon-triangle-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.02 3c.569 0 .978.477.98 1c0 .163-.039.33-.125.489l-13.02 23.986c-.186.344-.52.525-.855.525s-.67-.181-.856-.525L2.124 4.49A1 1 0 0 1 2 4c.002-.523.411-1 .98-1z"></svg:path>`,
})
export class CarbonTriangleDownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleLeftOutlineIcon],svg[carbon-triangle-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.512 2.125L3.525 15.144A.98.98 0 0 0 3 16c0 .335.181.669.525.856l23.987 13.019c.158.086.325.126.488.125c.523-.002 1-.411 1-.98V2.98c0-.569-.477-.979-1-.98c-.163 0-.33.039-.488.125M27 27.323L6.132 16L27 4.677z"></svg:path>`,
})
export class CarbonTriangleLeftOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleLeftSolidIcon],svg[carbon-triangle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 29.02c0 .569-.477.978-1 .98c-.163 0-.33-.039-.488-.125L3.525 16.855C3.18 16.67 3 16.336 3 16s.181-.67.525-.856l23.987-13.02C27.67 2.039 27.837 2 28 2c.523.002 1 .411 1 .98z"></svg:path>`,
})
export class CarbonTriangleLeftSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleOutlineIcon],svg[carbon-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.876 27.512L16.856 3.525A.98.98 0 0 0 16 3a.98.98 0 0 0-.855.525L2.125 27.512A1 1 0 0 0 2 28c.002.523.411 1 .98 1h26.04c.569 0 .979-.477.98-1c0-.163-.039-.33-.124-.488M4.676 27L16 6.132L27.323 27z"></svg:path>`,
})
export class CarbonTriangleOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleRightOutlineIcon],svg[carbon-triangle-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.488 29.876l23.987-13.02A.98.98 0 0 0 29 16a.98.98 0 0 0-.525-.856L4.488 2.125A1 1 0 0 0 4 2c-.523.002-1 .411-1 .98v26.04c0 .569.477.979 1 .98c.163 0 .33-.039.488-.124M5 4.676L25.868 16L5 27.323z"></svg:path>`,
})
export class CarbonTriangleRightOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleRightSolidIcon],svg[carbon-triangle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.98c0-.569.477-.978 1-.98c.163 0 .33.039.489.125l23.986 13.02c.344.186.525.52.525.855s-.181.67-.525.856L4.49 29.876A1 1 0 0 1 4 30c-.523-.002-1-.411-1-.98z"></svg:path>`,
})
export class CarbonTriangleRightSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleSolidIcon],svg[carbon-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.98 29c-.569 0-.978-.477-.98-1c0-.163.039-.33.125-.488l13.02-23.987C15.33 3.18 15.664 3 16 3s.67.181.856.525l13.02 23.987c.085.158.124.325.124.488c-.002.523-.411 1-.98 1z"></svg:path>`,
})
export class CarbonTriangleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTriggerIcon],svg[carbon-trigger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 19l1.4 1.4L9 14.8l5.6 5.6L16 19l-7-7zm26.6-7.4L23 17.2l-5.6-5.6L16 13l7 7l7-7zM9 22a2 2 0 1 0 0 4a2 2 0 0 0 0-4m14-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class CarbonTriggerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrophyIcon],svg[carbon-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 7h-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.17 8.17 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.97 7.97 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2 2 0 0 0-2-2M8 14a2 2 0 0 1-2-2V9h2Zm14 0a6 6 0 0 1-6.185 5.997A6.2 6.2 0 0 1 10 13.707V6h12Zm4-2a2 2 0 0 1-2 2V9h2Z"></svg:path>`,
})
export class CarbonTrophyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTrophyFilledIcon],svg[carbon-trophy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 7h-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.17 8.17 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.97 7.97 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2 2 0 0 0-2-2M8 14a2 2 0 0 1-2-2V9h2Zm18-2a2 2 0 0 1-2 2V9h2Z"></svg:path>`,
})
export class CarbonTrophyFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTropicalStormIcon],svg[carbon-tropical-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"></svg:path><svg:path fill="currentColor" d="m22.652 4.182l-2.177 2.514l-1.404 1.621l1.715 1.288A7.94 7.94 0 0 1 23.996 16l.001.058l.002.041c.018.432.241 10.111-14.654 11.722l2.18-2.517l1.404-1.621l-1.715-1.288A7.94 7.94 0 0 1 8.004 16l-.001-.058L8 15.901c-.018-.431-.24-10.094 14.651-11.719M24.998 2l-.05.001C5.254 2.915 6.005 16 6.005 16a9.98 9.98 0 0 0 4.01 7.995l-3.777 4.36A1.004 1.004 0 0 0 7.002 30l.05-.001C26.747 29.085 25.996 16 25.996 16a9.98 9.98 0 0 0-4.009-7.995l3.776-4.36A1.004 1.004 0 0 0 24.998 2"></svg:path>`,
})
export class CarbonTropicalStormIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTropicalStormModelTracksIcon],svg[carbon-tropical-storm-model-tracks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M14.819 6.65c.116-.121 1.864-1.919 2.888-2.943A1 1 0 0 0 17 2C11.812 2 2 4.299 2 13a7.9 7.9 0 0 0 3.181 6.35a370 370 0 0 1-2.888 2.943A1 1 0 0 0 3 24c5.188 0 15-2.299 15-11a7.9 7.9 0 0 0-3.181-6.35M9.706 20.793a21 21 0 0 1-4.093.985c.162-.166 2.769-2.905 2.769-2.905l-1.174-.607A5.91 5.91 0 0 1 4 13c0-3.667 2.118-6.289 6.294-7.793a21 21 0 0 1 4.093-.985c-.227.232-2.77 2.905-2.77 2.905l1.176.607A5.91 5.91 0 0 1 16 13c0 3.667-2.118 6.289-6.293 7.793M30 17l-5-5l-5 5l1.413 1.416L24 15.832V19a9.01 9.01 0 0 1-9 9h-3v2h3a11.013 11.013 0 0 0 11-11v-3.168l2.586 2.582z"></svg:path>`,
})
export class CarbonTropicalStormModelTracksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTropicalStormTracksIcon],svg[carbon-tropical-storm-tracks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"></svg:path><svg:path fill="currentColor" d="M26.86 12.48a12.93 12.93 0 0 0-4.857-4.999l.442-.459c.82-.848 1.93-1.982 3.262-3.315A1 1 0 0 0 25 2c-.354 0-8.736.049-14.269 4.302a12.15 12.15 0 0 0-3.25 3.696l-.458-.442c-.849-.821-1.983-1.93-3.316-3.263A1 1 0 0 0 2 7c0 .36.05 8.874 4.406 14.402a12.1 12.1 0 0 0 3.592 3.117l-.657.68c-.795.82-1.828 1.874-3.048 3.094A1 1 0 0 0 7 30c.286 0 7.061-.035 12.459-3.105a12.96 12.96 0 0 0 5.06-4.893q.306.294.68.657c.82.795 1.874 1.828 3.094 3.048A1 1 0 0 0 30 25c0-.288-.036-7.112-3.14-12.52m-3.03 6.108l-.547 1.367a10.54 10.54 0 0 1-4.813 5.201a24.4 24.4 0 0 1-8.886 2.658c.44-.45 3.828-3.983 3.828-3.983l-1.368-.547a9.8 9.8 0 0 1-4.067-3.12c-2.54-3.224-3.458-7.762-3.79-10.58c.544.534 3.982 3.827 3.982 3.827l.546-1.367a9.86 9.86 0 0 1 3.235-4.156c3.217-2.473 7.68-3.373 10.466-3.701c-.534.544-3.828 3.982-3.828 3.982l1.368.547a10.52 10.52 0 0 1 5.17 4.76a24.3 24.3 0 0 1 2.688 8.94c-.45-.44-3.984-3.828-3.984-3.828"></svg:path>`,
})
export class CarbonTropicalStormTracksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTropicalWarningIcon],svg[carbon-tropical-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.949 25.684a1 1 0 0 0-1.896-.005A3.44 3.44 0 0 1 23 28a3.44 3.44 0 0 1-3.053-2.321a1 1 0 0 0-1.896.005A3.44 3.44 0 0 1 15 28h-.434C13.924 26.794 12 22.312 12 12v-.131l1.117.744a6.5 6.5 0 0 1 1.318 1.177l1-1.842a8.5 8.5 0 0 0-1.209-.998L12.802 10h1.531a7 7 0 0 1 1.994.307l.975-1.795A9 9 0 0 0 14.333 8h-1.216A7.03 7.03 0 0 1 18 6h.667l1.087-2H18a9.04 9.04 0 0 0-7 3.364A9.04 9.04 0 0 0 4 4H2v2h2a7.03 7.03 0 0 1 4.883 2H7.667a9.06 9.06 0 0 0-5.4 1.8L.4 11.2l1.2 1.6l1.867-1.4a7.04 7.04 0 0 1 4.2-1.4h1.53l-1.424.95A8.46 8.46 0 0 0 4 18h2a6.46 6.46 0 0 1 2.883-5.387L10 11.87V12c0 8.937 1.4 13.754 2.355 16H2v2h13a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0a5 5 0 0 0 3 1.883v-2.084a3.76 3.76 0 0 1-2.051-2.128"></svg:path><svg:path fill="none" d="M23.75 10h-1.5V6h1.5ZM23 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M29.912 13.936L23.628 2.37a.718.718 0 0 0-1.256 0l-6.283 11.564A.72.72 0 0 0 16.72 15h12.56a.72.72 0 0 0 .631-1.065M22.25 6h1.5v4h-1.5Zm.75 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonTropicalWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTsqIcon],svg[carbon-tsq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 26h11v2H19zm0-4h11v2H19zm11-2H19v-8h11zm-9-2h7v-4h-7zM19 8h11v2H19zm0-4h11v2H19zm-8.707 14.707L8 16.414V12h2v3.586l1.707 1.707z"></svg:path><svg:path fill="currentColor" d="M9 24c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8m0-14c-3.308 0-6 2.692-6 6s2.692 6 6 6s6-2.692 6-6s-2.692-6-6-6"></svg:path>`,
})
export class CarbonTsqIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTsunamiIcon],svg[carbon-tsunami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 26h-6a10.035 10.035 0 0 1-6.927-17.262A12 12 0 0 0 12.993 8a6.9 6.9 0 0 0-6.03 3.42C4.997 14.435 4 19.34 4 26H2c0-7.054 1.106-12.327 3.287-15.673A8.9 8.9 0 0 1 12.994 6H13a14.76 14.76 0 0 1 6.461 1.592a1 1 0 0 1 .087 1.722A8.025 8.025 0 0 0 24 24h6Z"></svg:path>`,
})
export class CarbonTsunamiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTsvIcon],svg[carbon-tsv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 9l-2 13l-2-13h-2l2.516 14h2.968L30 9zM18 23h-6v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M2 11h3v12h2V11h3V9H2z"></svg:path>`,
})
export class CarbonTsvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTuningIcon],svg[carbon-tuning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 30v-4.1c2.3-.5 4-2.5 4-4.9s-1.7-4.4-4-4.9V2h-2v14.1c-2.3.5-4 2.5-4 4.9s1.7 4.4 4 4.9V30zm-4-9c0-1.7 1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3M8 2v4.1c-2.3.5-4 2.5-4 4.9s1.7 4.4 4 4.9V30h2V15.9c2.3-.5 4-2.5 4-4.9s-1.7-4.4-4-4.9V2zm4 9c0 1.7-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3"></svg:path>`,
})
export class CarbonTuningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTwoFactorAuthenticationIcon],svg[carbon-two-factor-authentication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 23.18l-2-2.001l-1.411 1.41L11 26l6-6l-1.41-1.41zM28 30h-4v-2h4V16h-4V8a4.005 4.005 0 0 0-4-4V2a6.007 6.007 0 0 1 6 6v6h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M20 14h-2V8A6 6 0 0 0 6 8v6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M8 8a4 4 0 0 1 8 0v6H8Zm12 20H4V16h16Z"></svg:path>`,
})
export class CarbonTwoFactorAuthenticationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTwoPersonLiftIcon],svg[carbon-two-person-lift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.96 30l-1.921-6.725a1 1 0 0 1 .336-1.056l4.499-3.599l-1.354-5.419l-2.738 3.424A1 1 0 0 1 25 17h-5v-2h4.52l3.7-4.625a1 1 0 0 1 1.75.383l2 8a1 1 0 0 1-.344 1.023l-4.48 3.584l1.738 6.086zM23 5.5A3.5 3.5 0 1 1 26.5 9A3.504 3.504 0 0 1 23 5.5m2 0A1.5 1.5 0 1 0 26.5 4A1.5 1.5 0 0 0 25 5.5"></svg:path><svg:path fill="currentColor" d="M20.004 19A2.004 2.004 0 0 1 18 16.996v-1.992A2.004 2.004 0 0 1 20.004 13H22v-3H10v3h1.996A2.004 2.004 0 0 1 14 15.004v1.992A2.004 2.004 0 0 1 11.996 19H10v3h12v-3Z"></svg:path><svg:path fill="currentColor" d="m5.04 30l1.922-6.725a1 1 0 0 0-.337-1.056L2.126 18.62l1.355-5.418l2.738 3.423A1 1 0 0 0 7 17h5v-2H7.48l-3.699-4.625a1 1 0 0 0-1.75.383l-2 8a1 1 0 0 0 .344 1.023l4.48 3.584l-1.739 6.086zM5.5 9A3.5 3.5 0 1 1 9 5.5A3.504 3.504 0 0 1 5.5 9m0-5A1.5 1.5 0 1 0 7 5.5A1.5 1.5 0 0 0 5.5 4"></svg:path>`,
})
export class CarbonTwoPersonLiftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTxtIcon],svg[carbon-txt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h3v12h2V11h3V9h-8zm-1-2h-2l-2 6l-2-6h-2l2.75 7L12 23h2l2-6l2 6h2l-2.75-7zM3 11h3v12h2V11h3V9H3z"></svg:path>`,
})
export class CarbonTxtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTxtReferenceIcon],svg[carbon-txt-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM21 4h3v12h2V4h3V2h-8zm-1-2h-2l-2 6l-2-6h-2l2.752 7L12 16h2l2-6l2 6h2l-2.755-7zM3 4h3v12h2V4h3V2H3z"></svg:path>`,
})
export class CarbonTxtReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTypePatternIcon],svg[carbon-type-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15H17V2h-2v13H2v2h13v13h2V17h13z"></svg:path><svg:path fill="currentColor" d="M25.586 20L27 21.414L23.414 25L27 28.586L25.586 30l-5-5zM11 30H3a1 1 0 0 1-.894-1.447l4-8a1.04 1.04 0 0 1 1.789 0l4 8A1 1 0 0 1 11 30m-6.382-2h4.764L7 23.236zM28 12h-6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6.001L28 4zM7 12a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"></svg:path>`,
})
export class CarbonTypePatternIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonTypesIcon],svg[carbon-types-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 16l-8 8l-1.414-1.414L27.172 16l-6.586-6.586L22 8z"></svg:path><svg:path fill="currentColor" d="M16 22a1 1 0 0 1-.707-.293l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 22m-3.586-6L16 19.586L19.586 16L16 12.414Z"></svg:path><svg:path fill="currentColor" d="m2 16l8-8l1.414 1.414L4.828 16l6.586 6.586L10 24z"></svg:path>`,
})
export class CarbonTypesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonU1Icon],svg[carbon-u1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 23H9a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M22 21V9h-5v2h3v10h-3v2h8v-2h-3z" fill="currentColor"></svg:path>`,
})
export class CarbonU1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonU2Icon],svg[carbon-u2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 23H9a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M25 23h-8v-6a2 2 0 0 1 2-2h4v-4h-6V9h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4h6z" fill="currentColor"></svg:path>`,
})
export class CarbonU2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonU3Icon],svg[carbon-u3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 23H9a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M23 9h-6v2h6v4h-5v2h5v4h-6v2h6a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z" fill="currentColor"></svg:path>`,
})
export class CarbonU3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUmbrellaIcon],svg[carbon-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.985 15.83A14.38 14.38 0 0 0 17 4.046V2h-2v2.046A14.38 14.38 0 0 0 2.015 15.83a1 1 0 0 0 1.495 1.03A4.86 4.86 0 0 1 6 16a4.87 4.87 0 0 1 4.14 2.51a1.04 1.04 0 0 0 1.72 0A5.02 5.02 0 0 1 15 16.126V25.5a2.5 2.5 0 0 1-5 0V25H8v.5a4.5 4.5 0 0 0 9 0v-9.375a5.02 5.02 0 0 1 3.14 2.386a1 1 0 0 0 1.72 0A4.87 4.87 0 0 1 26 16a4.86 4.86 0 0 1 2.49.86a1 1 0 0 0 1.496-1.03ZM6 14a5.4 5.4 0 0 0-1.503.213A12.44 12.44 0 0 1 12.985 6.4a14.5 14.5 0 0 0-3.046 8.934A6.54 6.54 0 0 0 6 14m10 0a6.55 6.55 0 0 0-4.056 1.43c.037-2.22.608-6.49 4.056-9.176c3.43 2.677 4.009 6.95 4.052 9.173A6.55 6.55 0 0 0 16 14m10 0a6.54 6.54 0 0 0-3.939 1.333a14.5 14.5 0 0 0-3.046-8.934a12.44 12.44 0 0 1 8.488 7.814A5.4 5.4 0 0 0 26 14"></svg:path>`,
})
export class CarbonUmbrellaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUndefinedIcon],svg[carbon-undefined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14h10v4H11z"></svg:path><svg:path fill="currentColor" d="M29.391 14.527L17.473 2.609A2.08 2.08 0 0 0 16 2c-.533 0-1.067.203-1.473.609L2.609 14.527C2.203 14.933 2 15.466 2 16s.203 1.067.609 1.473L14.526 29.39c.407.407.941.61 1.474.61s1.067-.203 1.473-.609L29.39 17.474c.407-.407.61-.94.61-1.474s-.203-1.067-.609-1.473M16 28.036L3.965 16L16 3.964L28.036 16z"></svg:path>`,
})
export class CarbonUndefinedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUndefinedFilledIcon],svg[carbon-undefined-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.391 14.527L17.473 2.609C17.067 2.203 16.533 2 16 2s-1.067.203-1.473.609L2.609 14.527C2.203 14.933 2 15.466 2 16s.203 1.067.609 1.473L14.526 29.39c.407.407.941.61 1.474.61s1.067-.203 1.473-.609L29.39 17.474c.407-.407.61-.94.61-1.474s-.203-1.067-.609-1.473M21 18H11v-4h10z"></svg:path><svg:path fill="none" d="M11 14h10v4H11z"></svg:path>`,
})
export class CarbonUndefinedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUndoIcon],svg[carbon-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10H7.815l3.587-3.586L10 5l-6 6l6 6l1.402-1.415L7.818 12H20a6 6 0 0 1 0 12h-8v2h8a8 8 0 0 0 0-16"></svg:path>`,
})
export class CarbonUndoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUngroupObjectsIcon],svg[carbon-ungroup-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 14v-4h-4v2h-6V6h2V2h-4v2H6V2H2v4h2v12H2v4h4v-2h6v6h-2v4h4v-2h12v2h4v-4h-2V14ZM6 6h12v12H6Zm20 20H14v-6h4v2h4v-4h-2v-4h6Z"></svg:path>`,
})
export class CarbonUngroupObjectsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUnknownIcon],svg[carbon-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 19h-2v-4h2c1.103 0 2-.897 2-2s-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.5h-2V13c0-2.206 1.794-4 4-4h2c2.206 0 4 1.794 4 4s-1.794 4-4 4z"></svg:path><svg:path fill="currentColor" d="M29.391 14.527L17.473 2.609A2.08 2.08 0 0 0 16 2c-.533 0-1.067.203-1.473.609L2.609 14.527C2.203 14.933 2 15.466 2 16s.203 1.067.609 1.473L14.526 29.39c.407.407.941.61 1.474.61s1.067-.203 1.473-.609L29.39 17.474c.407-.407.61-.94.61-1.474s-.203-1.067-.609-1.473M16 28.036L3.965 16L16 3.964L28.036 16z"></svg:path>`,
})
export class CarbonUnknownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUnknownFilledIcon],svg[carbon-unknown-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.391 14.527L17.473 2.609C17.067 2.203 16.533 2 16 2s-1.067.203-1.473.609L2.609 14.527C2.203 14.933 2 15.466 2 16s.203 1.067.609 1.473L14.526 29.39c.407.407.941.61 1.474.61s1.067-.203 1.473-.609L29.39 17.474c.407-.407.61-.94.61-1.474s-.203-1.067-.609-1.473M16 24a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m1.125-6.752v1.877h-2.25V15H17c1.034 0 1.875-.841 1.875-1.875S18.034 11.25 17 11.25h-2a1.877 1.877 0 0 0-1.875 1.875v.5h-2.25v-.5A4.13 4.13 0 0 1 15 9h2a4.13 4.13 0 0 1 4.125 4.125a4.13 4.13 0 0 1-4 4.123"></svg:path><svg:path fill="none" d="M16 21a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 16 21m1.125-3.752a4.13 4.13 0 0 0 4-4.123A4.13 4.13 0 0 0 17 9h-2a4.13 4.13 0 0 0-4.125 4.125v.5h2.25v-.5c0-1.034.841-1.875 1.875-1.875h2c1.034 0 1.875.841 1.875 1.875S18.034 15 17 15h-2.125v4.125h2.25z"></svg:path>`,
})
export class CarbonUnknownFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUnlinkIcon],svg[carbon-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.584 5.002l1.414-1.414l3.416 3.414L7 8.417zm19.997 19.99l1.415-1.414l3.414 3.416l-1.414 1.414zM11 2h2v4h-2zm-9 9h4v2H2zm24 8h4v2h-4zm-7 7h2v4h-2zm-2.42-4.93l-3.71 3.72a4 4 0 1 1-5.66-5.66l3.72-3.72L9.51 14L5.8 17.72a6 6 0 0 0-.06 8.54A6 6 0 0 0 10 28a6.07 6.07 0 0 0 4.32-1.8L18 22.49zm-1.17-10.14l3.72-3.72a4 4 0 1 1 5.66 5.66l-3.72 3.72L22.49 18l3.71-3.72a6 6 0 0 0 .06-8.54A6 6 0 0 0 22 4a6.07 6.07 0 0 0-4.32 1.8L14 9.51z"></svg:path>`,
})
export class CarbonUnlinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUnlockedIcon],svg[carbon-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 14H12V8a4 4 0 0 1 8 0h2a6 6 0 0 0-12 0v6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m0 14H8V16h16Z"></svg:path>`,
})
export class CarbonUnlockedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUnsavedIcon],svg[carbon-unsaved-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 19.4L28.6 18L25 21.6L21.4 18L20 19.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"></svg:path><svg:path fill="currentColor" d="M16 26h-4v-8h4v-2h-4c-1.1 0-2 .9-2 2v8H6V6h4v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6.4l4 4V16h2v-6c0-.3-.1-.5-.3-.7l-5-5c-.2-.2-.4-.3-.7-.3H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h10zM12 6h8v4h-8z"></svg:path>`,
})
export class CarbonUnsavedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUpToTopIcon],svg[carbon-up-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14L6 24l1.4 1.4l8.6-8.6l8.6 8.6L26 24zM4 8h24v2H4z"></svg:path>`,
})
export class CarbonUpToTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUpdateNowIcon],svg[carbon-update-now-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 25.586l-2-2V21h-2v3.414L25.586 27z"></svg:path><svg:path fill="currentColor" d="M24 31a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5m-8 9A12.013 12.013 0 0 1 4 16H2a14.016 14.016 0 0 0 14 14zM12 8H7.078A11.984 11.984 0 0 1 28 16h2A13.978 13.978 0 0 0 6 6.234V2H4v8h8z"></svg:path>`,
})
export class CarbonUpdateNowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUpgradeIcon],svg[carbon-upgrade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 24H11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4H11v-2h10zm7.707-13.707l-12-12a1 1 0 0 0-1.414 0l-12 12A1 1 0 0 0 4 16h5v4a2 2 0 0 0 2 2h10a2.003 2.003 0 0 0 2-2v-4h5a1 1 0 0 0 .707-1.707M21 14v6H11v-6H6.414L16 4.414L25.586 14z"></svg:path>`,
})
export class CarbonUpgradeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUploadIcon],svg[carbon-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 18l1.41 1.41L15 11.83V30h2V11.83l7.59 7.58L26 18L16 8zM6 8V4h20v4h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4z"></svg:path>`,
})
export class CarbonUploadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUpstreamIcon],svg[carbon-upstream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 24a6 6 0 1 0 12 0a6 6 0 0 0-12 0m2 0c0-2.206 1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4M30 5a3 3 0 0 0-6 0a2.99 2.99 0 0 0 2 2.816V13a6.03 6.03 0 0 1-2 4.467V15h-2v6h6v-2h-2.717A8.04 8.04 0 0 0 28 13V7.816A2.99 2.99 0 0 0 30 5m-3 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-8.414 5.586L17 13.172V7.816A2.992 2.992 0 0 0 16 2a2.992 2.992 0 0 0-1 5.816v5.356l-1.586-1.586L12 13l4 4l4-4zM16 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2M8 15v2.467A6.03 6.03 0 0 1 6 13V7.816A2.992 2.992 0 0 0 5 2a2.992 2.992 0 0 0-1 5.816V13a8.04 8.04 0 0 0 2.717 6H4v2h6v-6zM5 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class CarbonUpstreamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUrlIcon],svg[carbon-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 21V9h-2v14h8v-2zm-4-6v-4c0-1.103-.897-2-2-2h-6v14h2v-6h1.48l2.335 6h2.145l-2.333-6H18c1.103 0 2-.897 2-2m-6-4h4v4h-4zM8 23H4c-1.103 0-2-.897-2-2V9h2v12h4V9h2v12c0 1.103-.897 2-2 2"></svg:path>`,
})
export class CarbonUrlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUsageIncludedUseCaseIcon],svg[carbon-usage-included-use-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 28V5.828l7.586 7.586L22 12L12 2L2 12l1.414 1.414L11 5.83V28a2 2 0 0 0 2 2h15v-2z"></svg:path>`,
})
export class CarbonUsageIncludedUseCaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUsbIcon],svg[carbon-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 15V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v9a2 2 0 0 0-2 2v11h2V17h16v11h2V17a2 2 0 0 0-2-2M10 6h12v9H10Z"></svg:path><svg:path fill="currentColor" d="M12 10h3v2h-3zm5 0h3v2h-3z"></svg:path>`,
})
export class CarbonUsbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUseCaseDefinitionIcon],svg[carbon-use-case-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.074 21.992c1.706 0 2.94-.777 3.515-2.332l-1.656-.794c-.322.794-.828 1.386-1.86 1.386c-1.2 0-1.808-.829-1.808-2.062v-1.606c0-1.234.608-2.079 1.809-2.079c.929 0 1.487.541 1.69 1.285l1.774-.795c-.524-1.386-1.69-2.23-3.464-2.23c-2.603 0-4.074 1.774-4.074 4.596c0 2.84 1.47 4.631 4.074 4.631m-10.561 0c3.313 0 4.546-1.572 4.546-5.037V9.992h-2.197v7.25c0 1.843-.642 2.773-2.332 2.773s-2.333-.93-2.333-2.772v-7.25H7v6.962c0 3.465 1.2 5.037 4.513 5.037"></svg:path><svg:path fill="currentColor" d="M2 4v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m26 24H4V4h24z"></svg:path>`,
})
export class CarbonUseCaseDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUseCaseUsageIcon],svg[carbon-use-case-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.074 21.992c1.706 0 2.94-.777 3.515-2.332l-1.656-.794c-.322.794-.828 1.386-1.86 1.386c-1.2 0-1.808-.829-1.808-2.062v-1.606c0-1.234.608-2.079 1.809-2.079c.929 0 1.487.541 1.69 1.285l1.774-.795c-.524-1.386-1.69-2.23-3.464-2.23c-2.603 0-4.074 1.774-4.074 4.596c0 2.84 1.47 4.631 4.074 4.631m-10.561 0c3.313 0 4.546-1.572 4.546-5.037V9.992h-2.197v7.25c0 1.843-.642 2.773-2.332 2.773s-2.333-.93-2.333-2.772v-7.25H7v6.962c0 3.465 1.2 5.037 4.513 5.037"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonUseCaseUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserIcon],svg[carbon-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"></svg:path>`,
})
export class CarbonUserIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserAccessIcon],svg[carbon-user-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m21 4a2 2 0 0 0-.512.074l-1.055-1.055a3.88 3.88 0 0 0 0-4.038l1.055-1.055a2.034 2.034 0 1 0-1.414-1.414L27.02 5.567a3.88 3.88 0 0 0-4.038 0l-1.055-1.055a2.034 2.034 0 1 0-1.414 1.414l1.055 1.055a3.88 3.88 0 0 0 0 4.038l-1.055 1.055a2.034 2.034 0 1 0 1.414 1.414l1.055-1.055a3.88 3.88 0 0 0 4.038 0l1.055 1.055A1.996 1.996 0 1 0 30 12m-7-3a2 2 0 1 1 2 2a2.003 2.003 0 0 1-2-2"></svg:path>`,
})
export class CarbonUserAccessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserAccessLockedIcon],svg[carbon-user-access-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8V5c0-2.206-1.794-4-4-4s-4 1.794-4 4v3c-1.103 0-2 .898-2 2v6c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-6c0-1.102-.897-2-2-2m-6-3c0-1.102.897-2 2-2s2 .898 2 2v3h-4zm-2 11v-6h8v6zm-4 14h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 1 0 0 10A5 5 0 0 0 9 8"></svg:path>`,
})
export class CarbonUserAccessLockedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserAccessUnlockedIcon],svg[carbon-user-access-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 1 0 0 10A5 5 0 0 0 9 8m19 0h-6V5c0-1.102.897-2 2-2s2 .898 2 2h2c0-2.206-1.794-4-4-4s-4 1.794-4 4v3c-1.103 0-2 .898-2 2v6c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-6c0-1.102-.897-2-2-2m0 8h-8v-6h8z"></svg:path>`,
})
export class CarbonUserAccessUnlockedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserActivityIcon],svg[carbon-user-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 23h-.021a1 1 0 0 1-.94-.726L20.87 11.19l-1.935 5.16A1 1 0 0 1 18 17h-4v-2h3.307l2.757-7.351a1 1 0 0 1 1.898.076l3.111 10.892l1.979-5.933A1 1 0 0 1 28 12h4v2h-3.28l-2.772 8.316A1 1 0 0 1 25 23m-10 7h-2v-7a3.003 3.003 0 0 0-3-3H6a3.003 3.003 0 0 0-3 3v7H1v-7a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM8 8a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonUserActivityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserAdminIcon],svg[carbon-user-admin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm3-13.82l-2.59-2.59L21 15l4 4l7-7l-1.41-1.41z"></svg:path>`,
})
export class CarbonUserAdminIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserAvatarIcon],svg[carbon-user-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.9 11.9 0 0 1-12 0m13.993-1.451A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0"></svg:path>`,
})
export class CarbonUserAvatarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserAvatarFilledIcon],svg[carbon-user-avatar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0M20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5"></svg:path><svg:path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.9 13.9 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3q.418.457.87.87q.14.124.28.242q.48.415.99.782c.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1q.51-.368.99-.782q.14-.119.28-.242q.451-.413.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0"></svg:path>`,
})
export class CarbonUserAvatarFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserAvatarFilledAltIcon],svg[carbon-user-avatar-filled-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m7.993 22.926A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0"></svg:path>`,
})
export class CarbonUserAvatarFilledAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserCertificationIcon],svg[carbon-user-certification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 10l1.593 3l3.407.414l-2.5 2.253L28 19l-3-1.875L22 19l.5-3.333l-2.5-2.253L23.5 13zm-3 20h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7zM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"></svg:path>`,
})
export class CarbonUserCertificationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserDataIcon],svg[carbon-user-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h2v8h-2zm-5-3h2v11h-2zm-5 5h2v6h-2zm-2 20h-2v-6a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v6H2v-6a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 9a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonUserDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserFavoriteIcon],svg[carbon-user-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.303 12a2.66 2.66 0 0 0-1.908.806l-.393.405l-.397-.405a2.66 2.66 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L25.002 21l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.66 2.66 0 0 0 27.303 12M2 30h2v-5a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v5h2v-5a7.01 7.01 0 0 0-7-7H9a7.01 7.01 0 0 0-7 7zM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"></svg:path>`,
})
export class CarbonUserFavoriteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserFavoriteAltIcon],svg[carbon-user-favorite-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.766 4.256A4.21 4.21 0 0 0 23 4.032a4.21 4.21 0 0 0-5.766.224a4.32 4.32 0 0 0 0 6.044l5.764 5.84l.002-.002l.002.001l5.764-5.839a4.32 4.32 0 0 0 0-6.044m-1.424 4.639l-4.34 4.397L23 13.29l-.002.002l-4.34-4.397a2.31 2.31 0 0 1 0-3.234a2.264 2.264 0 0 1 3.156 0l1.181 1.207l.005-.005l.005.005l1.18-1.207a2.264 2.264 0 0 1 3.157 0a2.31 2.31 0 0 1 0 3.234M16 30h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonUserFavoriteAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserFavoriteAltFilledIcon],svg[carbon-user-favorite-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.494 3a3.47 3.47 0 0 0-2.48 1.04l-.511.522l-.516-.523a3.48 3.48 0 0 0-4.96 0a3.59 3.59 0 0 0 0 5.025l5.476 5.543l5.472-5.543a3.59 3.59 0 0 0 0-5.025A3.47 3.47 0 0 0 26.494 3M16 30h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonUserFavoriteAltFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserFeedbackIcon],svg[carbon-user-feedback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h10c1.104 0 2 .897 2 2v6a2 2 0 0 1-2 2h-2.423l-1.731 3l-1.733-1l2.31-4H29V5H19v6h3v2h-3c-1.103 0-2-.896-2-2V5c0-1.103.897-2 2-2m-4 27h-2v-5a3.003 3.003 0 0 0-3-3H6a3.003 3.003 0 0 0-3 3v5H1v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM8 10a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 1 0 0 10A5 5 0 0 0 8 8"></svg:path>`,
})
export class CarbonUserFeedbackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserFilledIcon],svg[carbon-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30h20v-5a7.01 7.01 0 0 0-7-7h-6a7.01 7.01 0 0 0-7 7zM9 9a7 7 0 1 0 7-7a7 7 0 0 0-7 7"></svg:path>`,
})
export class CarbonUserFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserFollowIcon],svg[carbon-user-follow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 14h-4v-4h-2v4h-4v2h4v4h2v-4h4zM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"></svg:path>`,
})
export class CarbonUserFollowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserIdentificationIcon],svg[carbon-user-identification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h4a1 1 0 0 1 1 1v2h-6v-2a1 1 0 0 1 1-1"></svg:path><svg:circle cx="24" cy="8" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 18H18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2M18 4v12h12.001L30 4zm-3 26h-2v-4a2.947 2.947 0 0 0-3-3H6a2.947 2.947 0 0 0-3 3v4H1v-4a4.95 4.95 0 0 1 5-5h4a4.95 4.95 0 0 1 5 5zM8 11a3 3 0 0 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 0 0 0 10A5 5 0 0 0 8 9"></svg:path>`,
})
export class CarbonUserIdentificationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserMilitaryIcon],svg[carbon-user-military-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 13l-1.593 3l-3.407.414l2.5 2.253L22 22l3-1.875L28 22l-.5-3.333l2.5-2.253L26.5 16z"></svg:path><svg:path fill="currentColor" d="M21.414 13.414L25 9.834l3.587 3.582L30 12l-5-5l-5 5z"></svg:path><svg:path fill="currentColor" d="M21.414 8.414L25 4.834l3.587 3.582L30 7l-5-5l-5 5zM16 30h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonUserMilitaryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserMultipleIcon],svg[carbon-user-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-2v-5a5.006 5.006 0 0 0-5-5v-2a7.01 7.01 0 0 1 7 7zm-8 0h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7zM20 2v2a5 5 0 0 1 0 10v2a7 7 0 0 0 0-14m-8 2a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"></svg:path>`,
})
export class CarbonUserMultipleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserOnlineIcon],svg[carbon-user-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26" cy="16" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"></svg:path>`,
})
export class CarbonUserOnlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserProfileIcon],svg[carbon-user-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z"></svg:path>`,
})
export class CarbonUserProfileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserProfileAltIcon],svg[carbon-user-profile-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13h7v2h-7zm0-5h11v2H19zm0-5h11v2H19zm-8 27H7a2.006 2.006 0 0 1-2-2v-7a2.006 2.006 0 0 1-2-2v-6a2.947 2.947 0 0 1 3-3h6a2.947 2.947 0 0 1 3 3v6a2.006 2.006 0 0 1-2 2v7a2.006 2.006 0 0 1-2 2M6 12a.945.945 0 0 0-1 1v6h2v9h4v-9h2v-6a.945.945 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path>`,
})
export class CarbonUserProfileAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserRoleIcon],svg[carbon-user-role-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.07 21L22 15l6.07-6l1.43 1.41L24.86 15l4.64 4.59zM22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"></svg:path>`,
})
export class CarbonUserRoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserServiceIcon],svg[carbon-user-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.019 10.433A3.95 3.95 0 0 1 21 11c-2.206 0-4-1.794-4-4c0-.356.062-.694.15-1.023l2.436 2.437A2.002 2.002 0 0 0 23 7c0-.552-.224-1.052-.586-1.414l-2.437-2.437A4 4 0 0 1 21 3c2.206 0 4 1.794 4 4c0 .74-.215 1.424-.567 2.02L30 14.585L28.586 16zM16 30h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 1 0 0 10A5 5 0 0 0 9 8"></svg:path>`,
})
export class CarbonUserServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserServiceDeskIcon],svg[carbon-user-service-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25.334 11.95l1.206-1.206a1.18 1.18 0 0 1 1.259-.258l1.47.586A1.17 1.17 0 0 1 30 12.15v2.692A1.17 1.17 0 0 1 28.823 16l-.05-.001C18.478 15.358 16.4 6.636 16.007 3.297a1.17 1.17 0 0 1 1.032-1.29A1 1 0 0 1 17.175 2h2.6a1.16 1.16 0 0 1 1.076.732l.587 1.47a1.16 1.16 0 0 1-.253 1.26l-1.206 1.206s.694 4.7 5.355 5.282M16 30h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonUserServiceDeskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserSettingsIcon],svg[carbon-user-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 10V8h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 4.101V2h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 8H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V16h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 10zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m-7 18h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonUserSettingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserSimulationIcon],svg[carbon-user-simulation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 12l3.464 2l-1 1.732l-3.464-2zm0-4h4v2h-4zM7 13.732l-3.464 2l-1-1.732L6 12zM26 30h-2v-5a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v5H6v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7zM16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m9 2.268l3.464-2l1 1.732L26 6zM2 8h4v2H2zm4-2L2.536 4l1-1.732l3.464 2z"></svg:path>`,
})
export class CarbonUserSimulationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserSpeakerIcon],svg[carbon-user-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.415 19L27.7 17.285A3 3 0 0 0 28 16a3 3 0 1 0-3 3a3 3 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.01 7.01 0 0 0-7-7H9a7.01 7.01 0 0 0-7 7v5h28v-9.586A2 2 0 0 0 29.415 19M4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"></svg:path><svg:path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"></svg:path>`,
})
export class CarbonUserSpeakerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserSponsorIcon],svg[carbon-user-sponsor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31.83 13.366l-1-1.732L28 13.268V10h-2v3.268l-2.83-1.634l-1 1.732L25 15l-2.83 1.634l1 1.732L26 16.732V20h2v-3.268l2.83 1.634l1-1.732L29 15zM22 30h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7zM12 4a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0-2a7 7 0 1 0 0 14a7 7 0 0 0 0-14"></svg:path>`,
})
export class CarbonUserSponsorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUserXRayIcon],svg[carbon-user-x-ray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M28 9V7h-3V5h-2v2h-3v2h3v3h-3v2h3v2h2v-2h3v-2h-3V9z"></svg:path><svg:path fill="currentColor" d="M31 3H17a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-3 6h-3v3h3v2h-3v2h-2v-2h-3v-2h3V9h-3V7h3V5h2v2h3zM15 30h-2v-4a2.947 2.947 0 0 0-3-3H6a2.947 2.947 0 0 0-3 3v4H1v-4a4.95 4.95 0 0 1 5-5h4a4.95 4.95 0 0 1 5 5zM8 11a3 3 0 0 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 0 0 0 10A5 5 0 0 0 8 9"></svg:path>`,
})
export class CarbonUserXRayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUvIndexIcon],svg[carbon-uv-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 5.912l1.744 2.933l.783 1.315L20 9.749l3.121-.87l-.87 3.121l-.411 1.473l1.315.782L26.088 16l-2.933 1.744l-1.315.782l.411 1.474l.87 3.121l-3.12-.87l-1.474-.411l-.783 1.315L16 26.088l-1.744-2.933l-.783-1.315l-1.473.411l-3.12.87L9.748 20l.41-1.474l-1.314-.782L5.912 16l2.933-1.745l1.315-.782L9.749 12l-.87-3.12L12 9.748l1.474.41l.782-1.314zM16 2l-3.463 5.822L6 6l1.822 6.537L2 16l5.822 3.463L6 26l6.537-1.822L16 30l3.463-5.822L26 26l-1.822-6.537L30 16l-5.822-3.463L26 6l-6.537 1.822z"></svg:path>`,
})
export class CarbonUvIndexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUvIndexAltIcon],svg[carbon-uv-index-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 30H9a2.003 2.003 0 0 1-2-2v-8h2v8h4v-8h2v8a2.003 2.003 0 0 1-2 2m12-10h-1.75L21 29.031L18.792 20H17l2.5 10h3zM15 2h2v5h-2zm6.688 6.9l3.506-3.506l1.414 1.414l-3.506 3.506zM25 15h5v2h-5zM2 15h5v2H2zm3.395-8.192l1.414-1.414L10.315 8.9L8.9 10.314zM22 17h-2v-1a4 4 0 0 0-8 0v1h-2v-1a6 6 0 0 1 12 0Z"></svg:path>`,
})
export class CarbonUvIndexAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonUvIndexFilledIcon],svg[carbon-uv-index-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 30l-3.463-5.822L6 26l1.822-6.537L2 16l5.822-3.463L6 6l6.537 1.822L16 2l3.463 5.822L26 6l-1.822 6.537L30 16l-5.822 3.463L26 26l-6.537-1.822Z"></svg:path>`,
})
export class CarbonUvIndexFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonValueVariableIcon],svg[carbon-value-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28h-4v-2h4V6h-4V4h4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2m-6-17h-2l-2 3.897L14 11h-2l2.905 5L12 21h2l2-3.799L18 21h2l-2.902-5zM10 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4v2H6v20h4z"></svg:path>`,
})
export class CarbonValueVariableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVanIcon],svg[carbon-van-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.81 16l-7-9.56A1 1 0 0 0 22 6H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7.44a1 1 0 0 0-.19-.56M20 8h1.49l5.13 7H20ZM9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.14a4 4 0 0 0-7.72 0h-6.28a4 4 0 0 0-7.72 0H4V8h14v9h10Z"></svg:path>`,
})
export class CarbonVanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVegetationAssetIcon],svg[carbon-vegetation-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="21.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28.5 1a2.45 2.45 0 0 0-1.206.31l-8.31 4.298l.002.006a5.497 5.497 0 1 0 7.326 7.544l.003.002l4.4-8.5A2.5 2.5 0 0 0 28.5 1m-7 13a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m7.441-10.265l-2.384 4.606a5.53 5.53 0 0 0-2.899-2.899l4.595-2.377A.517.517 0 0 1 29 3.5a.5.5 0 0 1-.059.235M19 20h7v-2h-9v10a2.003 2.003 0 0 0 2 2h3v-2h-3zm-7 10H9v-2h3V15.566l-3.515-2.109l1.03-1.714l3.514 2.108A2.01 2.01 0 0 1 14 15.566V28a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M17.308 2.285A9.5 9.5 0 0 0 15 2a8.03 8.03 0 0 0-6.921 4.001L8 6a6 6 0 0 0 0 12v-2a4 4 0 0 1 0-8a3 3 0 0 1 .387.04l.863.113l.309-.667A6.02 6.02 0 0 1 15 4a7.5 7.5 0 0 1 1.731.215Z"></svg:path>`,
})
export class CarbonVegetationAssetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVegetationEncroachmentIcon],svg[carbon-vegetation-encroachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h7v-2h-9v10a2.003 2.003 0 0 0 2 2h3v-2h-3zm-7 10H9v-2h3V15.566l-3.515-2.109l1.03-1.714l3.514 2.108A2.01 2.01 0 0 1 14 15.566V28a2 2 0 0 1-2 2M30 6.41L28.59 5L25 8.59L21.41 5L20 6.41L23.59 10L20 13.59L21.41 15L25 11.41L28.59 15L30 13.59L26.41 10z"></svg:path><svg:path fill="currentColor" d="M17.308 2.285A9.5 9.5 0 0 0 15 2a8.03 8.03 0 0 0-6.921 4.001L8 6a6 6 0 0 0 0 12v-2a4 4 0 0 1 0-8a3 3 0 0 1 .387.04l.863.113l.309-.667A6.02 6.02 0 0 1 15 4c.608 0 1.182.085 1.731.215z"></svg:path>`,
})
export class CarbonVegetationEncroachmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVegetationHeightIcon],svg[carbon-vegetation-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 8l-5 5l1.41 1.41L12 11.83V28H9v2h3a2 2 0 0 0 2-2V11.83l2.59 2.58L18 13z"></svg:path><svg:path fill="currentColor" d="M22 30h-3a2 2 0 0 1-2-2V17h6a4 4 0 0 0 3.981-4.396A4.15 4.15 0 0 0 22.785 9h-1.583l-.177-.779C20.452 5.696 18.031 4 15 4a6.02 6.02 0 0 0-5.442 3.486l-.308.667l-.863-.114A3 3 0 0 0 8 8a4 4 0 0 0 0 8v2A6 6 0 0 1 8 6l.079.001A8.03 8.03 0 0 1 15 2c3.679 0 6.692 1.978 7.752 5h.033a6.164 6.164 0 0 1 6.187 5.414A6 6 0 0 1 23 19h-4v9h3z"></svg:path>`,
})
export class CarbonVegetationHeightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVehicleApiIcon],svg[carbon-vehicle-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 11a2 2 0 0 0-.825.182L24.834 9.51A3.5 3.5 0 0 0 25 8.5a3.5 3.5 0 0 0-.166-1.01l2.341-1.672A1.998 1.998 0 1 0 26 4c0 .064.013.124.019.187l-2.292 1.636A3.47 3.47 0 0 0 21.5 5a3.5 3.5 0 0 0 0 7a3.47 3.47 0 0 0 2.227-.823l2.292 1.637c-.006.062-.019.122-.019.186a2 2 0 1 0 2-2m-6.5-1A1.5 1.5 0 1 1 23 8.5a1.5 1.5 0 0 1-1.5 1.5m7.838 9.934l-7.732-2.779l-3.232-4.058A2.99 2.99 0 0 0 16.054 12H8.058a3 3 0 0 0-2.48 1.312l-2.712 3.983A5 5 0 0 0 2 20.107V26a1 1 0 0 0 1 1h2.142a3.98 3.98 0 0 0 7.716 0h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-5.125a1 1 0 0 0-.662-.941M9 28a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m14 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m5-3h-1.142a3.98 3.98 0 0 0-7.716 0h-6.284a3.98 3.98 0 0 0-7.716 0H4v-4.893a3 3 0 0 1 .52-1.688l2.711-3.981A1 1 0 0 1 8.058 14h7.996a1 1 0 0 1 .764.355l3.4 4.268a1 1 0 0 0 .444.318L28 21.578z"></svg:path>`,
})
export class CarbonVehicleApiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVehicleConnectedIcon],svg[carbon-vehicle-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.338 17.934l-7.732-2.779l-3.232-4.058A2.99 2.99 0 0 0 16.054 10H8.058a3 3 0 0 0-2.48 1.312l-2.712 3.983A5 5 0 0 0 2 18.107V26a1 1 0 0 0 1 1h2.142a3.98 3.98 0 0 0 7.716 0h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7.125a1 1 0 0 0-.662-.941M9 28a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m14 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m5-3h-1.142a3.98 3.98 0 0 0-7.716 0h-6.284a3.98 3.98 0 0 0-7.716 0H4v-6.893a3 3 0 0 1 .52-1.688l2.711-3.981A1 1 0 0 1 8.058 12h7.996a1 1 0 0 1 .764.355l3.4 4.268a1 1 0 0 0 .444.318L28 19.578zm-3-14h-2a2 2 0 0 0-2-2V7a4.005 4.005 0 0 1 4 4"></svg:path><svg:path fill="currentColor" d="M29 11h-2a6.007 6.007 0 0 0-6-6V3a8.01 8.01 0 0 1 8 8"></svg:path>`,
})
export class CarbonVehicleConnectedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVehicleInsightsIcon],svg[carbon-vehicle-insights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.338 17.934l-7.732-2.779l-3.232-4.058A2.99 2.99 0 0 0 16.054 10H8.058a3 3 0 0 0-2.48 1.312l-2.712 3.983A5 5 0 0 0 2 18.107V26a1 1 0 0 0 1 1h2.142a3.98 3.98 0 0 0 7.716 0h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7.125a1 1 0 0 0-.662-.941M9 28a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m14 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m5-3h-1.142a3.98 3.98 0 0 0-7.716 0h-6.284a3.98 3.98 0 0 0-7.716 0H4v-6.893a3 3 0 0 1 .52-1.688l2.711-3.981A1 1 0 0 1 8.058 12h7.996a1 1 0 0 1 .764.355l3.4 4.268a1 1 0 0 0 .444.318L28 19.578zm0-23h2v7h-2zm-4 4h2v3h-2zm-4-2h2v5h-2z"></svg:path>`,
})
export class CarbonVehicleInsightsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVehicleServicesIcon],svg[carbon-vehicle-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.338 17.934l-7.732-2.779l-3.232-4.058A2.99 2.99 0 0 0 16.054 10H8.058a3 3 0 0 0-2.48 1.312l-2.712 3.983A5 5 0 0 0 2 18.107V26a1 1 0 0 0 1 1h2.142a3.98 3.98 0 0 0 7.716 0h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7.125a1 1 0 0 0-.662-.941M9 28a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m14 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m5-3h-1.142a3.98 3.98 0 0 0-7.716 0h-6.284a3.98 3.98 0 0 0-7.716 0H4v-6.893a3 3 0 0 1 .52-1.688l2.711-3.981A1 1 0 0 1 8.058 12h7.996a1 1 0 0 1 .764.355l3.4 4.268a1 1 0 0 0 .444.318L28 19.578zM24.555 6a2 2 0 0 1 2-2H30a3.976 3.976 0 0 0-7.304 1H16v2h6.696A3.976 3.976 0 0 0 30 8h-3.445a2 2 0 0 1-2-2"></svg:path>`,
})
export class CarbonVehicleServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVersionIcon],svg[carbon-version-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2v2h10v15h2V4a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="currentColor" d="M11 7v2h10v15h2V9a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="currentColor" d="M6 12h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2m10 2l-10-.001V28h10Z"></svg:path>`,
})
export class CarbonVersionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVersionMajorIcon],svg[carbon-version-major-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.586 17.414L16 14.834l-2.588 2.582L12 16l4-4l4 4zm0-6L16 8.834l-2.588 2.582L12 10l4-4l4 4zm0 12L16 20.834l-2.588 2.582L12 22l4-4l4 4z"></svg:path><svg:path fill="currentColor" d="M1.586 17.414C1.196 17.024 1 16.512 1 16s.195-1.024.586-1.414l13-13C14.976 1.196 15.488 1 16 1s1.024.195 1.414.586l13 13c.39.39.586.902.586 1.414s-.195 1.024-.586 1.414l-13 13c-.39.39-.902.586-1.414.586s-1.024-.195-1.414-.586zM16 3L3 16l13 13l13-13z"></svg:path>`,
})
export class CarbonVersionMajorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVersionMinorIcon],svg[carbon-version-minor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.586 15.414L16 12.834l-2.588 2.582L12 14l4-4l4 4zm0 6L16 18.834l-2.588 2.582L12 20l4-4l4 4z"></svg:path><svg:path fill="currentColor" d="M1.586 17.414C1.196 17.024 1 16.512 1 16s.195-1.024.586-1.414l13-13C14.976 1.196 15.488 1 16 1s1.024.195 1.414.586l13 13c.39.39.586.902.586 1.414s-.195 1.024-.586 1.414l-13 13c-.39.39-.902.586-1.414.586s-1.024-.195-1.414-.586zM16 3L3 16l13 13l13-13z"></svg:path>`,
})
export class CarbonVersionMinorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVersionPatchIcon],svg[carbon-version-patch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.586 18.414L16 15.834l-2.588 2.582L12 17l4-4l4 4z"></svg:path><svg:path fill="currentColor" d="M1.586 17.414C1.196 17.024 1 16.512 1 16s.195-1.024.586-1.414l13-13C14.976 1.196 15.488 1 16 1s1.024.195 1.414.586l13 13c.39.39.586.902.586 1.414s-.195 1.024-.586 1.414l-13 13c-.39.39-.902.586-1.414.586s-1.024-.195-1.414-.586zM16 3L3 16l13 13l13-13z"></svg:path>`,
})
export class CarbonVersionPatchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVerticalViewIcon],svg[carbon-vertical-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h8V4zm24 26h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M20 4v24h8V4z"></svg:path>`,
})
export class CarbonVerticalViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVideoIcon],svg[carbon-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.06l5.42-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.58.81L23 19.94V24a2 2 0 0 1-2 2M4 8v16h17v-6a1 1 0 0 1 1.58-.81L28 21.06V10.94l-5.42 3.87A1 1 0 0 1 21 14V8Z"></svg:path>`,
})
export class CarbonVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVideoAddIcon],svg[carbon-video-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15h-4v-4h-2v4H8v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.057l5.419-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.581.814L23 19.944V24a2 2 0 0 1-2 2M4 8v16.001L21 24v-6a1 1 0 0 1 1.581-.813L28 21.057V10.943l-5.419 3.87A1 1 0 0 1 21 14V8Z"></svg:path>`,
})
export class CarbonVideoAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVideoChatIcon],svg[carbon-video-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h9v2H8zm0 5h5v2H8z"></svg:path><svg:path fill="currentColor" d="M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.057l5.419-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.581.814L23 19.944V24a2 2 0 0 1-2 2M4 8v16.001L21 24v-6a1 1 0 0 1 1.581-.813L28 21.057V10.943l-5.419 3.87A1 1 0 0 1 21 14V8Z"></svg:path>`,
})
export class CarbonVideoChatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVideoFilledIcon],svg[carbon-video-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.06l5.42-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.58.81L23 19.94V24a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonVideoFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVideoOffIcon],svg[carbon-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.46 8.11a1 1 0 0 0-1 .08L23 12.06v-1.62l7-7L28.56 2L2 28.56L3.44 30l4-4H21a2 2 0 0 0 2-2v-4.06l5.42 3.87A1 1 0 0 0 30 23V9a1 1 0 0 0-.54-.89M28 21.06l-5.42-3.87A1 1 0 0 0 21 18v6H9.44L21 12.44V14a1 1 0 0 0 1.58.81L28 10.94zM4 24V8h16V6H4a2 2 0 0 0-2 2v16z"></svg:path>`,
})
export class CarbonVideoOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVideoOffFilledIcon],svg[carbon-video-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.31 6H4a2 2 0 0 0-2 2v16a3 3 0 0 0 0 .29zm9.15 2.11a1 1 0 0 0-1 .08L23 12.06v-1.62l7-7L28.56 2L2 28.56L3.44 30l4-4H21a2 2 0 0 0 2-2v-4.06l5.42 3.87A1 1 0 0 0 30 23V9a1 1 0 0 0-.54-.89"></svg:path>`,
})
export class CarbonVideoOffFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVideoPlayerIcon],svg[carbon-video-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11v10l8-5z"></svg:path><svg:path fill="currentColor" d="M28 6H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2m0 18H4V8h24z"></svg:path>`,
})
export class CarbonVideoPlayerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonViewIcon],svg[carbon-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"></svg:path><svg:path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></svg:path>`,
})
export class CarbonViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonViewFilledIcon],svg[carbon-view-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5"></svg:path>`,
})
export class CarbonViewFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonViewMode1Icon],svg[carbon-view-mode-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h24v2H4zm0-7h24v2H4zM26 6v6H6V6zm0-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonViewMode1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonViewMode2Icon],svg[carbon-view-mode-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h24v2H4zm0-7h24v2H4zm8-13v6H6V6zm0-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m14 2v6h-6V6zm0-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonViewMode2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonViewNextIcon],svg[carbon-view-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.587 22L15 16.41V7h1.998v8.582L22 20.587z"></svg:path><svg:path fill="currentColor" d="M16 2a13.92 13.92 0 0 1 10 4.234V2h2v8h-8V8h4.922A11.982 11.982 0 1 0 28 16h2A14 14 0 1 1 16 2"></svg:path>`,
})
export class CarbonViewNextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonViewOffIcon],svg[carbon-view-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.24 22.51l1.43-1.42A14.06 14.06 0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.4 12.4 0 0 1 4 .72l1.55-1.56A14.7 14.7 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a16 16 0 0 0 4.18 6.17"></svg:path><svg:path fill="currentColor" d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33zm18.94-.07a16.4 16.4 0 0 0-5.74-7.44L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.1A15.3 15.3 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M20 16a4 4 0 0 1-6 3.44L19.44 14a4 4 0 0 1 .56 2m-4 9a13.05 13.05 0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54 0 0 1 28.93 16C26.9 21.07 21.3 25 16 25"></svg:path>`,
})
export class CarbonViewOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonViewOffFilledIcon],svg[carbon-view-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.94 15.66a16.4 16.4 0 0 0-5.73-7.45L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.09A15.4 15.4 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 22.5a6.46 6.46 0 0 1-3.83-1.26L14 19.43A4 4 0 0 0 19.43 14l1.81-1.81A6.49 6.49 0 0 1 16 22.5m-11.47-.69l5-5A7 7 0 0 1 9.5 16A6.51 6.51 0 0 1 16 9.5a7 7 0 0 1 .79.05l3.78-3.77A14.4 14.4 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a15.9 15.9 0 0 0 3.47 5.47"></svg:path>`,
})
export class CarbonViewOffFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVirtualColumnIcon],svg[carbon-virtual-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 11l1.414 1.414L23.828 15H30v2h-6.172l2.586 2.586L25 21l-5-5z"></svg:path><svg:path fill="currentColor" d="M30 28H20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10v2H20v20h10zm-18 0H2v-2h10V6H2V4h10a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="m7 11l-1.414 1.414L8.172 15H2v2h6.172l-2.586 2.586L7 21l5-5z"></svg:path>`,
})
export class CarbonVirtualColumnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVirtualColumnKeyIcon],svg[carbon-virtual-column-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17.414 22H12v-5.414l6.03-6.03A5 5 0 0 1 18 10a6 6 0 1 1 6 6a5 5 0 0 1-.556-.03ZM14 20h2.586l6.17-6.17l.518.095A4 4 0 0 0 24 14a4.05 4.05 0 1 0-3.925-3.273l.095.517l-6.17 6.17Z"></svg:path><svg:path fill="currentColor" d="M28 18v8H10V6h4V4H4a2.003 2.003 0 0 0-2 2v20a2.003 2.003 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2v-8ZM4 6h4v20H4Z"></svg:path>`,
})
export class CarbonVirtualColumnKeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVirtualDesktopIcon],svg[carbon-virtual-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16H11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4v2h-3v2h8v-2h-3v-2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-10 8v-6h10l.002 6Z"></svg:path><svg:path fill="currentColor" d="M25.822 10.124a10 10 0 0 0-19.644 0A7.491 7.491 0 0 0 7 24.974v-2a5.495 5.495 0 0 1 .123-10.954l.837-.056l.09-.834a7.998 7.998 0 0 1 15.9 0l.09.834l.837.056A5.495 5.495 0 0 1 25 22.975v2a7.491 7.491 0 0 0 .822-14.851"></svg:path>`,
})
export class CarbonVirtualDesktopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVirtualMachineIcon],svg[carbon-virtual-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13h-8a2.003 2.003 0 0 0-2 2v13a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2V15a2.003 2.003 0 0 0-2-2m0 2v3h-8v-3Zm0 5v3h-8v-3Zm-8 8v-3h8v3Z"></svg:path><svg:path fill="currentColor" d="M25.91 10.13a.12.12 0 0 1-.097-.095a10.01 10.01 0 0 0-7.923-7.853a10.003 10.003 0 0 0-11.704 7.853a.12.12 0 0 1-.097.095A7.502 7.502 0 0 0 7.491 25H8v-2h-.505a5.51 5.51 0 0 1-5.438-6.3a5.7 5.7 0 0 1 4.714-4.66l1.016-.184a.13.13 0 0 0 .105-.104l.18-.935a8.28 8.28 0 0 1 6.847-6.743a8 8 0 0 1 2.847.125a8.22 8.22 0 0 1 6.147 6.545l.194 1.008a.13.13 0 0 0 .105.104l1.057.191a5.8 5.8 0 0 1 3.101 1.54A5.505 5.505 0 0 1 24.508 23H24v2h.508a7.502 7.502 0 0 0 1.402-14.87"></svg:path>`,
})
export class CarbonVirtualMachineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVirtualPrivateCloudIcon],svg[carbon-virtual-private-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20v-3a4 4 0 0 0-8 0v3a2.003 2.003 0 0 0-2 2v6a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2v-6a2.003 2.003 0 0 0-2-2m-6-3a2 2 0 0 1 4 0v3h-4Zm-2 11v-6h8l.001 6Z"></svg:path><svg:path fill="currentColor" d="M25.829 10.115a10.01 10.01 0 0 0-7.939-7.933a10.003 10.003 0 0 0-11.72 7.933A7.502 7.502 0 0 0 7.491 25H8v-2h-.505a5.502 5.502 0 0 1-.97-10.916l1.35-.245l.259-1.345a8.01 8.01 0 0 1 15.731 0l.259 1.345l1.349.245A5.502 5.502 0 0 1 24.508 23H24v2h.508a7.502 7.502 0 0 0 1.32-14.885"></svg:path>`,
})
export class CarbonVirtualPrivateCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVirtualPrivateCloudAltIcon],svg[carbon-virtual-private-cloud-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.414 22L10 8.586V2H2v8h6.586L22 23.414V30h8v-8ZM8 8H4V4h4Zm20 20h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M30 6a3.992 3.992 0 0 0-7.858-1H13v2h9.142A4 4 0 0 0 25 9.858V19h2V9.858A3.996 3.996 0 0 0 30 6m-4 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2m-7 17H9.858A4 4 0 0 0 7 22.142V13H5v9.142A3.992 3.992 0 1 0 9.858 27H19zM6 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonVirtualPrivateCloudAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVisualRecognitionIcon],svg[carbon-visual-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23" cy="12" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 5H16.24A8 8 0 1 0 6 16.92V27a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 10a6 6 0 0 1 11.19-3H8v2h7.91a7 7 0 0 1 .09 1a7 7 0 0 1-.09 1H10v2h5.19A6 6 0 0 1 4 10m24 17H8l5-5l1.59 1.59a2 2 0 0 0 2.82 0L23 18l5 5Zm0-6.83l-3.59-3.59a2 2 0 0 0-2.82 0L16 22.17l-1.59-1.59a2 2 0 0 0-2.82 0L8 24.17v-6.43a8.2 8.2 0 0 0 2 .26a8 8 0 0 0 8-8a7.9 7.9 0 0 0-.59-3H28Z"></svg:path>`,
})
export class CarbonVisualRecognitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVlanIcon],svg[carbon-vlan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 17v-2H17v-4h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2v4H2v2h6v4H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2v-4h12v4h-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2v-4ZM13 4h6v5h-6Zm-1 24H6v-5h6Zm14 0h-6v-5h6Z"></svg:path>`,
})
export class CarbonVlanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVlanIbmIcon],svg[carbon-vlan-ibm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2M30 5a3 3 0 1 0-4 2.815V15h-9V9h-2v6H6V7.816a3 3 0 1 0-2 0V15a2 2 0 0 0 2 2h9v3h2v-3h9a2 2 0 0 0 2-2V7.816A3 3 0 0 0 30 5M5 4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m22 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:circle cx="16" cy="5" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonVlanIbmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVmdkDiskIcon],svg[carbon-vmdk-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18 16.414L19.414 15L23 18.585L21.585 20z"></svg:path><svg:circle cx="16" cy="13" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 6a7 7 0 0 0 0 14v-2a5 5 0 1 1 5-5h2a7 7 0 0 0-7-7"></svg:path><svg:path fill="currentColor" d="M26 2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 26H6V4h20Z"></svg:path>`,
})
export class CarbonVmdkDiskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVoiceActivateIcon],svg[carbon-voice-activate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30h-2v-3h-4a5.006 5.006 0 0 1-5-5v-1.28l-2.316-.771a1 1 0 0 1-.541-1.463L15 13.723V11a9.01 9.01 0 0 1 9-9h5v2h-5a7.01 7.01 0 0 0-7 7v3a1 1 0 0 1-.143.514L14.5 18.446l1.817.605A1 1 0 0 1 17 20v2a3.003 3.003 0 0 0 3 3h5a1 1 0 0 1 1 1Z"></svg:path><svg:path fill="currentColor" d="M19 12h4v2h-4zM9.333 25.217a7 7 0 0 1 0-10.434l1.333 1.49a5 5 0 0 0 0 7.453z"></svg:path><svg:path fill="currentColor" d="M6.4 28.8a11.002 11.002 0 0 1 0-17.6l1.2 1.6a9 9 0 0 0 0 14.401Z"></svg:path>`,
})
export class CarbonVoiceActivateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVoicemailIcon],svg[carbon-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10a6 6 0 0 0-4.46 10h-7.08A6 6 0 1 0 8 22h16a6 6 0 0 0 0-12M4 16a4 4 0 1 1 4 4a4 4 0 0 1-4-4m20 4a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></svg:path>`,
})
export class CarbonVoicemailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeBlockStorageIcon],svg[carbon-volume-block-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-7v-7h7zm-5-2h3v-3h-3zm5 11h-7v-7h7zm-5-2h3v-3h-3zm14-7h-7v-7h7zm-5-2h3v-3h-3zm5 11h-7v-7h7zm-5-2h3v-3h-3z"></svg:path><svg:path fill="currentColor" d="M8 28H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7.586A2 2 0 0 1 13 4.586L16.414 8H28a2 2 0 0 1 2 2v8h-2v-8H15.586l-4-4H4v20h4Z"></svg:path>`,
})
export class CarbonVolumeBlockStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeDownIcon],svg[carbon-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.1 10.66L23.58 12a6 6 0 0 1-.18 7.94l1.47 1.36a8 8 0 0 0 .23-10.59zM20 30a1 1 0 0 1-.71-.3L11.67 22H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0a1 1 0 0 1 .3.7v26a1 1 0 0 1-1 1M6 20h6a1.17 1.17 0 0 1 .79.3L19 26.57V5.43l-6.21 6.27a1.17 1.17 0 0 1-.79.3H6z"></svg:path>`,
})
export class CarbonVolumeDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeDownAltIcon],svg[carbon-volume-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15h10v2H22zm-4 15a1 1 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1M4 20h6a1.2 1.2 0 0 1 .794.297L17 26.568V5.432l-6.206 6.271A1.2 1.2 0 0 1 10 12H4z"></svg:path>`,
})
export class CarbonVolumeDownAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeDownFilledIcon],svg[carbon-volume-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.1 10.66L23.58 12a6 6 0 0 1-.18 7.94l1.47 1.36a8 8 0 0 0 .23-10.59zM20 30a1 1 0 0 1-.71-.3L11.67 22H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0a1 1 0 0 1 .3.7v26a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonVolumeDownFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeDownFilledAltIcon],svg[carbon-volume-down-filled-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15h10v2H22zm-4 15a1 1 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonVolumeDownFilledAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeFileStorageIcon],svg[carbon-volume-file-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25.707 17.293l-5-5A1 1 0 0 0 20 12h-6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V18a1 1 0 0 0-.293-.707M23.586 18H20v-3.586ZM14 28V14h4v4a2 2 0 0 0 2 2h4v8Z"></svg:path><svg:path fill="currentColor" d="M8 27H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.586A2 2 0 0 1 13 3.586L16.414 7H28a2 2 0 0 1 2 2v8h-2V9H15.586l-4-4H4v20h4Z"></svg:path>`,
})
export class CarbonVolumeFileStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeMuteIcon],svg[carbon-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 12.41L29.59 11L26 14.59L22.41 11L21 12.41L24.59 16L21 19.59L22.41 21L26 17.41L29.59 21L31 19.59L27.41 16zM18 30a1 1 0 0 1-.71-.3L9.67 22H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0a1 1 0 0 1 .3.7v26a1 1 0 0 1-1 1M4 20h6a1.17 1.17 0 0 1 .79.3L17 26.57V5.43l-6.21 6.27a1.17 1.17 0 0 1-.79.3H4z"></svg:path>`,
})
export class CarbonVolumeMuteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeMuteFilledIcon],svg[carbon-volume-mute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 12.41L29.59 11L26 14.59L22.41 11L21 12.41L24.59 16L21 19.59L22.41 21L26 17.41L29.59 21L31 19.59L27.41 16zM18 30a1 1 0 0 1-.71-.3L9.67 22H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0a1 1 0 0 1 .3.7v26a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonVolumeMuteFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeObjectStorageIcon],svg[carbon-volume-object-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 24a2.98 2.98 0 0 0-2.038.812l-4.003-2.403a2.05 2.05 0 0 0 0-.818l4.003-2.403a3.246 3.246 0 1 0-.92-1.779l-4.004 2.402a3 3 0 1 0 0 4.377l4.003 2.403A3 3 0 0 0 20 27a3 3 0 1 0 3-3m0-8a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-9 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 5a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M8 28H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7.586A2 2 0 0 1 13 4.586L16.414 8H28a2 2 0 0 1 2 2v8h-2v-8H15.586l-4-4H4v20h4Z"></svg:path>`,
})
export class CarbonVolumeObjectStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeUpIcon],svg[carbon-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.16 8.08l-1.53 1.29a10 10 0 0 1-.29 13.23l1.47 1.4a12 12 0 0 0 .35-15.88Z"></svg:path><svg:path fill="currentColor" d="M21.58 12a6 6 0 0 1-.18 7.94l1.47 1.36a8 8 0 0 0 .23-10.59zM18 30a1 1 0 0 1-.71-.3L9.67 22H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0a1 1 0 0 1 .3.7v26a1 1 0 0 1-1 1M4 20h6.08a1 1 0 0 1 .71.3L17 26.57V5.43l-6.21 6.27a1 1 0 0 1-.71.3H4z"></svg:path>`,
})
export class CarbonVolumeUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeUpAltIcon],svg[carbon-volume-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 15h-4v-4h-2v4h-4v2h4v4h2v-4h4zM18 30a1 1 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1M4 20h6a1.2 1.2 0 0 1 .794.297L17 26.568V5.432l-6.206 6.271A1.2 1.2 0 0 1 10 12H4z"></svg:path>`,
})
export class CarbonVolumeUpAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeUpFilledIcon],svg[carbon-volume-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.16 8.08l-1.53 1.29a10 10 0 0 1-.29 13.23l1.47 1.4a12 12 0 0 0 .35-15.88Z"></svg:path><svg:path fill="currentColor" d="M21.58 12a6 6 0 0 1-.18 7.94l1.47 1.36a8 8 0 0 0 .23-10.59zM18 30a1 1 0 0 1-.71-.3L9.67 22H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0a1 1 0 0 1 .3.7v26a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonVolumeUpFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeUpFilledAltIcon],svg[carbon-volume-up-filled-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 15h-4v-4h-2v4h-4v2h4v4h2v-4h4zM18 30a1 1 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonVolumeUpFilledAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVpnIcon],svg[carbon-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 23h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5h-4zm14 3L24.32 9H22v14h2V13l3.68 10H30V9h-2zM8 9L6 22L4 9H2l2.52 14h2.96L10 9z"></svg:path>`,
})
export class CarbonVpnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVpnConnectionIcon],svg[carbon-vpn-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 7a1.99 1.99 0 0 0-1.723 1H22a6 6 0 0 0-12 0H5.723a2 2 0 1 0 0 2H10v4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-2v-4h4.277A1.997 1.997 0 1 0 28 7M12 8a4 4 0 0 1 8 0v6h-8v-4h5V8Zm12 8v12H8V16Z"></svg:path>`,
})
export class CarbonVpnConnectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonVpnPolicyIcon],svg[carbon-vpn-policy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15a6 6 0 1 0-10 4.46V29l4-1.884L28 29v-9.54A5.98 5.98 0 0 0 30 15m-4 10.848l-2-.942l-2 .942V20.65a5.9 5.9 0 0 0 4 0ZM24 19a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M14 2a6.007 6.007 0 0 0-6 6v6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11v-2H6V16h9v-2h-5V8a4 4 0 0 1 7.92-.8l1.96-.4A6.02 6.02 0 0 0 14 2"></svg:path>`,
})
export class CarbonVpnPolicyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWalletIcon],svg[carbon-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M28 8H4V5h22V3H4a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 26V10h24v3h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8v3Zm24-11v6h-8v-6Z"></svg:path>`,
})
export class CarbonWalletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningIcon],svg[carbon-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22"></svg:path>`,
})
export class CarbonWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningAltIcon],svg[carbon-warning-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23m-1-11h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M29 30H3a1 1 0 0 1-.887-1.461l13-25a1 1 0 0 1 1.774 0l13 25A1 1 0 0 1 29 30M4.65 28h22.7l.001-.003L16.002 6.17h-.004L4.648 27.997Z"></svg:path>`,
})
export class CarbonWarningAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningAltFilledIcon],svg[carbon-warning-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16 26a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 26m-1.125-5h2.25v-9h-2.25Z"></svg:path><svg:path fill="currentColor" d="M16.002 6.171h-.004L4.648 27.997l.003.003h22.698l.002-.003ZM14.875 12h2.25v9h-2.25ZM16 26a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 26"></svg:path><svg:path fill="currentColor" d="M29 30H3a1 1 0 0 1-.887-1.461l13-25a1 1 0 0 1 1.774 0l13 25A1 1 0 0 1 29 30M4.65 28h22.7l.001-.003L16.002 6.17h-.004L4.648 27.997Z"></svg:path>`,
})
export class CarbonWarningAltFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningAltInvertedIcon],svg[carbon-warning-alt-inverted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 17M15 6h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M29.855 2.481a1 1 0 0 1 .032.98l-13 25a1 1 0 0 1-1.774 0l-13-25A1 1 0 0 1 3 2h26a1 1 0 0 1 .855.481M4.649 4.003L15.998 25.83h.004l11.35-21.826L27.348 4H4.651Z"></svg:path>`,
})
export class CarbonWarningAltInvertedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningAltInvertedFilledIcon],svg[carbon-warning-alt-inverted-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16 20a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 20m-1.125-5h2.25V6h-2.25Z"></svg:path><svg:path fill="currentColor" d="M27.35 4H4.65l-.001.003L15.998 25.83h.004l11.35-21.826ZM14.874 6h2.25v9h-2.25ZM16 20a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 20"></svg:path><svg:path fill="currentColor" d="M29.855 2.481a1 1 0 0 1 .032.98l-13 25a1 1 0 0 1-1.774 0l-13-25A1 1 0 0 1 3 2h26a1 1 0 0 1 .855.481M4.649 4.003L15.998 25.83h.004l11.35-21.826L27.348 4H4.651Z"></svg:path>`,
})
export class CarbonWarningAltInvertedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningDiamondIcon],svg[carbon-warning-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M15 9h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M16 30a2.08 2.08 0 0 1-1.473-.61L2.609 17.474a2.085 2.085 0 0 1 0-2.946L14.527 2.609a2.085 2.085 0 0 1 2.946 0l11.918 11.918a2.085 2.085 0 0 1 0 2.946L17.473 29.39c-.406.407-.94.61-1.473.61m0-26a.08.08 0 0 0-.06.024L4.025 15.94a.084.084 0 0 0 0 .118L15.94 27.976a.084.084 0 0 0 .118 0L27.976 16.06a.084.084 0 0 0 0-.118L16.06 4.024a.08.08 0 0 0-.06-.025"></svg:path>`,
})
export class CarbonWarningDiamondIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningFilledIcon],svg[carbon-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m-1.1 6h2.2v11h-2.2zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25"></svg:path>`,
})
export class CarbonWarningFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningHexIcon],svg[carbon-warning-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 21M15 8h2v10h-2z"></svg:path><svg:path fill="currentColor" d="M23 29H9a1 1 0 0 1-.864-.496l-7-12a1 1 0 0 1 0-1.008l7-12A1 1 0 0 1 9 3h14a1 1 0 0 1 .864.496l7 12a1 1 0 0 1 0 1.008l-7 12A1 1 0 0 1 23 29M9.574 27h12.852l6.416-11l-6.416-11H9.574L3.158 16Z"></svg:path>`,
})
export class CarbonWarningHexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningHexFilledIcon],svg[carbon-warning-hex-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M14.875 8h2.25v11h-2.25ZM16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25"></svg:path><svg:path fill="currentColor" d="M30.85 15.449L23.888 3.532A1.07 1.07 0 0 0 22.964 3H9.036a1.07 1.07 0 0 0-.923.532L1.15 15.45a1.09 1.09 0 0 0 0 1.102l6.964 11.917a1.07 1.07 0 0 0 .923.532h13.928a1.07 1.07 0 0 0 .923-.532L30.85 16.55a1.09 1.09 0 0 0 0-1.102M14.876 8h2.25v11h-2.25ZM16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25"></svg:path>`,
})
export class CarbonWarningHexFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningMultipleIcon],svg[carbon-warning-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 23h-4v-2h2.382L19.5 5.236l-1.105 2.211l-1.79-.894l2-4c.17-.339.532-.553.895-.553s.725.214.894.553l9.5 19A1 1 0 0 1 29 23"></svg:path><svg:circle cx="14" cy="25" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 15h2v7h-2z"></svg:path><svg:path fill="currentColor" d="M25 30H3a1 1 0 0 1-.886-1.464l11-21c.173-.33.53-.536.886-.536s.713.206.886.536l11 21A1 1 0 0 1 25 30M4.653 28h18.694L14 10.155z"></svg:path>`,
})
export class CarbonWarningMultipleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningOtherIcon],svg[carbon-warning-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20h12v2H18zm0 4h12v2H18zm0 4h12v2H18zm-4-10a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 14 18M13 7h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M14 4a10.01 10.01 0 0 1 10 10h2a12 12 0 1 0-12 12v-2a10 10 0 0 1 0-20"></svg:path>`,
})
export class CarbonWarningOtherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningSquareIcon],svg[carbon-warning-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 20M15 9h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M6 6v20h20.001L26 6Z"></svg:path>`,
})
export class CarbonWarningSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWarningSquareFilledIcon],svg[carbon-warning-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.002 4H5.998A2 2 0 0 0 4 5.998v20.004A2 2 0 0 0 5.998 28h20.004A2 2 0 0 0 28 26.002V5.998A2 2 0 0 0 26.002 4M14.875 8h2.25v10h-2.25ZM16 24a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 24"></svg:path><svg:path fill="none" d="M14.875 8h2.25v10h-2.25ZM16 24a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 24"></svg:path>`,
})
export class CarbonWarningSquareFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWatchIcon],svg[carbon-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8h-1V2h-2v6h-6V2h-2v6h-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1v6h2v-6h6v6h2v-6h1a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M10 22V10h12v12zm15-8h2v4h-2z"></svg:path>`,
})
export class CarbonWatchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWatsonIcon],svg[carbon-watson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.74 9.49A11.4 11.4 0 0 0 16 8a.76.76 0 1 0 0 1.51a10 10 0 0 1 1.91.21c-2.26 1.08-4.76 3.58-6.73 7a22.5 22.5 0 0 0-2 4.44A9.6 9.6 0 0 1 7 17.22a3.43 3.43 0 0 1 .28-2.66c.79-1.37 2.44-2.15 4.63-2.2a.76.76 0 0 0 .74-.78a.75.75 0 0 0-.78-.74c-2.68.04-4.77 1.08-5.87 2.9a4.84 4.84 0 0 0-.44 3.79a12 12 0 0 0 3.2 5.22A11.4 11.4 0 0 0 8.52 26a10 10 0 0 1-2-3.48a.75.75 0 0 0-.95-.52a.76.76 0 0 0-.49 1a11.45 11.45 0 0 0 5.18 6.38A11.4 11.4 0 0 0 16 30.92a11.7 11.7 0 0 0 3-.39a11.48 11.48 0 0 0 2.77-21zm-3.16 19.57a9.9 9.9 0 0 1-7.56-1c-.86-.49-1.21-2-.94-4a19 19 0 0 0 2.48 1.72a13.9 13.9 0 0 0 6.93 2a11 11 0 0 0 2.42-.28a9.8 9.8 0 0 1-3.33 1.56m6.06-4.66c-2 2-6.66 2.74-11.32.05a17.4 17.4 0 0 1-2.89-2.12a21 21 0 0 1 2.08-4.91c2.94-5.08 6.83-7.57 8.47-6.62a10 10 0 0 1 3.66 13.6M4.16 11.72L1.14 10a.76.76 0 1 0-.76 1.31L3.4 13a.86.86 0 0 0 .38.1a.77.77 0 0 0 .66-.38a.76.76 0 0 0-.28-1m4.13-4.13a.74.74 0 0 0 .65.41a.75.75 0 0 0 .38-.1a.76.76 0 0 0 .28-1l-1.74-3a.76.76 0 0 0-1-.27a.75.75 0 0 0-.28 1zM16 6.08a.76.76 0 0 0 .76-.76V1.83a.76.76 0 0 0-1.52 0v3.49a.76.76 0 0 0 .76.76m6.68 1.79a.75.75 0 0 0 1-.28l1.75-3a.75.75 0 0 0-.28-1a.76.76 0 0 0-1 .27l-1.74 3a.76.76 0 0 0 .27 1.01m9.22 2.38a.76.76 0 0 0-1-.27l-3 1.74a.76.76 0 0 0-.28 1a.77.77 0 0 0 .66.38a.86.86 0 0 0 .38-.1l3-1.75a.76.76 0 0 0 .24-1"></svg:path>`,
})
export class CarbonWatsonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWatsonMachineLearningIcon],svg[carbon-watson-machine-learning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 26h-2v-8.24l-3.23 3.88a1 1 0 0 1-1.54 0L12 17.76V26h-2V15a1 1 0 0 1 .66-.94a1 1 0 0 1 1.11.3L16 19.44l4.23-5.08a1 1 0 0 1 1.11-.3A1 1 0 0 1 22 15zM4.16 14.65l-3-1.75a.76.76 0 1 0-.76 1.32l3 1.78a.76.76 0 1 0 .76-1.31zm4.13-4.13a.73.73 0 0 0 1 .27a.75.75 0 0 0 .28-1l-1.74-3a.76.76 0 1 0-1.32.76zM16 9a.76.76 0 0 0 .76-.76V4.76a.76.76 0 1 0-1.52 0v3.49A.76.76 0 0 0 16 9m6.68 1.79a.75.75 0 0 0 .37.11a.76.76 0 0 0 .66-.38l1.75-3a.76.76 0 0 0-1.32-.76l-1.74 3a.75.75 0 0 0 .28 1.03m9.22 2.39a.76.76 0 0 0-1-.28l-3 1.75a.76.76 0 0 0 .7 1.35l3-1.74a.77.77 0 0 0 .3-1.08"></svg:path>`,
})
export class CarbonWatsonMachineLearningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWatsonxIcon],svg[carbon-watsonx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.312 22.919A15.04 15.04 0 0 0 31 16c0-8.271-6.729-15-15-15a14.9 14.9 0 0 0-9.205 3.167A2 2 0 1 0 8 6c0-.077-.014-.15-.022-.224A12.91 12.91 0 0 1 18.829 3.32c-3.394.926-5.9 4.028-5.9 7.711c0 .79.118 1.55.333 2.27a8 8 0 0 0-2.192-.33c-3.704 0-6.82 2.534-7.726 5.957A13 13 0 0 1 3 16c0-2.116.492-4.133 1.462-5.995L2.688 9.08A15.04 15.04 0 0 0 1 16c0 8.27 6.729 15 15 15a14.9 14.9 0 0 0 9.205-3.167A2 2 0 1 0 24 26c0 .077.014.15.022.224c-1.08.85-2.277 1.51-3.549 1.977A4.9 4.9 0 0 0 21 26c0-1.63-.796-3.067-2.007-3.98a8 8 0 0 0 .077-1.05c0-.786-.126-1.54-.338-2.258c.7.201 1.435.318 2.198.318c3.704 0 6.82-2.534 7.726-5.957c.218.942.344 1.919.344 2.927c0 2.116-.492 4.133-1.462 5.995zm-17.793 5.265a13.06 13.06 0 0 1-4.833-3.134a5.96 5.96 0 0 1-1.616-4.08c0-3.308 2.692-6 6-6s6 2.691 6 6c0 .05-.012.097-.013.147A5 5 0 0 0 16 21c-2.757 0-5 2.243-5 5c0 .786.192 1.523.519 2.184M18.999 26c0 1.654-1.345 3-3 3s-3-1.346-3-3s1.347-3 3-3s3 1.346 3 3m1.93-8.97c-3.307 0-6-2.692-6-6s2.693-6 6-6c1.43 0 2.743.504 3.775 1.342q.454.41.868.862a5.97 5.97 0 0 1 1.358 3.796c0 3.308-2.692 6-6 6"></svg:path>`,
})
export class CarbonWatsonxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWatsonxAiIcon],svg[carbon-watsonx-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 24a2 2 0 0 0-2 2c0 .076.014.149.023.223A12.9 12.9 0 0 1 16 29c-4.262 0-8-3.972-8-8.5c0-4.687 3.813-8.5 8.5-8.5h.5v-2h-.5C10.71 10 6 14.71 6 20.5c0 1.884.53 3.69 1.437 5.257C4.724 23.371 3 19.886 3 16c0-2.115.492-4.133 1.462-5.996l-1.774-.923A15.05 15.05 0 0 0 1 16c0 8.271 6.729 15 15 15c3.374 0 6.582-1.12 9.205-3.166A2 2 0 1 0 26 24"></svg:path><svg:path fill="currentColor" d="M13 20v2h-2v-2zm8-10v2h-2v-2z"></svg:path><svg:path fill="currentColor" d="M16 1c-3.374 0-6.582 1.12-9.205 3.166A2 2 0 1 0 8 6c0-.076-.014-.149-.023-.223A12.9 12.9 0 0 1 16 3c4.262 0 8 3.972 8 8.5c0 4.687-3.813 8.5-8.5 8.5H15v2h.5C21.29 22 26 17.29 26 11.5c0-1.885-.532-3.692-1.44-5.26C27.275 8.626 29 12.112 29 16c0 2.115-.492 4.133-1.462 5.996l1.774.923A15.05 15.05 0 0 0 31 16c0-8.271-6.729-15-15-15"></svg:path>`,
})
export class CarbonWatsonxAiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWatsonxDataIcon],svg[carbon-watsonx-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 24a2 2 0 0 0-2 2c0 .076.014.149.023.223A12.9 12.9 0 0 1 16 29c-2.775 0-5.343-.881-7.457-2.368c.258.026.517.045.78.045C13.556 26.677 17 23.233 17 19h-2a5.683 5.683 0 0 1-5.677 5.677a5.66 5.66 0 0 1-5.132-3.273q-.204-.445-.373-.91c.66.323 1.4.506 2.182.506c2.757 0 5-2.243 5-5v-2H9v2c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-2.115.492-4.133 1.462-5.996l-1.774-.923A15.05 15.05 0 0 0 1 16c0 8.271 6.729 15 15 15c3.374 0 6.582-1.12 9.205-3.166A2 2 0 1 0 26 24"></svg:path><svg:path fill="currentColor" d="M23 21v2h-2v-2zm-6-6v2h-2v-2zm-8-4V9h2v2z"></svg:path><svg:path fill="currentColor" d="M16 1c-3.374 0-6.582 1.12-9.205 3.166A2 2 0 1 0 8 6c0-.076-.014-.149-.023-.223A12.9 12.9 0 0 1 16 3c2.77 0 5.336.878 7.448 2.361a8 8 0 0 0-.755-.038c-4.233 0-7.676 3.444-7.676 7.677h2a5.683 5.683 0 0 1 5.676-5.677a5.64 5.64 0 0 1 4.919 2.865q.322.643.573 1.324A4.96 4.96 0 0 0 26 11c-2.757 0-5 2.243-5 5v2h2v-2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 2.115-.492 4.133-1.462 5.996l1.775.923A15.05 15.05 0 0 0 31 16c0-8.271-6.729-15-15-15"></svg:path>`,
})
export class CarbonWatsonxDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWatsonxGovernanceIcon],svg[carbon-watsonx-governance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 24a2 2 0 0 0-2 2c0 .076.014.149.023.223A12.9 12.9 0 0 1 16 29C8.832 29 3 23.169 3 16c0-2.115.492-4.133 1.462-5.996l-1.774-.923A15.05 15.05 0 0 0 1 16c0 8.271 6.729 15 15 15c3.374 0 6.582-1.12 9.205-3.166A2 2 0 1 0 26 24"></svg:path><svg:path fill="currentColor" d="M13 23v2h-2v-2zm0-14v2h-2V9zm0 7v2h-2v-2z"></svg:path><svg:path fill="currentColor" d="M16 1c-3.374 0-6.582 1.12-9.205 3.166A2 2 0 1 0 8 6c0-.076-.014-.149-.023-.223A12.9 12.9 0 0 1 16 3c1.654 0 3 1.346 3 3s-1.346 3-3 3h-1v2h1c2.757 0 5-2.243 5-5q-.002-.36-.053-.706A6.47 6.47 0 0 1 22.5 9.5c0 3.584-2.916 6.5-6.5 6.5h-1v2h1c4.687 0 8.5-3.813 8.5-8.5c0-.765-.111-1.504-.302-2.21A9.94 9.94 0 0 1 26 13c0 5.514-4.486 10-10 10h-1v2h1c6.617 0 12-5.383 12-12c0-.9-.106-1.774-.294-2.618A12.9 12.9 0 0 1 29 16c0 2.115-.492 4.133-1.462 5.996l1.774.923A15.05 15.05 0 0 0 31 16c0-8.271-6.729-15-15-15"></svg:path>`,
})
export class CarbonWatsonxGovernanceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWaveDirectionIcon],svg[carbon-wave-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 30h-5a7.01 7.01 0 0 1-7-7a6.68 6.68 0 0 1 2.024-4.697A6.7 6.7 0 0 0 10.01 18C5.043 18.047 4 24.551 4 30H2c0-11.51 4.345-13.966 7.99-14a10.1 10.1 0 0 1 4.48 1.117a1 1 0 0 1 .06 1.73A4.877 4.877 0 0 0 17 28h5Z"></svg:path><svg:path fill="currentColor" d="M18 24v-2a8 8 0 1 0-8-8H8a10 10 0 1 1 10 10"></svg:path><svg:circle cx="18" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m23 17.586l-2.3-2.3A3 3 0 0 0 21 14a3.003 3.003 0 0 0-3-3a2.96 2.96 0 0 0-1.285.3l-2.3-2.3L13 10.414l2.3 2.3A3 3 0 0 0 15 14a3.003 3.003 0 0 0 3 3a2.96 2.96 0 0 0 1.285-.3l2.3 2.3ZM17 14a1 1 0 1 1 1 1a1 1 0 0 1-1-1"></svg:path>`,
})
export class CarbonWaveDirectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWaveHeightIcon],svg[carbon-wave-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2h6v2h-6zm0 6h4v2h-4zm0 6h6v2h-6zm0 6h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M30 28h-6a10.035 10.035 0 0 1-6.927-17.262a12 12 0 0 0-4.08-.738a6.9 6.9 0 0 0-6.03 3.42C4.997 16.435 4 21.34 4 28H2c0-7.054 1.106-12.327 3.287-15.673A8.9 8.9 0 0 1 12.994 8H13a14.76 14.76 0 0 1 6.461 1.592a1 1 0 0 1 .087 1.722A8.025 8.025 0 0 0 24 26h6Z"></svg:path>`,
})
export class CarbonWaveHeightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWavePeriodIcon],svg[carbon-wave-period-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 30h-5a7.01 7.01 0 0 1-7-7a6.68 6.68 0 0 1 2.024-4.697A6.8 6.8 0 0 0 10.01 18C5.043 18.047 4 24.551 4 30H2c0-11.51 4.345-13.966 7.99-14a10.1 10.1 0 0 1 4.48 1.117a1 1 0 0 1 .06 1.73A4.877 4.877 0 0 0 17 28h5zM17 8h2v8h-2z"></svg:path><svg:path fill="currentColor" d="M28 5.414L26.586 4l-2.262 2.262A9.95 9.95 0 0 0 19 4.05V2h-2v2.05A10.013 10.013 0 0 0 8 14h2a8 8 0 1 1 8 8v2a9.993 9.993 0 0 0 7.738-16.324Z"></svg:path>`,
})
export class CarbonWavePeriodIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWeatherFrontColdIcon],svg[carbon-weather-front-cold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.166 2a13.03 13.03 0 0 0-12.542 9.58l-1.177 4.315A11.024 11.024 0 0 1 3.835 24H2v2h1.834c.298 0 .592-.017.886-.037l7.929 2.974A1 1 0 0 0 14 28v-6.908a13 13 0 0 0 .912-1.313l6.363-1.818a1 1 0 0 0 .506-1.586l-3.997-4.995a11 11 0 0 1 1.152-2.347l5.748 1.916A1 1 0 0 0 26 10V4.225A11 11 0 0 1 28.166 4H30V2zM8.336 25.183A13 13 0 0 0 12 23.094v3.463zm7.74-7.816c.11-.31.213-.625.3-.946l.733-2.685l2.171 2.715zM24 8.612l-3.741-1.247A11.1 11.1 0 0 1 24 4.831zM10 4v4.586L3.414 2L2 3.414L8.586 10H4v2h8V4z"></svg:path>`,
})
export class CarbonWeatherFrontColdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWeatherFrontStationaryIcon],svg[carbon-weather-front-stationary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.166 2a13 13 0 0 0-8.408 3.107a3.995 3.995 0 1 0-4.175 6.621l-1.136 4.167q-.11.397-.25.781a3.986 3.986 0 0 0-5.154 6.006A10.95 10.95 0 0 1 3.835 24H2v2h1.834c.298 0 .592-.017.886-.037l7.929 2.974A1 1 0 0 0 14 28v-6.908a13 13 0 0 0 .912-1.313l6.363-1.818a1 1 0 0 0 .506-1.586l-3.997-4.995a11 11 0 0 1 1.152-2.347l5.748 1.916A1 1 0 0 0 26 10V4.225A11 11 0 0 1 28.166 4H30V2zM17 6a1.98 1.98 0 0 1 1.324.53a13 13 0 0 0-2.084 3.318A1.999 1.999 0 0 1 17 6m-7 14a1.988 1.988 0 0 1 3.337-1.472a11 11 0 0 1-2.595 3.015A2 2 0 0 1 10 20m-1.665 5.183A13 13 0 0 0 12 23.094v3.463zm7.74-7.816q.168-.465.302-.946l.732-2.685l2.171 2.715zM24 8.612l-3.741-1.247A11.1 11.1 0 0 1 24 4.831zM22 22v2h4.586L22 28.586L23.414 30L28 25.414V30h2v-8zM2 2v2h4.586L2 8.586L3.414 10L8 5.414V10h2V2z"></svg:path>`,
})
export class CarbonWeatherFrontStationaryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWeatherFrontWarmIcon],svg[carbon-weather-front-warm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.166 2a13.03 13.03 0 0 0-12.542 9.58l-1.177 4.315A11.024 11.024 0 0 1 3.835 24H2v2h1.834a13 13 0 0 0 3.47-.482a3.998 3.998 0 1 0 6.581-4.286a13 13 0 0 0 1.62-2.527a3.994 3.994 0 1 0 2.378-7.6a11 11 0 0 1 1.725-3.01a3.983 3.983 0 0 0 6.906-3.964A11 11 0 0 1 28.166 4H30V2zM11 26a2 2 0 0 1-1.812-1.165a13 13 0 0 0 3.297-2.143A1.977 1.977 0 0 1 11 26m8-11a1.993 1.993 0 0 1-2.759 1.847c.044-.143.096-.282.136-.426l.924-3.391A2 2 0 0 1 19 15m6-9a1.994 1.994 0 0 1-3.901.59a11 11 0 0 1 3.362-1.94A2 2 0 0 1 25 6M10 4v4.586L3.414 2L2 3.414L8.586 10H4v2h8V4z"></svg:path>`,
})
export class CarbonWeatherFrontWarmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWeatherStationIcon],svg[carbon-weather-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 28V17h1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v11H2v2h28v-2Zm-3-17h4l.002 4H14Z"></svg:path><svg:path fill="currentColor" d="M9.333 18.217a7 7 0 0 1 0-10.434l1.333 1.49a5 5 0 0 0 0 7.453zm13.334 0l-1.334-1.49a5 5 0 0 0 0-7.454l1.334-1.49a7 7 0 0 1 0 10.434"></svg:path><svg:path fill="currentColor" d="M6.4 21.8a11.002 11.002 0 0 1 0-17.6l1.2 1.6a9 9 0 0 0 0 14.401zm19.2 0l-1.2-1.6a9 9 0 0 0 0-14.401l1.2-1.6a11.002 11.002 0 0 1 0 17.601"></svg:path>`,
})
export class CarbonWeatherStationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWebServicesClusterIcon],svg[carbon-web-services-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 26a1 1 0 0 1-.707-.293l-3-3a.997.997 0 0 1 0-1.414l3-3a.996.996 0 0 1 1.414 0l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 16 26m-1.586-4L16 23.586L17.586 22L16 20.414zM22 20a1 1 0 0 1-.707-.293l-3-3a.997.997 0 0 1 0-1.414l3-3a.996.996 0 0 1 1.414 0l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 22 20m-1.586-4L22 17.586L23.586 16L22 14.414zM16 14a1 1 0 0 1-.707-.293l-3-3a.997.997 0 0 1 0-1.414l3-3a.996.996 0 0 1 1.414 0l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 16 14m-1.586-4L16 11.586L17.586 10L16 8.414zM10 20a1 1 0 0 1-.707-.293l-3-3a.997.997 0 0 1 0-1.414l3-3a.996.996 0 0 1 1.414 0l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 10 20m-1.586-4L10 17.586L11.586 16L10 14.414z"></svg:path><svg:path fill="currentColor" d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"></svg:path>`,
})
export class CarbonWebServicesClusterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWebServicesContainerIcon],svg[carbon-web-services-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z"></svg:path><svg:path fill="currentColor" d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"></svg:path>`,
})
export class CarbonWebServicesContainerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWebServicesDefinitionIcon],svg[carbon-web-services-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h2v2h-2zm0-4h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M21 23H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1m-9-2h8V11h-8z"></svg:path><svg:path fill="currentColor" d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"></svg:path>`,
})
export class CarbonWebServicesDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWebServicesServiceIcon],svg[carbon-web-services-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18h-2v-7h-7V9h8a1 1 0 0 1 1 1z"></svg:path><svg:path fill="currentColor" d="M18 23h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1m-7-2h6v-6h-6z"></svg:path><svg:path fill="currentColor" d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"></svg:path>`,
})
export class CarbonWebServicesServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWebServicesTaskIcon],svg[carbon-web-services-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 20.18l-1.59-1.59L17 20l3 3l5-5l-1.41-1.41z"></svg:path><svg:path fill="currentColor" d="M15 23h-4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6h-2v-5h-8v10h3z"></svg:path><svg:path fill="currentColor" d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"></svg:path>`,
})
export class CarbonWebServicesTaskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWebServicesTaskDefinitionVersionIcon],svg[carbon-web-services-task-definition-version-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 15h-1.75L20 22.031l-2.208-7.03H16L18.5 23h3z"></svg:path><svg:path fill="currentColor" d="M16 23h-5a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h-2v-3h-8v10h4z"></svg:path><svg:path fill="currentColor" d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"></svg:path>`,
})
export class CarbonWebServicesTaskDefinitionVersionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWebhookIcon],svg[carbon-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 26a3 3 0 1 0-2.816-4H13v1a5 5 0 1 1-5-5v-2a7 7 0 1 0 6.929 8h6.255A2.99 2.99 0 0 0 24 26"></svg:path><svg:path fill="currentColor" d="M24 16a7 7 0 0 0-2.57.487l-3.166-5.54a3.047 3.047 0 1 0-1.732 1l4.119 7.208l.868-.498a5 5 0 1 1-1.85 6.842l-1.732 1.002A7 7 0 1 0 24 16"></svg:path><svg:path fill="currentColor" d="M8.532 20.054a3.03 3.03 0 1 0 1.733.998l3.625-6.344l.498-.868l-.868-.497a5 5 0 1 1 6.812-1.844l1.731 1.002a7 7 0 1 0-10.346 2.036c-.457.742-1.102 1.871-2.073 3.572Z"></svg:path>`,
})
export class CarbonWebhookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWebsheetIcon],svg[carbon-websheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonWebsheetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWheatIcon],svg[carbon-wheat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v2.586l-4 4V1h-2v8.586l-4-4V3H9v16a7.004 7.004 0 0 0 6 6.92V30h2v-4.08A7.004 7.004 0 0 0 23 19V3Zm-6 20.899A5.01 5.01 0 0 1 11 19v-2.586l4 4Zm0-6.313l-4-4V8.414l4 4Zm2-5.172l4-4v5.172l-4 4Zm0 11.485v-3.485l4-4V19a5.01 5.01 0 0 1-4 4.899"></svg:path>`,
})
export class CarbonWheatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWhitePaperIcon],svg[carbon-white-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41zM9 17h7v2H9zm0-5h12v2H9zm0-5h12v2H9z"></svg:path><svg:path fill="currentColor" d="M16 30H6c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h18c1.103 0 2 .897 2 2v15h-2V4H6v24h10z"></svg:path>`,
})
export class CarbonWhitePaperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWifiIcon],svg[carbon-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="25" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m10.47 19.233l1.414 1.413a5.97 5.97 0 0 1 8.223-.009l1.413-1.413a7.963 7.963 0 0 0-11.05.01Z"></svg:path><svg:path fill="currentColor" d="m6.229 14.993l1.414 1.413a11.955 11.955 0 0 1 16.704-.01l1.413-1.413a13.95 13.95 0 0 0-19.531.01"></svg:path><svg:path fill="currentColor" d="M30 10.741a19.94 19.94 0 0 0-28 0v.023l1.404 1.404a17.934 17.934 0 0 1 25.181-.01L30 10.743Z"></svg:path>`,
})
export class CarbonWifiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWifiBridgeIcon],svg[carbon-wifi-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.95 20.95l-1.415-1.414a5 5 0 0 0 0-7.072L6.95 11.05a7 7 0 0 1 0 9.9"></svg:path><svg:path fill="currentColor" d="m10.485 24.485l-1.414-1.414a10 10 0 0 0 0-14.142l1.414-1.414a12 12 0 0 1 0 16.97m14.566-3.535a7 7 0 0 1 0-9.9l1.414 1.415a5 5 0 0 0 0 7.071z"></svg:path><svg:path fill="currentColor" d="M21.515 24.485a12 12 0 0 1 0-16.97l1.414 1.414a10 10 0 0 0 0 14.142zM3 15H2V4H0v24h2V17h1a1 1 0 0 0 0-2M30 4v11h-1a1 1 0 0 0 0 2h1v11h2V4z"></svg:path>`,
})
export class CarbonWifiBridgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWifiBridgeAltIcon],svg[carbon-wifi-bridge-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 26h-2a5.006 5.006 0 0 0-5-5v-2a7.01 7.01 0 0 1 7 7"></svg:path><svg:path fill="currentColor" d="M18 26h-2A10.01 10.01 0 0 0 6 16v-2a12.014 12.014 0 0 1 12 12m8-13a7.01 7.01 0 0 1-7-7h2a5.006 5.006 0 0 0 5 5z"></svg:path><svg:path fill="currentColor" d="M26 18A12.014 12.014 0 0 1 14 6h2a10.01 10.01 0 0 0 10 10zM7.707 24.293a1 1 0 0 0-1.414 0L2 28.586L3.414 30l4.293-4.293a1 1 0 0 0 0-1.414M28.586 2l-4.293 4.293a1 1 0 0 0 1.414 1.414L30 3.414z"></svg:path>`,
})
export class CarbonWifiBridgeAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWifiControllerIcon],svg[carbon-wifi-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m0-8h20v6H6Z"></svg:path><svg:circle cx="9" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="14.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10.783 10.333a7 7 0 0 1 10.434 0l-1.49 1.333a5 5 0 0 0-7.453 0Z"></svg:path><svg:path fill="currentColor" d="M7.2 7.4a11.002 11.002 0 0 1 17.6 0l-1.6 1.2a9 9 0 0 0-14.401 0Z"></svg:path>`,
})
export class CarbonWifiControllerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWifiNotSecureIcon],svg[carbon-wifi-not-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20h-6v-3a2 2 0 0 1 4 0h2a4 4 0 0 0-8 0v3a2.003 2.003 0 0 0-2 2v6a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2v-6a2.003 2.003 0 0 0-2-2m0 8h-8v-6h8zM16 8a8.97 8.97 0 0 0-6.36 2.64l1.412 1.413a6.99 6.99 0 0 1 9.895 0l1.414-1.414A8.97 8.97 0 0 0 16 8"></svg:path><svg:path fill="currentColor" d="m6.105 7.105l1.414 1.414a11.98 11.98 0 0 1 16.962 0l1.414-1.414a13.98 13.98 0 0 0-19.79 0"></svg:path>`,
})
export class CarbonWifiNotSecureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWifiOffIcon],svg[carbon-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="25" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 3.414L28.586 2L2 28.586L3.414 30l10.682-10.682a5.94 5.94 0 0 1 6.01 1.32l1.414-1.414a7.97 7.97 0 0 0-5.125-2.204l3.388-3.388a12 12 0 0 1 4.564 2.765l1.413-1.414a14 14 0 0 0-4.426-2.903l2.997-2.997a18 18 0 0 1 4.254 3.075L30 10.743v-.002a20 20 0 0 0-4.19-3.138zm-15.32 9.664l2.042-2.042C16.48 11.023 16.243 11 16 11a13.95 13.95 0 0 0-9.771 3.993l1.414 1.413a11.97 11.97 0 0 1 7.037-3.328M16 7a18 18 0 0 1 4.232.525l1.643-1.642A19.95 19.95 0 0 0 2 10.74v.023l1.404 1.404A17.92 17.92 0 0 1 16 7"></svg:path>`,
})
export class CarbonWifiOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWifiSecureIcon],svg[carbon-wifi-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20v-3a4 4 0 0 0-8 0v3a2.003 2.003 0 0 0-2 2v6a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2v-6a2.003 2.003 0 0 0-2-2m-6-3a2 2 0 0 1 4 0v3h-4zm-2 11v-6h8v6zM6.105 7.105l1.414 1.414a11.98 11.98 0 0 1 16.962 0l1.414-1.414a13.98 13.98 0 0 0-19.79 0"></svg:path><svg:path fill="currentColor" d="M16 8a8.97 8.97 0 0 0-6.36 2.64l1.412 1.413a6.99 6.99 0 0 1 9.895 0l1.414-1.414A8.97 8.97 0 0 0 16 8"></svg:path>`,
})
export class CarbonWifiSecureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWikisIcon],svg[carbon-wikis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m12 13h-6a24.26 24.26 0 0 0-2.79-10.55A12 12 0 0 1 28 15M16 28a5 5 0 0 1-.67 0A21.85 21.85 0 0 1 12 17h8a21.85 21.85 0 0 1-3.3 11a5 5 0 0 1-.7 0m-4-13a21.85 21.85 0 0 1 3.3-11a6 6 0 0 1 1.34 0A21.85 21.85 0 0 1 20 15Zm.76-10.55A24.26 24.26 0 0 0 10 15H4a12 12 0 0 1 8.79-10.55ZM4.05 17h6a24.26 24.26 0 0 0 2.75 10.55A12 12 0 0 1 4.05 17m15.16 10.55A24.26 24.26 0 0 0 22 17h6a12 12 0 0 1-8.79 10.55"></svg:path>`,
})
export class CarbonWikisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindGustsIcon],svg[carbon-wind-gusts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.316 8.051l-18-6a1 1 0 0 0-.916.149L4 7V2H2v28h2V11l6.4 4.8a1 1 0 0 0 .917.149l18-6a1 1 0 0 0 0-1.897ZM10 13L4.667 9L10 5Zm4-.054l-2 .667V4.387l2 .667Zm4-1.333l-2 .666V5.721l2 .666Zm2-.667V7.054L25.838 9Z"></svg:path><svg:path fill="currentColor" d="M20 22a4 4 0 0 0-8 0h2a2 2 0 1 1 2 2H8v2h8a4.005 4.005 0 0 0 4-4"></svg:path><svg:path fill="currentColor" d="M26 22a4.005 4.005 0 0 0-4 4h2a2 2 0 1 1 2 2H12v2h14a4 4 0 0 0 0-8"></svg:path>`,
})
export class CarbonWindGustsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindPowerIcon],svg[carbon-wind-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 28V15.816a3 3 0 0 0 1.47-1.119L27.063 17l.518-1.932l-8.605-2.305a2.985 2.985 0 0 0-2.63-2.728L14.194 2l-1.932.519l2.132 7.956a2.96 2.96 0 0 0-1.093 3.811L7 20.586L8.415 22l6.3-6.3a3 3 0 0 0 .285.115V28H2v2h28v-2Zm0-15a1 1 0 1 1-1-1a1 1 0 0 1 1 1"></svg:path>`,
})
export class CarbonWindPowerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindStreamIcon],svg[carbon-wind-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 2l-1.414 1.414L26.172 6h-5.09a16.9 16.9 0 0 0-6.314 1.216l-4.279 1.711A14.9 14.9 0 0 1 4.92 10H2v2h2.919a16.9 16.9 0 0 0 6.313-1.216l4.279-1.711A14.9 14.9 0 0 1 21.08 8h5.09l-2.586 2.586L25 12l5-5Z"></svg:path><svg:path fill="currentColor" d="m21 11l-1.414 1.414L22.172 15h-3.27a17 17 0 0 0-5.97 1.083l-2.566.962A15 15 0 0 1 5.099 18H2v2h3.099a17 17 0 0 0 5.969-1.082l2.566-.963A15 15 0 0 1 18.901 17h3.27l-2.585 2.586L21 21l5-5Z"></svg:path><svg:path fill="currentColor" d="m17 20l-1.414 1.414L18.172 24h-1.575a17 17 0 0 0-5.377.872l-1.073.358a15 15 0 0 1-4.744.77H2v2h3.403a17 17 0 0 0 5.377-.872l1.073-.358a15 15 0 0 1 4.744-.77h1.575l-2.586 2.586L17 30l5-5Z"></svg:path>`,
})
export class CarbonWindStreamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindowAutoIcon],svg[carbon-window-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 4h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M25 15h3v2h-3z" fill="currentColor"></svg:path><svg:path d="M15 25h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M4 15h3v2H4z" fill="currentColor"></svg:path><svg:path d="M6.777 8.19L8.19 6.774l2.121 2.121l-1.414 1.415z" fill="currentColor"></svg:path><svg:path d="M21.687 8.9l2.121-2.12l1.414 1.413l-2.121 2.122z" fill="currentColor"></svg:path><svg:path d="M21.686 23.096l1.414-1.414l2.121 2.122l-1.414 1.414z" fill="currentColor"></svg:path><svg:path d="M6.78 23.8L8.9 21.677l1.414 1.414l-2.121 2.122z" fill="currentColor"></svg:path><svg:path d="M4 30h24v2H4z" fill="currentColor"></svg:path><svg:path d="M4 0h24v2H4z" fill="currentColor"></svg:path><svg:path d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6zm-4 6a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4z" fill="currentColor"></svg:path>`,
})
export class CarbonWindowAutoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindowBaseIcon],svg[carbon-window-base-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 2h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M25 13h3v2h-3z" fill="currentColor"></svg:path><svg:path d="M15 23h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M4 13h3v2H4z" fill="currentColor"></svg:path><svg:path d="M6.775 6.188L8.19 4.774l2.12 2.121L8.898 8.31z" fill="currentColor"></svg:path><svg:path d="M21.695 6.9l2.122-2.122l1.414 1.414l-2.121 2.122z" fill="currentColor"></svg:path><svg:path d="M21.691 21.088l1.415-1.414l2.12 2.121l-1.413 1.414z" fill="currentColor"></svg:path><svg:path d="M6.778 21.812L8.9 19.691l1.414 1.414l-2.121 2.122z" fill="currentColor"></svg:path><svg:path d="M4 28h24v2H4z" fill="currentColor"></svg:path><svg:path d="M16 20a6 6 0 1 0-6-6a6 6 0 0 0 6 6zm0-10v8a4 4 0 0 1 0-8z" fill="currentColor"></svg:path>`,
})
export class CarbonWindowBaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindowBlackSaturationIcon],svg[carbon-window-black-saturation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 2h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M27 15h3v2h-3z" fill="currentColor"></svg:path><svg:path d="M15 27h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M2 15h3v2H2z" fill="currentColor"></svg:path><svg:path d="M5.457 6.877l1.416-1.416l2.123 2.123L7.58 9.001z" fill="currentColor"></svg:path><svg:path d="M23 7.58l2.12-2.12l1.415 1.414l-2.122 2.121z" fill="currentColor"></svg:path><svg:path d="M23.001 24.416L24.417 23l2.122 2.123l-1.415 1.416z" fill="currentColor"></svg:path><svg:path d="M5.47 25.126L7.591 23L9 24.419L6.884 26.54L5.47 25.126z" fill="currentColor"></svg:path><svg:path d="M15 13h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M19 13h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M17 11h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M17 15h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M17 19h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M15 17h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M19 17h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M16 7a9 9 0 1 0 9 9a9.01 9.01 0 0 0-9-9zm-7 9a7.004 7.004 0 0 1 6-6.92V11h2V9.08a6.923 6.923 0 0 1 2 .605V11h1.89l.11.11V13h1.315a6.931 6.931 0 0 1 .605 2H21v2h1.92a6.931 6.931 0 0 1-.605 2H21v1.89a7.13 7.13 0 0 1-.11.11H19v1.315a6.923 6.923 0 0 1-2 .605V21h-2v1.92A7.004 7.004 0 0 1 9 16z" fill="currentColor"></svg:path>`,
})
export class CarbonWindowBlackSaturationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindowOverlayIcon],svg[carbon-window-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 6h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M25 17h3v2h-3z" fill="currentColor"></svg:path><svg:path d="M15 27h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M4 17h3v2H4z" fill="currentColor"></svg:path><svg:path d="M6.774 10.187l1.414-1.415l2.121 2.122l-1.414 1.414z" fill="currentColor"></svg:path><svg:path d="M21.694 10.898l2.121-2.122l1.414 1.415l-2.12 2.12z" fill="currentColor"></svg:path><svg:path d="M21.69 25.087l1.414-1.415l2.121 2.122l-1.414 1.414z" fill="currentColor"></svg:path><svg:path d="M6.777 25.81l2.121-2.12l1.414 1.414l-2.121 2.12z" fill="currentColor"></svg:path><svg:path d="M4 2h24v2H4z" fill="currentColor"></svg:path><svg:path d="M16 24a6 6 0 1 0-6-6a6 6 0 0 0 6 6zm0-10v8a4 4 0 0 1 0-8z" fill="currentColor"></svg:path>`,
})
export class CarbonWindowOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindowPresetIcon],svg[carbon-window-preset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 6h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M24 15h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M15 24h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M6 15h2v2H6z" fill="currentColor"></svg:path><svg:path d="M8.172 9.586l1.414-1.414L11 9.586L9.586 11z" fill="currentColor"></svg:path><svg:path d="M21 9.586l1.414-1.414l1.414 1.414L22.414 11z" fill="currentColor"></svg:path><svg:path d="M21 22.414L22.414 21l1.414 1.414l-1.414 1.414z" fill="currentColor"></svg:path><svg:path d="M8.172 22.414L9.586 21L11 22.414l-1.414 1.414z" fill="currentColor"></svg:path><svg:path d="M16 22a6 6 0 1 0-6-6a6 6 0 0 0 6 6zm0-10v8a4 4 0 0 1 0-8z" fill="currentColor"></svg:path><svg:path d="M28 30H4a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v24a2.002 2.002 0 0 1-2 2zM4 4v24h24V4z" fill="currentColor"></svg:path>`,
})
export class CarbonWindowPresetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindyIcon],svg[carbon-windy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15H8v-2h13a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5m2 13a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3H4v-2h19a5 5 0 0 1 0 10"></svg:path>`,
})
export class CarbonWindyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindyDustIcon],svg[carbon-windy-dust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 28a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3h-1v-2h1a5 5 0 0 1 0 10m-7-10h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2H4zm17-3h-1v-2h1a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5m-7-2h4v2h-4zm-6 0h4v2H8z"></svg:path>`,
})
export class CarbonWindyDustIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindySnowIcon],svg[carbon-windy-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 28a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3H6v-2h19a5 5 0 0 1 0 10m-2-13H10v-2h13a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5"></svg:path><svg:path fill="currentColor" d="M11 23h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zM6 4h2v2H6zm2 2h2v2H8zm2 2h2v2h-2zm0-4h2v2h-2zM6 8h2v2H6zM2 26h2v2H2zm2 2h2v2H4zm2 2h2v2H6zm0-4h2v2H6zm-4 4h2v2H2z"></svg:path>`,
})
export class CarbonWindySnowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWindyStrongIcon],svg[carbon-windy-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 30a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3H4v-2h9a5 5 0 0 1 0 10"></svg:path><svg:path fill="currentColor" d="M25 25a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3H2v-2h23a5 5 0 0 1 0 10m-4-13H6v-2h15a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5"></svg:path>`,
})
export class CarbonWindyStrongIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWinterWarningIcon],svg[carbon-winter-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.684 19.051l-2.517.84L13 15.486V7.369l2.555-1.704l-1.11-1.664L12 5.631l-2.445-1.63l-1.11 1.664L11 7.369v6.688l-5-3.571V8H4v2.279l-2.316.772l.632 1.898l2.517-.839l5.447 3.891l-5.447 3.89l-2.517-.84l-.632 1.898L4 21.721V24h2v-2.485l5-3.571v6.687l-2.555 1.704l1.11 1.664L12 26.368l2.445 1.631l1.11-1.664L13 24.631v-6.688l5 3.572V24h2v-2.279l2.316-.772z"></svg:path><svg:path fill="none" d="M23.75 10h-1.5V6h1.5ZM23 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M29.912 13.936L23.628 2.37a.718.718 0 0 0-1.256 0l-6.283 11.564A.72.72 0 0 0 16.72 15h12.56a.72.72 0 0 0 .631-1.065M22.25 6h1.5v4h-1.5Zm.75 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonWinterWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWintryMixIcon],svg[carbon-wintry-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 26h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-2-14h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-3 10a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 10 30"></svg:path><svg:path fill="currentColor" d="M24.8 9.136a8.994 8.994 0 0 0-17.6 0A6.53 6.53 0 0 0 2 15.5V22l1 2l1-2v-1.82a6.5 6.5 0 0 0 3.43 1.725l-1.324 2.648a1 1 0 1 0 1.789.894l2-4a1 1 0 0 0-.447-1.341a1 1 0 0 0-.49-.09V20H8.5a4.498 4.498 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.498 4.498 0 0 1 23.5 20h-.542v.008A.996.996 0 0 0 22 21v3l1 2l1-2v-2.025a6.5 6.5 0 0 0 2-.477V26l1 2l1-2v-5.82a6.488 6.488 0 0 0-3.2-11.044"></svg:path>`,
})
export class CarbonWintryMixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWirelessCheckoutIcon],svg[carbon-wireless-checkout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28v-2a10 10 0 0 0 10-10h2a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M18 23v-2a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7"></svg:path><svg:path fill="currentColor" d="M27 11h-6V7a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v4H3a1 1 0 0 0-1 1.15L3.88 24.3a2 2 0 0 0 2 1.7H15v-2H5.86L4.17 13H27ZM11 7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4h-8Z"></svg:path>`,
})
export class CarbonWirelessCheckoutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWmvIcon],svg[carbon-wmv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29 9l-2 13l-2-13h-2l2.52 14h2.96L31 9zM19 9l-1.52 5l-.48 1.98l-.46-1.98L15 9h-2v14h2v-8l-.16-2l.58 2L17 19.63L18.58 15l.58-2l-.16 2v8h2V9zM9.2 9l-.34 8l-.26 4.54L8.19 18l-.68-5.46H5.49L4.81 18l-.41 3.54L4.14 17L3.8 9H2l1 14h2.27l.76-4.93l.46-4.07l.01-.03l.01.03l.46 4.07l.76 4.93H10l1-14z"></svg:path>`,
})
export class CarbonWmvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWordCloudIcon],svg[carbon-word-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16h12v2H10zm0 4h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M16 7a8.02 8.02 0 0 1 7.865 6.494l.259 1.346l1.349.244A5.502 5.502 0 0 1 24.508 26H7.495a5.502 5.502 0 0 1-.97-10.916l1.35-.244l.259-1.346A8.026 8.026 0 0 1 16 7m0-2a10.024 10.024 0 0 0-9.83 8.116A7.502 7.502 0 0 0 7.491 28h17.017a7.502 7.502 0 0 0 1.32-14.884A10.02 10.02 0 0 0 15.989 5Z"></svg:path>`,
})
export class CarbonWordCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWorkflowAutomationIcon],svg[carbon-workflow-automation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 27c-3.6 0-7.1-1.8-9.2-5H12v-2H4v8h2v-3.7c2.5 3 6.1 4.7 10 4.7zm15-4v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V15h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H17v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V29h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m-4-15h5.2C21.9 4.9 15.1 3.5 10 6.8c-3.1 2-5 5.5-5 9.2H3C3 8.8 8.8 3 16 3c3.9 0 7.5 1.7 10 4.7V4h2v8h-8z"></svg:path>`,
})
export class CarbonWorkflowAutomationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWorkspaceIcon],svg[carbon-workspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17v8H6v-8zm0-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m11-9v5H17V6zm0-2H17a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 13v5h-5v-5zm0-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2M11 6v5H6V6zm0-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonWorkspaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWorkspaceImportIcon],svg[carbon-workspace-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 6v5H17V6zm0-2H17a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M12 25H6v-8h6v-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6zm18-5H16.828l2.586-2.586L18 16l-5 5l5 5l1.414-1.414L16.828 22H30zM11 6v5H6V6zm0-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonWorkspaceImportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWorshipIcon],svg[carbon-worship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.586 17L22 21.586l-5-5a2 2 0 0 0-2.829 0L9.585 21.17a2.003 2.003 0 0 0 0 2.829l4 4H6v2h10a1 1 0 0 0 .707-1.707L11 22.585L15.585 18l5.708 5.707a1 1 0 0 0 1.414 0L28 18.414Z"></svg:path><svg:path fill="currentColor" d="M21.5 17a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path><svg:path fill="currentColor" d="m4 10.598l12-6.462l12.526 6.745l.948-1.762l-13-7a1 1 0 0 0-.948 0l-13 7A1 1 0 0 0 2 10v20h2Z"></svg:path>`,
})
export class CarbonWorshipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWorshipChristianIcon],svg[carbon-worship-christian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 30h-2a2 2 0 0 1-2-2V14H8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5v14a2 2 0 0 1-2 2M8 10v2h7v16h2V12h7v-2h-7V4h-2v6Z"></svg:path>`,
})
export class CarbonWorshipChristianIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWorshipJewishIcon],svg[carbon-worship-jewish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.291 16l3.585-6.518A1 1 0 0 0 27 8h-7.109l-3.015-5.482a1 1 0 0 0-1.752 0L12.109 8H5a1 1 0 0 0-.876 1.482L7.709 16l-3.585 6.518A1 1 0 0 0 5 24h7.109l3.015 5.482a1 1 0 0 0 1.752 0L19.891 24H27a1 1 0 0 0 .876-1.482Zm-5.582 6L16 26.925L13.291 22h-6.6l3.3-6l-3.3-6h6.6L16 5.075L18.709 10h6.6l-3.3 6l3.3 6Z"></svg:path>`,
})
export class CarbonWorshipJewishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonWorshipMuslimIcon],svg[carbon-worship-muslim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 18a1 1 0 0 1-.541-.16L22 14.97l-4.458 2.872a1 1 0 0 1-1.51-1.095l1.35-5.132L14.31 8.69a1 1 0 0 1 .551-1.715l4.375-.612l1.866-3.804A1 1 0 0 1 21.988 2a1.02 1.02 0 0 1 .899.538l1.993 3.825l4.262.613a1 1 0 0 1 .548 1.714l-3.072 2.924l1.35 5.132A1 1 0 0 1 27 18m-5-5.22a1 1 0 0 1 .542.159l2.836 1.827l-.845-3.215a1 1 0 0 1 .277-.979l2.008-1.91l-2.73-.393a1 1 0 0 1-.744-.527l-1.317-2.527l-1.23 2.505a1 1 0 0 1-.758.55l-2.849.399l2 1.903a1 1 0 0 1 .278.979l-.846 3.215l2.837-1.827a1 1 0 0 1 .541-.16"></svg:path><svg:path fill="currentColor" d="M15.817 30A13.814 13.814 0 0 1 9.075 4.128a1 1 0 0 1 1.362 1.36A11.81 11.81 0 0 0 26.51 21.565a1 1 0 0 1 1.362 1.36A13.84 13.84 0 0 1 15.817 30M7.327 7.973a11.81 11.81 0 0 0 16.7 16.7a13.81 13.81 0 0 1-16.7-16.7"></svg:path>`,
})
export class CarbonWorshipMuslimIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonXIcon],svg[carbon-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 9h-2l-2 6l-2-6h-2l2.75 7L12 23h2l2-6l2 6h2l-2.75-7L20 9z" fill="currentColor"></svg:path>`,
})
export class CarbonXIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonXAxisIcon],svg[carbon-x-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 20l-1.414 1.414L24.172 24H6V4H4v20a2 2 0 0 0 2 2h18.172l-2.586 2.586L23 30l5-5Z"></svg:path>`,
})
export class CarbonXAxisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonXlsIcon],svg[carbon-xls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 23h-6v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-14-2V9h-2v14h8v-2zM10 9H8l-2 6l-2-6H2l2.752 7L2 23h2l2-6l2 6h2l-2.755-7z"></svg:path>`,
})
export class CarbonXlsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonXmlIcon],svg[carbon-xml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 21V9h-2v14h8v-2zM18 9l-1.52 5l-.48 1.98l-.46-1.98L14 9h-2v14h2v-8l-.16-2l.58 2L16 19.63L17.58 15l.58-2l-.16 2v8h2V9zm-8 0H8l-2 6l-2-6H2l2.75 7L2 23h2l2-6l2 6h2l-2.75-7z"></svg:path>`,
})
export class CarbonXmlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonYIcon],svg[carbon-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 9h-2l-2 7l-2-7h-2l3 9v5h2v-5l3-9z" fill="currentColor"></svg:path>`,
})
export class CarbonYIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonYAxisIcon],svg[carbon-y-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 26V7.828l2.586 2.586L12 9L7 4L2 9l1.414 1.414L6 7.828V26a2 2 0 0 0 2 2h20v-2Z"></svg:path>`,
})
export class CarbonYAxisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZIcon],svg[carbon-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 9h-8v2h6l-6 10v2h8v-2h-6l6-10V9z" fill="currentColor"></svg:path>`,
})
export class CarbonZIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZAxisIcon],svg[carbon-z-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 22v3.586l-9-9V5.828l2.586 2.586L21 7l-5-5l-5 5l1.414 1.414L15 5.828v10.758l-9 9V22H4v7h7v-2H7.414L16 18.414L24.586 27H21v2h7v-7z"></svg:path>`,
})
export class CarbonZAxisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZLparIcon],svg[carbon-z-lpar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1h-3a2 2 0 0 0-2 2v8h-3V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V17h3v8a2 2 0 0 0 2 2h3v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1h-3v-8h3v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1h-3V7h3v1a2 2 0 0 0 2 2m0-6h4v4h-4zm-12.6 8L4 17.92V6.08zm.6 2.08l.001 11.84l-7.4-5.92zm0-4.16L5.85 5H12zM4 22.08L10.15 27H4zM24 24h4v4h-4zm0-10h4v4h-4z"></svg:path>`,
})
export class CarbonZLparIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZSystemsIcon],svg[carbon-z-systems-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3h-8c-1.103 0-2 .898-2 2v22c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2m0 6.92L20.85 5H27zM26.4 12L19 17.92V6.08zm.6 2.08l.001 11.84l-7.4-5.92zm-8 8L25.15 27H19zM13 3H5c-1.103 0-2 .898-2 2v22c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2m0 6.92L6.85 5H13zM12.4 12L5 17.92V6.08zm.6 2.08l.001 11.84l-7.4-5.92zm-8 8L11.15 27H5z"></svg:path>`,
})
export class CarbonZSystemsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZipIcon],svg[carbon-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 9h-6v14h2v-5h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2m0 7h-4v-5h4zM12 9v2h3v10h-3v2h8v-2h-3V11h3V9zm-2 0H2v2h6L2 21v2h8v-2H4l6-10z"></svg:path>`,
})
export class CarbonZipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZipReferenceIcon],svg[carbon-zip-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM28 2h-6v14h2v-5h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 7h-4V4h4zM12 4h3v10h-3v2h8v-2h-3V4h3V2h-8zM2 4h6L2 14v2h8v-2H4l6-10V2H2z"></svg:path>`,
})
export class CarbonZipReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZoomAreaIcon],svg[carbon-zoom-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31 29.586l-4.688-4.688a8.028 8.028 0 1 0-1.415 1.414L29.586 31zM20 26a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6M8 26H4a2 2 0 0 1-2-2v-4h2v4h4zM2 12h2v4H2zm24-4h-2V4h-4V2h4a2 2 0 0 1 2 2zM12 2h4v2h-4zM4 8H2V4a2 2 0 0 1 2-2h4v2H4z"></svg:path>`,
})
export class CarbonZoomAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZoomFitIcon],svg[carbon-zoom-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.448 20A10.86 10.86 0 0 0 24 13a11 11 0 1 0-11 11a10.86 10.86 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"></svg:path><svg:path fill="currentColor" d="M10 12H8v-2a2 2 0 0 1 2-2h2v2h-2zm8 0h-2v-2h-2V8h2a2 2 0 0 1 2 2zm-6 6h-2a2 2 0 0 1-2-2v-2h2v2h2zm4 0h-2v-2h2v-2h2v2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonZoomFitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZoomInIcon],svg[carbon-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12h-4V8h-2v4H8v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M21.448 20A10.86 10.86 0 0 0 24 13a11 11 0 1 0-11 11a10.86 10.86 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"></svg:path>`,
})
export class CarbonZoomInIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZoomInAreaIcon],svg[carbon-zoom-in-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></svg:path><svg:path fill="currentColor" d="m31 29.586l-4.688-4.688a8.028 8.028 0 1 0-1.415 1.414L29.586 31zM20 26a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6M4 8H2V4a2 2 0 0 1 2-2h4v2H4zm22 0h-2V4h-4V2h4a2 2 0 0 1 2 2zM12 2h4v2h-4zM8 26H4a2 2 0 0 1-2-2v-4h2v4h4zM2 12h2v4H2z"></svg:path>`,
})
export class CarbonZoomInAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZoomOutIcon],svg[carbon-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h10v2H8z"></svg:path><svg:path fill="currentColor" d="M21.448 20A10.86 10.86 0 0 0 24 13a11 11 0 1 0-11 11a10.86 10.86 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"></svg:path>`,
})
export class CarbonZoomOutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZoomOutAreaIcon],svg[carbon-zoom-out-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19h8v2h-8z"></svg:path><svg:path fill="currentColor" d="m31 29.586l-4.688-4.688a8.028 8.028 0 1 0-1.415 1.414L29.586 31zM20 26a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6M4 8H2V4a2 2 0 0 1 2-2h4v2H4zm22 0h-2V4h-4V2h4a2 2 0 0 1 2 2zM12 2h4v2h-4zM8 26H4a2 2 0 0 1-2-2v-4h2v4h4zM2 12h2v4H2z"></svg:path>`,
})
export class CarbonZoomOutAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZoomPanIcon],svg[carbon-zoom-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M27.01 12l-1.41 1.41L28.18 16l-2.59 2.59L27.01 20l4-4l-4-4z" fill="currentColor"></svg:path><svg:path d="M6.41 13.42L5 12l-4 4l4 4l1.42-1.41L3.83 16l2.58-2.58z" fill="currentColor"></svg:path><svg:path d="M16 28.17l-2.59-2.59L12 27l4 4l4-4l-1.41-1.41L16 28.17z" fill="currentColor"></svg:path><svg:path d="M16 3.83l2.58 2.58L20 5l-4-4l-4 4l1.41 1.42L16 3.83z" fill="currentColor"></svg:path><svg:path d="M22 16a6 6 0 1 0-2.53 4.89l3.82 3.82l1.42-1.42l-3.82-3.82A6 6 0 0 0 22 16zm-6 4a4 4 0 1 1 4-4a4 4 0 0 1-4 4z" fill="currentColor"></svg:path>`,
})
export class CarbonZoomPanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZoomResetIcon],svg[carbon-zoom-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.448 21A10.86 10.86 0 0 0 25 14A10.99 10.99 0 0 0 6 6.466V2H4v8h8V8H7.332a8.977 8.977 0 1 1-2.1 8h-2.04A11.01 11.01 0 0 0 14 25a10.86 10.86 0 0 0 7-2.552L28.586 30L30 28.586Z"></svg:path>`,
})
export class CarbonZoomResetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZosIcon],svg[carbon-zos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 22h-5v-2h5v-3h-3c-1.103 0-2-.897-2-2v-3c0-1.103.897-2 2-2h5v2h-5v3h3c1.103 0 2 .897 2 2v3c0 1.103-.897 2-2 2m-9 0h-3c-1.103 0-2-.897-2-2v-8c0-1.103.897-2 2-2h3c1.103 0 2 .897 2 2v8c0 1.103-.897 2-2 2m-3-10v8h3v-8zm-6.054-2l-4 12h2.108l4-12zM6 22H0v-2.303L3.798 14H0v-2h6v2.303L2.202 20H6z"></svg:path>`,
})
export class CarbonZosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonZosSysplexIcon],svg[carbon-zos-sysplex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h8c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2h-8c-1.103 0-2 .898-2 2v1H9c-1.103 0-2 .898-2 2v3H4c-1.103 0-2 .898-2 2v8c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9v1c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-8c0-1.102-.897-2-2-2h-8c-1.103 0-2 .898-2 2v5H9v-3h3c1.103 0 2-.897 2-2v-8c0-1.102-.897-2-2-2H9V7h9v5c0 1.103.897 2 2 2m1.414 14L28 21.414V28zm5.172-8L20 26.586V20zm-16.034-8L4 18.552V12zM5.38 20L12 13.38l.001 6.62zm16.034-8L28 5.414V12zm5.172-8L20 10.586V4z"></svg:path>`,
})
export class CarbonZosSysplexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
