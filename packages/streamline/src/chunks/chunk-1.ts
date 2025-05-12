import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineExpandIcon],svg[streamline-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m5 5v3m-13-3v3m11 5h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m3 0h3M9 4H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineExpandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineExpandHorizontal1Icon],svg[streamline-expand-horizontal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.48 3.87L.61 6.74a.36.36 0 0 0 0 .52l2.87 2.87m7.04-6.26l2.87 2.87a.36.36 0 0 1 0 .52l-2.87 2.87M7 13.5V.5"></svg:path>`,
})
export class StreamlineExpandHorizontal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineExpandWindow2Icon],svg[streamline-expand-window-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8v4.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H6m4 0h3.5V4m0-3.5L7 7"></svg:path>`,
})
export class StreamlineExpandWindow2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEyeOpticIcon],svg[streamline-eye-optic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 3.625c-4.187 0-5.945 3.766-5.945 3.844S2.813 11.312 7 11.312s5.945-3.765 5.945-3.843S11.187 3.625 7 3.625M2.169 5.813L.61 4.252m4.525-.354L4.5 1.843m7.331 3.97l1.559-1.56m-4.525-.355L9.5 1.843"></svg:path><svg:path d="M5.306 7.081a1.738 1.738 0 1 0 3.388.776a1.738 1.738 0 1 0-3.388-.776"></svg:path></svg:g>`,
})
export class StreamlineEyeOpticIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFaceScan1Icon],svg[streamline-face-scan-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5v2a1 1 0 0 1-1 1h-2m0-13h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m0 13h-2a1 1 0 0 1-1-1v-2m6.5-6V8H5.5m-1 2a3.63 3.63 0 0 0 5 0M4 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path>`,
})
export class StreamlineFaceScan1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFacebook1Icon],svg[streamline-facebook-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.61.61 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.62.62 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1"></svg:path>`,
})
export class StreamlineFacebook1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFactorialIcon],svg[streamline-factorial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5V10M1 13.5V6a4 4 0 1 1 8 0v7.5M1 2v4m11 7a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path>`,
})
export class StreamlineFactorialIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFahrenheitIcon],svg[streamline-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 3.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.5 10v-12h6M7 7h4"></svg:path>`,
})
export class StreamlineFahrenheitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFastforwardClockIcon],svg[streamline-fastforward-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M7 3.5v4l2.6 1.3"></svg:path><svg:path d="M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"></svg:path><svg:path stroke-linejoin="round" d="M13.5 2v2.5H11"></svg:path></svg:g>`,
})
export class StreamlineFastforwardClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFigmaIcon],svg[streamline-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.536 2.759c0-1.11.899-2.009 2.008-2.009H7v4.018H4.544c-1.11 0-2.008-.9-2.008-2.01Zm8.928 0c0-1.11-.899-2.009-2.008-2.009H7v4.018h2.456c1.11 0 2.008-.9 2.008-2.01Z"></svg:path><svg:path d="M11.464 7A2.232 2.232 0 1 0 7 7a2.232 2.232 0 0 0 4.464 0m-8.928 4.241c0-1.11.899-2.009 2.008-2.009H7v1.786c0 1.233-1 2.232-2.232 2.232h-.224c-1.11 0-2.008-.9-2.008-2.009"></svg:path><svg:path d="M2.536 7c0-1.233.999-2.232 2.232-2.232H7v4.464H4.768c-1.233 0-2.232-1-2.232-2.232"></svg:path></svg:g>`,
})
export class StreamlineFigmaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFileAddAlternateIcon],svg[streamline-file-add-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 5V1.5a1 1 0 0 1 1-1H10L13.5 4v8.5a1 1 0 0 1-1 1h-5m-4-6v6m-3-3h6"></svg:path>`,
})
export class StreamlineFileAddAlternateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFileCode1Icon],svg[streamline-file-code-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="m5.5 10.5l-2-2l2-2m3 4l2-2l-2-2"></svg:path></svg:g>`,
})
export class StreamlineFileCode1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFileDeleteAlternateIcon],svg[streamline-file-delete-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7V1.5a1 1 0 0 1 1-1H10L13.5 4v8.5a1 1 0 0 1-1 1H8M4.74 9.26L.5 13.5m0-4.24l4.24 4.24"></svg:path>`,
})
export class StreamlineFileDeleteAlternateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFileRemoveAlternateIcon],svg[streamline-file-remove-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5v-6a1 1 0 0 1 1-1H10L13.5 4v8.5a1 1 0 0 1-1 1h-6m-6-3h5"></svg:path>`,
})
export class StreamlineFileRemoveAlternateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFilmRoll1Icon],svg[streamline-film-roll-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.75 6a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0m9.5.25v5a1.5 1.5 0 0 0 3 0"></svg:path><svg:path d="M5.5 3.945a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0 5.11a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M3.195 6.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.61.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineFilmRoll1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFilmSlateIcon],svg[streamline-film-slate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.365 6.127h11.447v6.232a1 1 0 0 1-1 1H2.366a1 1 0 0 1-1-1zm-.001 0L12.42 3.164l-.48-1.79a1 1 0 0 0-1.225-.708L1.591 3.112a1 1 0 0 0-.707 1.224zm2.626 4.69h1.278m-.871-5.503l.64-3.126m2.972 2.158l.64-3.126"></svg:path>`,
})
export class StreamlineFilmSlateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFilter2Icon],svg[streamline-filter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5H.5l5 7v6l3-2v-4z"></svg:path>`,
})
export class StreamlineFilter2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFingerprint1Icon],svg[streamline-fingerprint-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 13.5v-7a6 6 0 1 1 12 0v2m-9 5v-2"></svg:path><svg:path d="M4 9V7a3 3 0 0 1 6 0v6.5m3-2v2M7 12v1.5m0-4v-2"></svg:path></svg:g>`,
})
export class StreamlineFingerprint1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFingerprint2Icon],svg[streamline-fingerprint-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.39a5 5 0 0 0 5-5V5.61a5 5 0 0 0-1.27-3.33M2 6.72v1.67A5 5 0 0 0 5.06 13M9.5 1.28a5 5 0 0 0-6.83 1.83a4.9 4.9 0 0 0-.57 1.52"></svg:path><svg:path d="M6.48 3.51A2.51 2.51 0 0 1 9.5 6v1.61m-.64 2.1A2.5 2.5 0 0 1 4.5 8V6a2.5 2.5 0 0 1 .2-1M7 6.11v1.67"></svg:path></svg:g>`,
})
export class StreamlineFingerprint2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFireAlarm2Icon],svg[streamline-fire-alarm-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.31 3.773c-.226-.097-.431.13-.334.292a5.5 5.5 0 0 1 .67 1.923c.14.956 0 2.003-.616 2.777a.26.26 0 0 1-.195.097a.26.26 0 0 1-.205-.086c-.279-.289-.568-.581-.756-.94c-.054-.108-.249-.281-.53 0c-.678.558-1.09 1.416-1.005 2.29c.036 1.937 1.747 3.35 3.623 3.374c1.914.023 3.601-1.394 3.617-3.374a6.2 6.2 0 0 0-1.081-3.5a7.7 7.7 0 0 0-3.187-2.853ZM9.453.5a4 4 0 0 1 4 4m-4-1.5a1.5 1.5 0 0 1 1.5 1.5M4.547.5a4 4 0 0 0-4 4m4-1.5a1.5 1.5 0 0 0-1.5 1.5"></svg:path>`,
})
export class StreamlineFireAlarm2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFireExtinguisherSignIcon],svg[streamline-fire-extinguisher-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 13.5h-4a1 1 0 0 1-1-1v-5a3 3 0 0 1 6 0v5a1 1 0 0 1-1 1m-2-9v-2"></svg:path><svg:path d="M.5 6.5v-2a2 2 0 0 1 2-2h7m0 .61V1.89a.5.5 0 0 1 .379-.485l3-.75a.5.5 0 0 1 .621.485v2.72a.5.5 0 0 1-.621.485l-3-.75A.5.5 0 0 1 9.5 3.11M8.5 8h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2"></svg:path></svg:g>`,
})
export class StreamlineFireExtinguisherSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFireworksRocketIcon],svg[streamline-fireworks-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.033 7.92L.852 13.102M7 9.006l-.16.16a2 2 0 0 0-.005 2.815l.332.336m1.188-9.809l3.09 3.09L8.45 9.535a.5.5 0 0 1-.751.051L4.367 6.254a.5.5 0 0 1 .05-.752z"></svg:path><svg:path d="M7.936 2.09a.7.7 0 0 1-.17-.263a.54.54 0 0 1-.027-.282a.4.4 0 0 1 .11-.231q.092-.092.232-.111l4.357-.406a.56.56 0 0 1 .263.04a.73.73 0 0 1 .403.403a.56.56 0 0 1 .04.263l-.394 4.37a.4.4 0 0 1-.11.23a.4.4 0 0 1-.232.111a.54.54 0 0 1-.274-.025a.7.7 0 0 1-.259-.16l-3.939-3.94Zm2.088 8.488l.451.45m2.35-.45l-.452.45m-2.349 2.074l.451-.452m2.35.452l-.452-.452"></svg:path></svg:g>`,
})
export class StreamlineFireworksRocketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFistIcon],svg[streamline-fist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.901 13.407v-2.464c-1.304-.452-2.18-1.97-2.18-3.754c0-1.063.24-2.174 1.42-2.174h2.993a1.111 1.111 0 0 1 .322 2.174l-1.71.519c.874 0 1.948.83 1.925 1.905m3.144 3.795v-2.465s.587-.293 1.2-.88c1.181-1.131 1.335-2.919 1.016-4.523c-.107-.534-.26-1.076-.477-1.532m-8.886.934V3.056a1.478 1.478 0 0 1 2.957 0v1.886"></svg:path><svg:path d="M5.625 4.554V2.072a1.48 1.48 0 1 1 2.959 0v2.482a1.48 1.48 0 0 1-1.365 1.474"></svg:path><svg:path d="M8.584 3.057a1.479 1.479 0 1 1 2.957 0v1.27a1.479 1.479 0 1 1-2.957 0z"></svg:path></svg:g>`,
})
export class StreamlineFistIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFitToHeightSquareIcon],svg[streamline-fit-to-height-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 13.5h-7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3m-3.5-3v-7"></svg:path><svg:path d="m9 5.5l-2-2l-2 2m0 3l2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineFitToHeightSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlash1Icon],svg[streamline-flash-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.25.5L2 5.81a.5.5 0 0 0 .46.69h2.79l-2 7l8.59-8.14a.5.5 0 0 0-.34-.86H7.75l2-4z"></svg:path>`,
})
export class StreamlineFlash1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlash2Icon],svg[streamline-flash-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 .5v5h3.5l-5.5 8v-5H2.5z"></svg:path>`,
})
export class StreamlineFlash2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlash3Icon],svg[streamline-flash-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.502 5.424L4.58 1.486A1 1 0 0 1 5.544.75h1.647a1 1 0 0 1 .965 1.263l-.594 2.175h1.589a1 1 0 0 1 .943 1.331L8.75 9.344h2.75l-5.125 4.125l-3.188-4.125h2.344l.782-2.656H4.466a1 1 0 0 1-.965-1.264Z"></svg:path>`,
})
export class StreamlineFlash3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlashOffIcon],svg[streamline-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13M5.19 5.19L8.5.5V5h3L8.81 8.81m-1.66 2.35L5.5 13.5V9h-3l1.41-2"></svg:path>`,
})
export class StreamlineFlashOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlipVerticalArrow2Icon],svg[streamline-flip-vertical-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.5l-4-4l-4 4zm0-13l-4 4l-4-4zM13.5 7h-1m-2 0h-1m-2 0h-1m-2 0h-1m-2 0h-1"></svg:path>`,
})
export class StreamlineFlipVerticalArrow2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlipVerticalCircle1Icon],svg[streamline-flip-vertical-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h13a6.5 6.5 0 1 1-13 0M13 4.39a6 6 0 0 0-.76-1.3a6.3 6.3 0 0 0-1-1.09M1.05 4.39c.199-.463.454-.9.76-1.3A6.3 6.3 0 0 1 2.85 2M8.5.67a6.7 6.7 0 0 0-3 0"></svg:path>`,
})
export class StreamlineFlipVerticalCircle1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlipVerticalSquare2Icon],svg[streamline-flip-vertical-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5v-1a1 1 0 0 0-1-1h-1m-3 0h-3m-5 2v-1a1 1 0 0 1 1-1h1m-2 9v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3m-13-4V7h13V5.5"></svg:path>`,
})
export class StreamlineFlipVerticalSquare2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFloppyDiskIcon],svg[streamline-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 12.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V4.91a1 1 0 0 1 .29-.7L4.21.79a1 1 0 0 1 .7-.29h7.59a1 1 0 0 1 1 1z"></svg:path><svg:path d="M10.5 13.5V9a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v4.5m7-13V4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V.5"></svg:path></svg:g>`,
})
export class StreamlineFloppyDiskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlowerIcon],svg[streamline-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.75c.828 0 1.5-.667 1.5-1.49S7.828 5.77 7 5.77s-1.5.667-1.5 1.49s.672 1.49 1.5 1.49"></svg:path><svg:path d="M13.37 5.34a2.57 2.57 0 0 0-3.24-1.64a2.3 2.3 0 0 0-.65.3a2.58 2.58 0 1 0-4.96 0a2.3 2.3 0 0 0-.65-.31a2.561 2.561 0 1 0-1.59 4.87a3 3 0 0 0 .72.12a3 3 0 0 0-.5.51a2.54 2.54 0 0 0 .57 3.57a2.59 2.59 0 0 0 3.6-.56a2.5 2.5 0 0 0 .33-.64q.123.345.34.64a2.59 2.59 0 0 0 4.283-.17a2.54 2.54 0 0 0-.113-2.84a3 3 0 0 0-.5-.51a3 3 0 0 0 .71-.12a2.55 2.55 0 0 0 1.65-3.22"></svg:path></svg:g>`,
})
export class StreamlineFlowerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFlowerAltIcon],svg[streamline-flower-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 13.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1"></svg:path><svg:path d="M10 6.5a3 3 0 1 1-6 0V4.31a.5.5 0 0 1 .72-.45L7 5l2.28-1.14a.5.5 0 0 1 .72.45zm-3 3v4m0 0L9.5 11M7 13.5L4.5 11"></svg:path></svg:g>`,
})
export class StreamlineFlowerAltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFluMaskIcon],svg[streamline-flu-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10.25c2.5 0 3.5-1 3.5-1v-5.5h-7v5.5s1 1 3.5 1m-1-4h2m-4.5-2.5H2.268C1.29 3.75.5 4.541.5 5.518v0c0 .469.186.918.518 1.25L3.5 9.25m7-5.5h1.232c.977 0 1.768.791 1.768 1.768v0c0 .469-.186.918-.518 1.25L10.5 9.25"></svg:path>`,
})
export class StreamlineFluMaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFocusPointsIcon],svg[streamline-focus-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5h-1a1 1 0 0 0-1 1v1m13 0v-1a1 1 0 0 0-1-1h-1m0 11h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m4.5-5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-4 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m8 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-4 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class StreamlineFocusPointsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFolderAddIcon],svg[streamline-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 5.5v5M4.5 8h5m-9 4.25V1.75a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1"></svg:path>`,
})
export class StreamlineFolderAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFolderCheckIcon],svg[streamline-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 12.25V1.75a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1"></svg:path><svg:path d="M4.5 9L6 10l3-4"></svg:path></svg:g>`,
})
export class StreamlineFolderCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFolderDeleteIcon],svg[streamline-folder-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.25V1.75a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1M4.5 8h5"></svg:path>`,
})
export class StreamlineFolderDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodBaguetteCookBreadGlutenDrinkCookingNutritionBaguetteFoodIcon],svg[streamline-food-baguette-cook-bread-gluten-drink-cooking-nutrition-baguette-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.636 6.93l6.468-5.074a3 3 0 0 1 4.212.509l.975 1.243a1 1 0 0 1-.17 1.404l-9.615 7.542a1 1 0 0 1-1.404-.17l-.975-1.243a3 3 0 0 1 .51-4.212Zm1.234-.97l1.56 2m2.03-4.82l1.57 2"></svg:path>`,
})
export class StreamlineFoodBaguetteCookBreadGlutenDrinkCookingNutritionBaguetteFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodBarbequePotCookGrillBbqDrinkCookingNutritionPotBarbecueGrillingFoodCauldronIcon],svg[streamline-food-barbeque-pot-cook-grill-bbq-drink-cooking-nutrition-pot-barbecue-grilling-food-cauldron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 12a6.51 6.51 0 0 0 6.48-6a.5.5 0 0 0-.48-.5H1a.5.5 0 0 0-.48.5A6.51 6.51 0 0 0 7 12Zm-2.95-.71L3.5 13.5m6.45-2.21l.55 2.21M3.5 3V2m7 1V2M7 3V.5"></svg:path>`,
})
export class StreamlineFoodBarbequePotCookGrillBbqDrinkCookingNutritionPotBarbecueGrillingFoodCauldronIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodBurgerDrinkBurgerFastCookCookingNutritionFoodIcon],svg[streamline-food-burger-drink-burger-fast-cook-cooking-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 .5h6A3.5 3.5 0 0 1 13.5 4v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v0A3.5 3.5 0 0 1 4 .5Zm-3.5 7h13M13 10H7l-1.5 1.5l-3-1.5H1a.5.5 0 0 0-.5.5h0a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3h0a.5.5 0 0 0-.5-.5Z"></svg:path>`,
})
export class StreamlineFoodBurgerDrinkBurgerFastCookCookingNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodCakeCandleBirthdayEventSpecialSweetCakeBakeIcon],svg[streamline-food-cake-candle-birthday-event-special-sweet-cake-bake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y="5.5" rx="1"></svg:rect><svg:path d="M3 3.5v-2m4 2v-2m4 2v-2m2.5 8.5H13a2 2 0 0 1-2-2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-2 2H.5"></svg:path></svg:g>`,
})
export class StreamlineFoodCakeCandleBirthdayEventSpecialSweetCakeBakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodCandyCaneCandySweetCaneChristmasIcon],svg[streamline-food-candy-cane-candy-sweet-cane-christmas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 0 3 0V5a4.5 4.5 0 0 0-9 0v1a1.5 1.5 0 0 0 3 0Zm3 5l3-3M8.42 4.51L9.95 1.6M5.86 4.02L3.03 2.88"></svg:path>`,
})
export class StreamlineFoodCandyCaneCandySweetCaneChristmasIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodCheese1CookCheeseAnimalProductsCookingNutritionDairyFoodIcon],svg[streamline-food-cheese-1-cook-cheese-animal-products-cooking-nutrition-dairy-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.59 5.75H13M9.09.77L9 .75L.75 5.6A.5.5 0 0 0 .5 6v1.75c1 0 2.5 0 2.5 1.75S1.47 11.25.5 11.25v1.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-7A5.88 5.88 0 0 0 9.09.77Z"></svg:path><svg:circle cx="10" cy="8.25" r=".5"></svg:circle><svg:circle cx="6.5" cy="10.25" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineFoodCheese1CookCheeseAnimalProductsCookingNutritionDairyFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodCheese2CookCheeseAnimalProductsCookingNutritionDairyFoodIcon],svg[streamline-food-cheese-2-cook-cheese-animal-products-cooking-nutrition-dairy-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.09.77L9 .75L.75 5.61A.47.47 0 0 0 .5 6v6.71a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-7A5.88 5.88 0 0 0 9.09.77ZM.59 5.75H13"></svg:path><svg:path d="M.5 10.42h0l.08-.07A2 2 0 0 1 2 9.75a2 2 0 0 1 2 2a2 2 0 0 1-.59 1.41l-.08.09"></svg:path><svg:circle cx="9" cy="9.25" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineFoodCheese2CookCheeseAnimalProductsCookingNutritionDairyFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodCherriesCookPlantCherryPlantsDrinkCookingNutritionVegetarianFruitFoodIcon],svg[streamline-food-cherries-cook-plant-cherry-plants-drink-cooking-nutrition-vegetarian-fruit-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3.36" cy="10.9" r="2.6"></svg:circle><svg:circle cx="10.64" cy="9.86" r="2.6"></svg:circle><svg:path d="M9.41 7.57A10.36 10.36 0 0 1 6 .5a13.78 13.78 0 0 0-2.6 7.8M3.36.5h5.2"></svg:path></svg:g>`,
})
export class StreamlineFoodCherriesCookPlantCherryPlantsDrinkCookingNutritionVegetarianFruitFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksBeerMugBeerCookBreweryDrinkMugCookingNutritionBrewBrewingFoodIcon],svg[streamline-food-drinks-beer-mug-beer-cook-brewery-drink-mug-cooking-nutrition-brew-brewing-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5.5h8a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a1 1 0 0 1 1-1Zm9 2.5h2a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-2M3.75 4v5.5M7.25 4v5.5"></svg:path>`,
})
export class StreamlineFoodDrinksBeerMugBeerCookBreweryDrinkMugCookingNutritionBrewBrewingFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksCocktail1CookAlcoholFoodCocktailDrinkCookingNutritionAlcoholicBeverageGlassIcon],svg[streamline-food-drinks-cocktail-1-cook-alcohol-food-cocktail-drink-cooking-nutrition-alcoholic-beverage-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 8.5L2.48 1.26A.5.5 0 0 1 2.9.5h8.2a.5.5 0 0 1 .42.76Zm0 0v5m-2.5 0h5M3.56 3h6.88"></svg:path>`,
})
export class StreamlineFoodDrinksCocktail1CookAlcoholFoodCocktailDrinkCookingNutritionAlcoholicBeverageGlassIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksCocktailGlassCookAlcoholFoodCocktailDrinkCookingAlcoholicBeverageGlassIcon],svg[streamline-food-drinks-cocktail-glass-cook-alcohol-food-cocktail-drink-cooking-alcoholic-beverage-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.71.5a.48.48 0 0 0-.46.31a.49.49 0 0 0 .1.54L7 7l5.65-5.65a.49.49 0 0 0 .1-.54a.48.48 0 0 0-.46-.31ZM7 7v6.5m-3 0h6"></svg:path>`,
})
export class StreamlineFoodDrinksCocktailGlassCookAlcoholFoodCocktailDrinkCookingAlcoholicBeverageGlassIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksCocktailShakerAlcoholDrinkMixShakeCocktailIcon],svg[streamline-food-drinks-cocktail-shaker-alcohol-drink-mix-shake-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 6l-.89 6.62a1 1 0 0 1-1 .88H4.38a1 1 0 0 1-1-.88L2.5 6m8.23-2.32a1 1 0 0 0-1-.68H4.22a1 1 0 0 0-.95.68L2.5 6h9Z"></svg:path><svg:path d="M8.5 3V1.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V3"></svg:path></svg:g>`,
})
export class StreamlineFoodDrinksCocktailShakerAlcoholDrinkMixShakeCocktailIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksCoffeeMugCoffeeCookCupDrinkMugCookingNutritionCafeCaffeineFoodIcon],svg[streamline-food-drinks-coffee-mug-coffee-cook-cup-drink-mug-cooking-nutrition-cafe-caffeine-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5.5h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1Zm6 1h.5a2.5 2.5 0 0 1 0 5H9M4 .5v2m3-2v2"></svg:path>`,
})
export class StreamlineFoodDrinksCoffeeMugCoffeeCookCupDrinkMugCookingNutritionCafeCaffeineFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksMilkCanisterMilkDairyCanisterDrinkIcon],svg[streamline-food-drinks-milk-canister-milk-dairy-canister-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 7.5l-1.5-2h-5L3 7.5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1Zm0 0l2.5-2M3 7.5l-2.5-2m4-5h5a1 1 0 0 1 1 1V3h0h-7h0V1.5a1 1 0 0 1 1-1Zm0 2.5v2.5m5-2.5v2.5"></svg:path>`,
})
export class StreamlineFoodDrinksMilkCanisterMilkDairyCanisterDrinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksTeaCupHerbalCookTeaTisaneCupDrinkCookingNutritionMugFoodIcon],svg[streamline-food-drinks-tea-cup-herbal-cook-tea-tisane-cup-drink-cooking-nutrition-mug-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8a.5.5 0 0 1 .5.5V9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4.5A.5.5 0 0 1 2 4ZM.5 13.5h13m-3-8.5h1a2 2 0 0 1 2 2h0a2 2 0 0 1-2 2h-1M3 .5v1m5-1v1M5.5.5v1"></svg:path>`,
})
export class StreamlineFoodDrinksTeaCupHerbalCookTeaTisaneCupDrinkCookingNutritionMugFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksTeapotTeaPotDrinkHotHerbIcon],svg[streamline-food-drinks-teapot-tea-pot-drink-hot-herb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 6a5.51 5.51 0 0 0-4.46 2.28L1.5 7l-1 1l2 3.5v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1A5.5 5.5 0 0 0 8 6Zm0 0V4.5"></svg:path><svg:path d="M4 7.73V4.5a4 4 0 0 1 8 0v3.23"></svg:path></svg:g>`,
})
export class StreamlineFoodDrinksTeapotTeaPotDrinkHotHerbIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksWaterGlassGlassWaterJuiceDrinkLiquidIcon],svg[streamline-food-drinks-water-glass-glass-water-juice-drink-liquid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.2 11.73a2 2 0 0 1-2 1.77H4.78a2 2 0 0 1-2-1.77L1.5.5h11ZM1.96 4.5h10.08"></svg:path>`,
})
export class StreamlineFoodDrinksWaterGlassGlassWaterJuiceDrinkLiquidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksWineBottleCookBottleWineDrinkCookingNutritionFoodIcon],svg[streamline-food-drinks-wine-bottle-cook-bottle-wine-drink-cooking-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.25 4V1a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v3h0a3.36 3.36 0 0 0-1.5 2.8v5.7a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V6.8A3.36 3.36 0 0 0 8.25 4Zm-4 3.5h5.5m0 3.5h-5.5"></svg:path>`,
})
export class StreamlineFoodDrinksWineBottleCookBottleWineDrinkCookingNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksWineGlassDrinkCookGlassCookingWineNutritionFoodIcon],svg[streamline-food-drinks-wine-glass-drink-cook-glass-cooking-wine-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.67.5a1 1 0 0 0-1 .89C2.56 2.45 2.5 4.05 2.5 4.5c0 2.62 2 4 4.5 4s4.5-1.38 4.5-4c0-.45-.06-2-.17-3.11a1 1 0 0 0-1-.89ZM7 8.5v5m-2 0h4"></svg:path>`,
})
export class StreamlineFoodDrinksWineGlassDrinkCookGlassCookingWineNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrumStick1CookAnimalDrumsticksProductsChickenCookingNutritionFoodIcon],svg[streamline-food-drum-stick-1-cook-animal-drumsticks-products-chicken-cooking-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.49 9.6a1.66 1.66 0 0 0-3-.79l-1-1s-.08-.05-.11-.08A5.6 5.6 0 0 0 8 1.87a4.15 4.15 0 0 0-6.13 0A4.16 4.16 0 0 0 1.83 8a5.58 5.58 0 0 0 6 1.34a.56.56 0 0 0 0 .08L9 10.58A1.63 1.63 0 0 0 8.43 12a1.66 1.66 0 0 0 3.31-.34a1.6 1.6 0 0 0-.05-.21H12a1.65 1.65 0 0 0 1.49-1.85Z"></svg:path>`,
})
export class StreamlineFoodDrumStick1CookAnimalDrumsticksProductsChickenCookingNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodFishCookCookingFishSeafoodNutritionFoodIcon],svg[streamline-food-fish-cook-cooking-fish-seafood-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.23 11.06a5 5 0 0 0 2.63-2.14a2.88 2.88 0 0 0 1.25 1A1 1 0 0 0 13.5 9V6.39a1 1 0 0 0-1.39-.92a2.83 2.83 0 0 0-1.25 1c-1-1.56-3.72-2.77-6.45-2.77a4 4 0 0 0-3.91 4a4 4 0 0 0 4.16 3.75h1.08"></svg:path><svg:circle cx="4" cy="6.69" r=".5"></svg:circle><svg:path d="M3.23 3.87C4 2.68 5.81 1.34 9.82 1.8a5.16 5.16 0 0 0 0 3.57M4.64 9.53a3.5 3.5 0 0 0 4 2.76L7.63 9"></svg:path></svg:g>`,
})
export class StreamlineFoodFishCookCookingFishSeafoodNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodIceCream1CookFrozenBitePopsicleCreamIceCookingNutritionFreezerColdFoodIcon],svg[streamline-food-ice-cream-1-cook-frozen-bite-popsicle-cream-ice-cooking-nutrition-freezer-cold-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 10v2.5a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1V10m3.75-7A1.75 1.75 0 0 1 8 1.25a1.74 1.74 0 0 1 .1-.56A3.63 3.63 0 0 0 7 .5A3.5 3.5 0 0 0 3.5 4v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a3.63 3.63 0 0 0-.19-1.1a1.74 1.74 0 0 1-.56.1Z"></svg:path>`,
})
export class StreamlineFoodIceCream1CookFrozenBitePopsicleCreamIceCookingNutritionFreezerColdFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodIceCream2CookFrozenFoodPopsicleFreezerNutritionCreamStickColdIceCookingIcon],svg[streamline-food-ice-cream-2-cook-frozen-food-popsicle-freezer-nutrition-cream-stick-cold-ice-cooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="9" x="3" y=".5" rx="1"></svg:rect><svg:path d="M5.5 3v3.5m3-3.5v3.5m0 3V12a1.5 1.5 0 0 1-3 0V9.5"></svg:path></svg:g>`,
})
export class StreamlineFoodIceCream2CookFrozenFoodPopsicleFreezerNutritionCreamStickColdIceCookingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodIceCream3CookFrozenConeCreamIceCookingNutritionFreezerColdFoodIcon],svg[streamline-food-ice-cream-3-cook-frozen-cone-cream-ice-cooking-nutrition-freezer-cold-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.36 6.48l-2.87 6.7a.54.54 0 0 1-1 0l-2.85-6.7"></svg:path><svg:circle cx="4.88" cy="4.75" r="2.13"></svg:circle><svg:path d="M4.88 2.63a2.12 2.12 0 1 1 4.24 0"></svg:path><svg:circle cx="9.13" cy="4.75" r="2.13"></svg:circle></svg:g>`,
})
export class StreamlineFoodIceCream3CookFrozenConeCreamIceCookingNutritionFreezerColdFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareBowlChopStickCookSoupBowlChopsticksCookingNutritionAsianFoodIcon],svg[streamline-food-kitchenware-bowl-chop-stick-cook-soup-bowl-chopsticks-cooking-nutrition-asian-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5A6.5 6.5 0 0 0 13.5 7H.5A6.5 6.5 0 0 0 7 13.5ZM7.5 5l3-4.5M9 5.5l3.5-3"></svg:path>`,
})
export class StreamlineFoodKitchenwareBowlChopStickCookSoupBowlChopsticksCookingNutritionAsianFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareChefToqueHatCookGearChefCookingNutritionToolsClothesHatClothingFoodIcon],svg[streamline-food-kitchenware-chef-toque-hat-cook-gear-chef-cooking-nutrition-tools-clothes-hat-clothing-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 13.5h9m1.93-10.1a2.49 2.49 0 0 0-4.09-1.26a2.49 2.49 0 0 0-4.68 0A2.49 2.49 0 0 0 .57 3.4A2.51 2.51 0 0 0 2.5 6.45V10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6.45a2.51 2.51 0 0 0 1.93-3.05ZM2.5 8.5h9"></svg:path>`,
})
export class StreamlineFoodKitchenwareChefToqueHatCookGearChefCookingNutritionToolsClothesHatClothingFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareForkSpoonForkSpoonFoodDineCookUtensilsEatRestaurantDiningIcon],svg[streamline-food-kitchenware-fork-spoon-fork-spoon-food-dine-cook-utensils-eat-restaurant-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="10.6" cy="3.5" rx="2.4" ry="3"></svg:ellipse><svg:path d="M10.6 6.5v7M3.5.5v13M6 .5V3a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 1 3V.5"></svg:path></svg:g>`,
})
export class StreamlineFoodKitchenwareForkSpoonForkSpoonFoodDineCookUtensilsEatRestaurantDiningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareMicrowaveCookFoodAppliancesCookingNutritionApplianceMicrowaveIcon],svg[streamline-food-kitchenware-microwave-cook-food-appliances-cooking-nutrition-appliance-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2.5" rx=".5"></svg:rect><svg:rect width="6.5" height="5" x="2.5" y="4.5" rx=".5"></svg:rect><svg:path d="M11 5h.5M11 6.5h.5M11.25 9h0"></svg:path></svg:g>`,
})
export class StreamlineFoodKitchenwareMicrowaveCookFoodAppliancesCookingNutritionApplianceMicrowaveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareNoFoodAllowedForkSpoonFoodDineCookUtensilsEatRestaurantNotAllowedIcon],svg[streamline-food-kitchenware-no-food-allowed-fork-spoon-food-dine-cook-utensils-eat-restaurant-not-allowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5.5v10M6 .5V3a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 1 3V.5m-.5 13l13-13m-1 5A14.61 14.61 0 0 1 13 10H8.5m0-4.5v-5a7.41 7.41 0 0 1 2.66 2.34M8.5 13.5V9"></svg:path>`,
})
export class StreamlineFoodKitchenwareNoFoodAllowedForkSpoonFoodDineCookUtensilsEatRestaurantNotAllowedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareRefrigeratorFridgeCookAppliancesCookingNutritionFreezerApplianceFoodIcon],svg[streamline-food-kitchenware-refrigerator-fridge-cook-appliances-cooking-nutrition-freezer-appliance-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9" height="12" x="2.5" y=".5" rx="1"></svg:rect><svg:path d="M2.5 6h9m-7-3v.5m-.5 9v1m6-1v1"></svg:path></svg:g>`,
})
export class StreamlineFoodKitchenwareRefrigeratorFridgeCookAppliancesCookingNutritionFreezerApplianceFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareServingDomeCookToolDomeKitchenServingPaltterDishToolsFoodIcon],svg[streamline-food-kitchenware-serving-dome-cook-tool-dome-kitchen-serving-paltter-dish-tools-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 3h0a6.5 6.5 0 0 1 6.5 6.5v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v0A6.5 6.5 0 0 1 7 3Zm0 0V1.5m-6.5 11h13"></svg:path>`,
})
export class StreamlineFoodKitchenwareServingDomeCookToolDomeKitchenServingPaltterDishToolsFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareSpoonPlateForkPlateFoodDineCookUtensilsEatRestaurantDiningIcon],svg[streamline-food-kitchenware-spoon-plate-fork-plate-food-dine-cook-utensils-eat-restaurant-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v2.25a2.5 2.5 0 0 0 5 0V.5M3 .5v13m10.5 0a6.5 6.5 0 0 1 0-13"></svg:path><svg:path d="M13.5 10.5a3.5 3.5 0 0 1 0-7"></svg:path></svg:g>`,
})
export class StreamlineFoodKitchenwareSpoonPlateForkPlateFoodDineCookUtensilsEatRestaurantDiningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodMeatCookMeatCownSliceOrganicCookingNutritionFoodIcon],svg[streamline-food-meat-cook-meat-cown-slice-organic-cooking-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 5.44V4.5a2 2 0 0 1 2-2h6.05a.91.91 0 0 1 .95.84v3.82a.91.91 0 0 1-.95.84H8.8"></svg:path><svg:path d="M13.5 9.24v2.88a1.38 1.38 0 0 1-1.38 1.38H6.79a1.38 1.38 0 0 1-1.33-1h0a1.37 1.37 0 0 0-1.32-1h-.56A3.08 3.08 0 0 1 .5 8.42V4.56"></svg:path><svg:path d="M11.5.5a2 2 0 0 1 2 2v6.74a1.38 1.38 0 0 1-1.38 1.38H8a1.38 1.38 0 0 1-1.33-1h0a1.37 1.37 0 0 0-1.32-1h-.79a4.06 4.06 0 0 1 0-8.12Z"></svg:path><svg:circle cx="5.33" cy="5.14" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineFoodMeatCookMeatCownSliceOrganicCookingNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodPizzaDrinkCookFastCookingNutritionPizzaFoodIcon],svg[streamline-food-pizza-drink-cook-fast-cooking-nutrition-pizza-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.75.5L8 6l5.5-1.75A3.75 3.75 0 0 0 9.75.5Z"></svg:path><svg:path d="M7.5.52L7 .5A6.5 6.5 0 1 0 13.5 7v-.5"></svg:path><svg:circle cx="5.5" cy="9.5" r=".5"></svg:circle><svg:circle cx="4" cy="5" r=".5"></svg:circle><svg:circle cx="10.5" cy="8" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineFoodPizzaDrinkCookFastCookingNutritionPizzaFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodPopcornCookCornMovieSnackCookingNutritionBakeIcon],svg[streamline-food-popcorn-cook-corn-movie-snack-cooking-nutrition-bake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.56 6l.83 6.62a1 1 0 0 0 1 .88h5.23a1 1 0 0 0 1-.88L11.44 6"></svg:path><svg:path d="M11 3.07a1.49 1.49 0 0 0-.36.05a1.81 1.81 0 0 0 .14-.69A2 2 0 0 0 8.76.5A2 2 0 0 0 7 1.56A2 2 0 0 0 5.24.5a2 2 0 0 0-2 1.93a1.81 1.81 0 0 0 .14.69A1.49 1.49 0 0 0 3 3.07a1.5 1.5 0 1 0 0 3a1.56 1.56 0 0 0 1.2-.56a1.53 1.53 0 0 0 1.44 1A1.55 1.55 0 0 0 7 5.76a1.55 1.55 0 0 0 1.32.74a1.53 1.53 0 0 0 1.44-1a1.56 1.56 0 0 0 1.2.56a1.5 1.5 0 1 0 0-3Z"></svg:path></svg:g>`,
})
export class StreamlineFoodPopcornCookCornMovieSnackCookingNutritionBakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodSteakCookGrillSteakBbqCookingNutritionBarbecueGrillingFoodIcon],svg[streamline-food-steak-cook-grill-steak-bbq-cooking-nutrition-barbecue-grilling-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.62 2.5C4.29 2.5.5 3.15.5 6a2.75 2.75 0 0 0 3 2.44a3.55 3.55 0 0 0 1.28-.24a1 1 0 0 1 .8 0a6.41 6.41 0 0 0 3.04.8c2.7 0 4.88-1.46 4.88-3.25S11.32 2.5 8.62 2.5Z"></svg:path><svg:path d="M13.5 5.75v2.5c0 1.79-2.18 3.25-4.88 3.25a6.41 6.41 0 0 1-3.06-.73a1 1 0 0 0-.8 0a3.55 3.55 0 0 1-1.28.23a2.75 2.75 0 0 1-3-2.44V6"></svg:path><svg:circle cx="4" cy="5.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineFoodSteakCookGrillSteakBbqCookingNutritionBarbecueGrillingFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodToastBreadToastBreakfastIcon],svg[streamline-food-toast-bread-toast-breakfast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 3A2.5 2.5 0 0 0 11 .5H3A2.5 2.5 0 0 0 1.5 5v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a2.49 2.49 0 0 0 1-2Zm-5 .5l-4 4m5-1l-4 4"></svg:path>`,
})
export class StreamlineFoodToastBreadToastBreakfastIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodWaterMelonCookPlantPlantsDrinkCookingNutritionWatermelonFruitVegetarianFoodIcon],svg[streamline-food-water-melon-cook-plant-plants-drink-cooking-nutrition-watermelon-fruit-vegetarian-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.13 1L1 10.65a1.14 1.14 0 0 0 .48 1.55a12.22 12.22 0 0 0 11 0a1.14 1.14 0 0 0 .52-1.55L7.87 1a1 1 0 0 0-1.74 0Z"></svg:path><svg:path d="M12.24 9.29a12 12 0 0 1-10.48 0M5.5 7.5V8m3-.5V8M7 4.5V5"></svg:path></svg:g>`,
})
export class StreamlineFoodWaterMelonCookPlantPlantsDrinkCookingNutritionWatermelonFruitVegetarianFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodWheatCookPlantBreadGlutenGrainCookingNutritionFoodWheatIcon],svg[streamline-food-wheat-cook-plant-bread-gluten-grain-cooking-nutrition-food-wheat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.53 10.85l.84 2.35M1.98.97l.34.94m3.21 8.94l-1.75-.43m1.75.43L6.6 9.4m-1.92-.9l-1.75-.44m1.75.44l1.08-1.45m-1.92-.91l-1.75-.43m1.75.43L4.91 4.7m-1.92-.91l-1.75-.43m1.75.43l1.08-1.45m5.44 7.91l-.56 2.25M11.85.8l-.22.9m-2.12 8.55L8.38 9.01m1.13 1.24l1.57-.56M10.06 8L8.94 6.76M10.06 8l1.58-.57m-1.02-1.68L9.5 4.51m1.12 1.24l1.58-.57M11.18 3.5l-1.12-1.24m1.12 1.24l1.58-.57"></svg:path>`,
})
export class StreamlineFoodWheatCookPlantBreadGlutenGrainCookingNutritionFoodWheatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineForkKnifeIcon],svg[streamline-fork-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 13.5V.5c4 2 4.5 7.5 4.5 9.5H8.5M3.5.5v13M6 .5V3a2.5 2.5 0 0 1-2.5 2.5v0A2.5 2.5 0 0 1 1 3V.5"></svg:path>`,
})
export class StreamlineForkKnifeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineForkSpoonIcon],svg[streamline-fork-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.6 6.5c1.325 0 2.4-1.343 2.4-3s-1.075-3-2.4-3s-2.4 1.343-2.4 3s1.075 3 2.4 3m0 0v7M3.5.5v13M6 .5V3a2.5 2.5 0 0 1-2.5 2.5v0A2.5 2.5 0 0 1 1 3V.5"></svg:path>`,
})
export class StreamlineForkSpoonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFragileIcon],svg[streamline-fragile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.67.5a1 1 0 0 0-1 .89C2.56 2.45 2.5 4.05 2.5 4.5c0 2.62 2 4 4.5 4s4.5-1.38 4.5-4c0-.45-.06-2-.17-3.11a1 1 0 0 0-1-.89zM7 8.5v5m-2 0h4"></svg:path><svg:path d="m7 .5l-1.5 2l2 1.5l-1 1.5"></svg:path></svg:g>`,
})
export class StreamlineFragileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFrontCameraIcon],svg[streamline-front-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.96 6.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.083.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M4.555 8.857c.477.485 1.318.929 2.443.929s1.967-.444 2.444-.929"></svg:path><svg:path d="M13.5 4.5a1 1 0 0 0-1-1h-2L9 1.5H5l-1.5 2h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path></svg:g>`,
})
export class StreamlineFrontCameraIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGalaxy1Icon],svg[streamline-galaxy-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.013 9c3 0 5.713-2 5.713-5.083M7.013 5c-3 0-5.739 2-5.739 5.083"></svg:path><svg:path d="M5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M8.739 7.989C10.239 5.39 9.863 2.042 7.193.5M5.274 5.989c-1.5 2.598-1.137 5.97 1.533 7.511"></svg:path><svg:path d="M8.726 5.989c-1.5-2.598-4.589-3.947-7.259-2.406m3.794 4.406c1.5 2.598 4.602 3.97 7.272 2.428"></svg:path></svg:g>`,
})
export class StreamlineGalaxy1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGalaxy2Icon],svg[streamline-galaxy-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.987 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M7 9c3.5 0 6.5-2 6.5-4.5c0-3-6.5-3.5-9-2"></svg:path><svg:path d="M7 5C3.5 5 .5 7 .5 9.5c0 3 6.5 3.5 9 2"></svg:path></svg:g>`,
})
export class StreamlineGalaxy2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGameboyIcon],svg[streamline-gameboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 10.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path><svg:path d="M11.938 12.219a1 1 0 0 1-1 1H3.061a1 1 0 0 1-1-1V1.78a1 1 0 0 1 1-1h7.876a1 1 0 0 1 1 1z"></svg:path><svg:path d="M10.031 7.54H3.969V2.494h6.062zm-4.897 3.812V9.647m-.853.853h1.706"></svg:path></svg:g>`,
})
export class StreamlineGameboyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGasStationFuelPetroleumIcon],svg[streamline-gas-station-fuel-petroleum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m0 1h8m-8 3h8m0 4h3a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2v0a1 1 0 0 1-1-1V4l3-3"></svg:path><svg:path d="m10.5 5.5l2-.5V2M6 10v1"></svg:path></svg:g>`,
})
export class StreamlineGasStationFuelPetroleumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGenderEqualityIcon],svg[streamline-gender-equality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.113.86h2.69v2.69M11.802.86L8.645 4.016M6.424 9.363v4.047M4.63 11.617h3.587M3.299 6.238a3.125 3.125 0 1 0 6.25 0a3.125 3.125 0 1 0-6.25 0m2.011-.835h2.227M5.31 7.073h2.227"></svg:path>`,
})
export class StreamlineGenderEqualityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGifFormatIcon],svg[streamline-gif-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.438 4.656v4.289s0 2-2 2H2.563s-2 0-2-2V4.656s0-2 2-2h8.875s2 0 2 2M6 5.045h1.756m0 3.51H6m.878-3.51v3.51"></svg:path><svg:path d="M3.758 7.093h.878v.585a.88.88 0 0 1-.878.878h-.585a.88.88 0 0 1-.878-.878V5.923c0-.485.393-.878.878-.878h.585a.88.88 0 0 1 .828.585m4.799 2.926v-3.51h2.34m-2.34 1.608h2.047"></svg:path></svg:g>`,
})
export class StreamlineGifFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGiftIcon],svg[streamline-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3h-11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 4v5.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V7M7 3v10.5m3-13L7 3L4 .5"></svg:path>`,
})
export class StreamlineGiftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGift2Icon],svg[streamline-gift-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.276 12.235V6.393H1.724v5.842a1 1 0 0 0 1 1h8.552a1 1 0 0 0 1-1M7 13.234V6.391m6.138-1.599v.6a1 1 0 0 1-1 1H1.862a1 1 0 0 1-1-1v-.6a1 1 0 0 1 1-1h10.276a1 1 0 0 1 1 1M7 3.792C7 2.917 5.98.875 4.448.875c-2.491 0-1.584 2.917-.391 2.917m2.943 0C7 2.917 8.02.875 9.552.875c2.491 0 1.584 2.917.391 2.917"></svg:path>`,
})
export class StreamlineGift2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGiveGiftIcon],svg[streamline-give-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 2.5h-7v5h7zm-3.5 0v5M8.5.5l1.5 2l1.5-2M.5 11l2.444 2.036a2 2 0 0 0 1.28.463h6.442c.46 0 .834-.373.834-.833c0-.92-.746-1.667-1.667-1.667H5.354"></svg:path><svg:path d="m3.5 10l.75.75a1.06 1.06 0 0 0 1.5-1.5L4.586 8.085A2 2 0 0 0 3.17 7.5H.5"></svg:path></svg:g>`,
})
export class StreamlineGiveGiftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGlassesIcon],svg[streamline-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm8 0h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm-8 0h3m5 0V3a2 2 0 0 0-2-2h-1M.5 9V3a2 2 0 0 1 2-2h1"></svg:path>`,
})
export class StreamlineGlassesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGlobalLearningIcon],svg[streamline-global-learning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.366 7.318a5.506 5.506 0 1 0-7.549 3.736M.512 6.006h11.011"></svg:path><svg:path d="M4.382 8.547a9.5 9.5 0 0 1-.484-2.541A9.5 9.5 0 0 1 6.016.5a9.5 9.5 0 0 1 2.117 5.506A10 10 0 0 1 8.02 7.06m1.438 1.118l4.03 1.746l-4.03 1.746L5.43 9.924l4.03-1.746Z"></svg:path><svg:path d="m7.257 10.72l.004 1.9s.665.88 2.197.88s2.2-.88 2.2-.88v-1.9m-6.229 2.275V9.924"></svg:path></svg:g>`,
})
export class StreamlineGlobalLearningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGmailIcon],svg[streamline-gmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.743 12.003h2.65V3.088l-.812-.52C2.406 1.816.86 2.658.86 4.05v7.074c0 .486.396.88.884.88Z"></svg:path><svg:path d="M.86 4.05v1.176l3.533 2.263l2.65 1.698l2.65-1.698l3.534-2.263V4.049c0-1.392-1.547-2.234-2.723-1.48l-.81.52l-2.651 1.697l-2.65-1.698l-.812-.52C2.406 1.816.86 2.658.86 4.05"></svg:path><svg:path d="M9.693 12.003h2.65a.88.88 0 0 0 .883-.88V4.049c0-1.392-1.546-2.234-2.722-1.48l-.811.52z"></svg:path></svg:g>`,
})
export class StreamlineGmailIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoldIcon],svg[streamline-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.66 9.3a1 1 0 0 0-1-.8H2.32a1 1 0 0 0-1 .8L.5 13.5h6zm7 0a1 1 0 0 0-1-.8H9.32a1 1 0 0 0-1 .8l-.82 4.2h6z"></svg:path><svg:path d="m10 8.5l-.84-4.2a1 1 0 0 0-1-.8H5.82a1 1 0 0 0-1 .8L4 8.5m.68 0h4.64"></svg:path></svg:g>`,
})
export class StreamlineGoldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoodHealthAndWellBeingIcon],svg[streamline-good-health-and-well-being-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.097 12.468l-2.773-2.52c-1.53-1.522.717-4.423 2.773-2.045c2.104-2.33 4.303.57 2.773 2.045z"></svg:path><svg:path d="M.621 6.088h1.367l1.823 3.19l4.101-7.747l1.823 3.646"></svg:path></svg:g>`,
})
export class StreamlineGoodHealthAndWellBeingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoogleIcon],svg[streamline-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.36 5.83H7.87a.51.51 0 0 0-.51.52v1.41a.51.51 0 0 0 .51.51h2.29a2.75 2.75 0 0 1-3 2.79c-2.24 0-3.32-1.9-3.32-4.06S5 2.94 7.16 2.94a4.07 4.07 0 0 1 2.64.86a.49.49 0 0 0 .72-.22l.63-1.44a.51.51 0 0 0-.15-.63a7.07 7.07 0 0 0-3.8-1C3.56.5 1.08 3.33 1.08 7s2.49 6.5 6.08 6.5s5.76-2.56 5.76-6c0-1.1-.44-1.67-1.56-1.67"></svg:path>`,
})
export class StreamlineGoogleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoogleDriveIcon],svg[streamline-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.997 12.536L.742 8.93L4.8 1.715h4.51l4.057 7.214l-2.254 3.607zM4.798 1.715l4.51 7.214m4.06.003H5.023m-2.026 3.604l4.058-7.214"></svg:path>`,
})
export class StreamlineGoogleDriveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraduationCapIcon],svg[streamline-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7 1.367l6.5 2.817L7 7L.5 4.184z"></svg:path><svg:path d="m3.45 5.469l.006 3.064S4.529 9.953 7 9.953s3.55-1.42 3.55-1.42l-.001-3.064m-8.854 5.132v-5.89m.001 8.282a1.196 1.196 0 1 0 0-2.392a1.196 1.196 0 0 0 0 2.392"></svg:path></svg:g>`,
})
export class StreamlineGraduationCapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGramophoneIcon],svg[streamline-gramophone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.79 10.5C11.5 7 8 5 5.5 5l4-4.5s4 2 4 10m-12 0h12v2a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1M.5 8h6"></svg:path>`,
})
export class StreamlineGramophoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphIcon],svg[streamline-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v13h13"></svg:path><svg:path d="M3.5 6.5L6 9l4-6l3.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineGraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphArrowDecreaseIcon],svg[streamline-graph-arrow-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 10.5h4v-4"></svg:path><svg:path d="M13.5 10.5L7.85 4.85a.5.5 0 0 0-.7 0l-2.3 2.3a.5.5 0 0 1-.7 0L.5 3.5"></svg:path></svg:g>`,
})
export class StreamlineGraphArrowDecreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphArrowIncreaseIcon],svg[streamline-graph-arrow-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 3.5h4v4"></svg:path><svg:path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5"></svg:path></svg:g>`,
})
export class StreamlineGraphArrowIncreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphBarDecreaseIcon],svg[streamline-graph-bar-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.24.5l11.5 5.23m-2.15.81l2.15-.81l-.8-2.16M1.25 6h1.5a.5.5 0 0 1 .5.5v7H.75v-7a.5.5 0 0 1 .5-.5m5 1.5h1.5a.5.5 0 0 1 .5.5v5.5h-2.5V8a.5.5 0 0 1 .5-.5m5 1.5h1.5a.5.5 0 0 1 .5.5v4h-2.5v-4a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StreamlineGraphBarDecreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphBarIncreaseIcon],svg[streamline-graph-bar-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.24 6.54l11.5-5.23M10.59.5l2.15.81l-.8 2.15m1.31 10.04h-2.5v-7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5zm-5 0h-2.5V8a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5zm-5 0H.75v-4a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class StreamlineGraphBarIncreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphDotIcon],svg[streamline-graph-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.643.643v12.714h12.714"></svg:path><svg:path d="M4.581 3.854a1.776 1.776 0 1 1 0 3.552a1.776 1.776 0 0 1 0-3.552m7-2.968a1.776 1.776 0 1 1 0 3.551a1.776 1.776 0 0 1 0-3.551m-2.469 6.52a1.776 1.776 0 1 1 0 3.552a1.776 1.776 0 0 1 0-3.552M.643 9.424l2.534-2.706m2.953-.202L7.755 8.03m2.141-.452l1.171-3.219"></svg:path></svg:g>`,
})
export class StreamlineGraphDotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGroupMeetingCallIcon],svg[streamline-group-meeting-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.48 10.533a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283m-2.055 2.946a2.06 2.06 0 0 1 .267-.993a2.08 2.08 0 0 1 1.788-1.045a2.08 2.08 0 0 1 1.787 1.045c.172.303.263.645.267.993m4.991-2.946a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283M8.47 13.479a2.06 2.06 0 0 1 .267-.993a2.08 2.08 0 0 1 1.787-1.045a2.06 2.06 0 0 1 2.055 2.037m-5.58-9.431a1.065 1.065 0 1 0 0-2.13a1.065 1.065 0 0 0 0 2.13M5.008 6.718c.003-.337.092-.668.258-.962A2.01 2.01 0 0 1 7 4.743c.71.001 1.383.394 1.733 1.013c.166.294.255.625.259.962"></svg:path><svg:path d="M11.782.545H2.218a.72.72 0 0 0-.718.718V6c0 .397.322.718.718.718h9.564A.72.72 0 0 0 12.5 6V1.263a.72.72 0 0 0-.718-.718"></svg:path></svg:g>`,
})
export class StreamlineGroupMeetingCallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHalfStar1Icon],svg[streamline-half-star-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.018.5a.54.54 0 0 0-.49.32l-1.59 3.36a.52.52 0 0 1-.41.31L.988 5a.58.58 0 0 0-.3 1l2.56 2.63a.58.58 0 0 1 .16.5l-.64 3.7a.56.56 0 0 0 .8.6l3.2-1.74a.6.6 0 0 1 .26-.07z"></svg:path>`,
})
export class StreamlineHalfStar1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandCursorIcon],svg[streamline-hand-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.13a2 2 0 0 1 1.59 2.24l-.61 4.27a1 1 0 0 1-1 .86H4a1 1 0 0 1-.93-.63L2 10.21a2 2 0 0 1 1-2.53L4.35 7V2a1.5 1.5 0 0 1 3 0v3.5z"></svg:path>`,
})
export class StreamlineHandCursorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandGrabIcon],svg[streamline-hand-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.364 13.5v-1.496l-1.926-1.54a2 2 0 0 1-.71-1.167l-.53-2.647a1.994 1.994 0 0 1 1.216-2.243l.952-.38V2.494A1.995 1.995 0 0 1 5.772.544l5.485 1.154A1.994 1.994 0 0 1 12.84 3.65v3.008c0 1.548-.36 3.075-1.053 4.46l-.443.886V13.5M3.366 4.026V6.52"></svg:path>`,
})
export class StreamlineHandGrabIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldIcon],svg[streamline-hand-held-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 10h11M4.5 3h5m-5 2.5h5M4.5 8h3"></svg:path>`,
})
export class StreamlineHandHeldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldTabletDrawingIcon],svg[streamline-hand-held-tablet-drawing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 10h11"></svg:path><svg:path d="M4 4c.585-.827 1.71-1.79 2.5-1c1 1-2.205 3.743-1 4.5C6.816 8.327 8.764 4.176 10 5s-1.5 2.5 0 3.5"></svg:path></svg:g>`,
})
export class StreamlineHandHeldTabletDrawingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldTabletWritingIcon],svg[streamline-hand-held-tablet-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8m-11 2.5h11M3.5 3h2m-2 2.5h1"></svg:path><svg:path d="m8.994 7.506l-3 .54l.5-3.04l4.23-4.21a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42z"></svg:path></svg:g>`,
})
export class StreamlineHandHeldTabletWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHangUp1Icon],svg[streamline-hang-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.6 4.736A2.55 2.55 0 0 0 .59 7.244l-.006.502a.86.86 0 0 0 .853.853l2.146-.011a.855.855 0 0 0 .847-.847a.86.86 0 0 1 .853-.853H8.67a.847.847 0 0 1 .853.853a.855.855 0 0 0 .847.847h2.146a.863.863 0 0 0 .853-.853l-.006-.503a2.55 2.55 0 0 0-2.01-2.507a23.1 23.1 0 0 0-8.754.011Z"></svg:path>`,
})
export class StreamlineHangUp1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHangUp2Icon],svg[streamline-hang-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.58 3.486A2.55 2.55 0 0 0 .57 5.994l-.006.502a.86.86 0 0 0 .853.853l2.146-.011a.855.855 0 0 0 .847-.847a.86.86 0 0 1 .852-.853h3.389a.847.847 0 0 1 .852.853a.855.855 0 0 0 .847.847h2.146a.863.863 0 0 0 .853-.853l-.006-.503a2.55 2.55 0 0 0-2.01-2.507a23.1 23.1 0 0 0-8.753.011M7 7.938v4.718m-1.872-1.872L7 12.656l1.872-1.872"></svg:path>`,
})
export class StreamlineHangUp2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHappyFaceIcon],svg[streamline-happy-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4c1.1-.4 2-1.3 2.3-2.4M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHappyFaceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHardDiskIcon],svg[streamline-hard-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-7 10l1.75-2.75"></svg:path><svg:path d="M4.09 7A2.93 2.93 0 0 1 4 5.16a3 3 0 1 1 4.67 3.27M7.5 11H10"></svg:path></svg:g>`,
})
export class StreamlineHardDiskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHardDrive1Icon],svg[streamline-hard-drive-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 7.5h-11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"></svg:path><svg:path d="m.59 8.08l1.74-6.8A1 1 0 0 1 3.3.5h7.4a1 1 0 0 1 1 .78l1.74 6.8M3.5 10.5h3m4 .5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class StreamlineHardDrive1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading1ParagraphStylesHeadingIcon],svg[streamline-heading-1-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.394 7.655v5.095M9.696 8.719h.425c.703 0 1.274-.57 1.274-1.274m1.698 5.305H9.696M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading1ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading2ParagraphStylesHeadingIcon],svg[streamline-heading-2-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.926 12.75H9.61v-.754c0-.527.293-1.003.745-1.215l1.845-.86c.441-.206.726-.67.726-1.184c0-.714-.542-1.292-1.211-1.292h-.861c-.542 0-1.002.37-1.173.884M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading2ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading3ParagraphStylesHeadingIcon],svg[streamline-heading-3-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.538 11.866c.182.515.673.884 1.25.884h.884c.733 0 1.327-.594 1.327-1.326v-.221c0-.733-.594-1.326-1.327-1.326h-.442h.332a1.216 1.216 0 0 0 0-2.432h-.663c-.557 0-1.026.374-1.17.884M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading3ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthCare2Icon],svg[streamline-health-care-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.28 9.34a1.91 1.91 0 0 0 0-2.77a2.07 2.07 0 0 0-2.85 0L7 8L5.57 6.57a2.07 2.07 0 0 0-2.85 0a1.91 1.91 0 0 0 0 2.77L7 13.5zM7 4.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class StreamlineHealthCare2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthMedicalHeartRateHealthBeautyInformationDataBeatPulseMonitorHeartRateInfoIcon],svg[streamline-health-medical-heart-rate-health-beauty-information-data-beat-pulse-monitor-heart-rate-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.58 4.31C1.09 1.85 4.12 0 7 3.27c4.11-4.71 8.5 1.13 5.52 4.14L7 12.5l-3.23-3"></svg:path><svg:path d="M.5 7H3l1.5-2l2 3.5l1.5-2h1.5"></svg:path></svg:g>`,
})
export class StreamlineHealthMedicalHeartRateHealthBeautyInformationDataBeatPulseMonitorHeartRateInfoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthMedicalRibbon1RibbonMedicalCancerHealthBeautySymbolIcon],svg[streamline-health-medical-ribbon-1-ribbon-medical-cancer-health-beauty-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 13.5S10 6.39 10 3.5a2.84 2.84 0 0 0-3-3a2.84 2.84 0 0 0-3 3c0 2.89 6.5 10 6.5 10"></svg:path>`,
})
export class StreamlineHealthMedicalRibbon1RibbonMedicalCancerHealthBeautySymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthMedicalRibbon2RibbonMedicalCancerHealthBeautySymbolIcon],svg[streamline-health-medical-ribbon-2-ribbon-medical-cancer-health-beauty-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 3.14v1.5m1.51 2.51a3.62 3.62 0 0 0 1.49-3A3.29 3.29 0 0 0 7 .64a3.28 3.28 0 0 0-3 3.5a3.62 3.62 0 0 0 1.49 3l-3.21 3.68a.51.51 0 0 0 0 .65l1.37 1.7a.47.47 0 0 0 .38.19a.52.52 0 0 0 .39-.17A23 23 0 0 0 7 9.64a23 23 0 0 0 2.6 3.55a.52.52 0 0 0 .39.17a.47.47 0 0 0 .38-.19l1.37-1.7a.5.5 0 0 0 0-.64Z"></svg:path>`,
})
export class StreamlineHealthMedicalRibbon2RibbonMedicalCancerHealthBeautySymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHearingDeaf1Icon],svg[streamline-hearing-deaf-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 13.5L.5.5m8.822 8.822c.18-.227.345-.406.464-.504c.807-1.01 2.085-1.85 1.917-4.17c-.168-2.322-2.22-3.802-5.112-3.398c-1.418.198-2.269 1.214-2.74 2.25m4.32 7.84c-.269.915-.794 1.788-2.152 1.917c-.84.08-1.245-.235-1.547-.538"></svg:path><svg:path d="M6.296 4.106c.37-.589.743-.793 1.11-.891c1.532-.408 2.704 1.515 1.38 2.943"></svg:path></svg:g>`,
})
export class StreamlineHearingDeaf1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHearingDeaf2Icon],svg[streamline-hearing-deaf-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M11.805 1.077c.449.387.757.907.93 1.512"></svg:path><svg:path stroke-linejoin="round" d="m3.262 8.618l.46.46m-2.615.606l1.494 1.493M4.31 6.468L5.804 7.96m-1.696 4.37c.282.281.658.574 1.438.5c1.262-.12 1.75-.931 2-1.781s1.125-2.032 1.5-2.344c.75-.938 1.937-1.719 1.781-3.875s-2.062-3.531-4.75-3.156C4.258 1.927 3.445 3.63 3.174 4.83"></svg:path><svg:path stroke-linejoin="round" d="M5.804 4.561c.343-.547.69-.737 1.03-.828c1.424-.379 2.513 1.408 1.282 2.734"></svg:path></svg:g>`,
})
export class StreamlineHearingDeaf2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartIcon],svg[streamline-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.004 12.383L1.53 7.424c-2.975-2.975 1.398-8.688 5.474-4.066c4.076-4.622 8.43 1.11 5.475 4.066z"></svg:path>`,
})
export class StreamlineHeartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartRatePulseGraphIcon],svg[streamline-heart-rate-pulse-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.992 12.413L1.573 7.401c-2.953-2.966 1.355-8.71 5.419-4.064c4.064-4.632 8.412 1.111 5.418 4.064z"></svg:path><svg:path d="M3.515 6.753h1.53l1.032-1.968L7.64 8.41l1.343-1.657h1.5"></svg:path></svg:g>`,
})
export class StreamlineHeartRatePulseGraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartRateSearchIcon],svg[streamline-heart-rate-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 6a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m9.495 3.995L13 13"></svg:path><svg:path d="M2.516 6.156h1.53l1.032-1.968l1.563 3.625l1.343-1.657h1.5"></svg:path></svg:g>`,
})
export class StreamlineHeartRateSearchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartsSymbolIcon],svg[streamline-hearts-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.266 11.908a1.773 1.773 0 0 1-2.527 0L1.49 7.7c-2.84-2.842.87-9.12 5.511-4.478c4.634-4.633 8.344 1.644 5.511 4.478z"></svg:path>`,
})
export class StreamlineHeartsSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpChat2Icon],svg[streamline-help-chat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.998.552a6.448 6.448 0 0 0-5.367 10.02L.55 13.447l3.62-.655A6.448 6.448 0 1 0 6.999.552Z"></svg:path><svg:path d="M5.51 5.512A1.488 1.488 0 1 1 6.998 7v.992M7 10.472a.248.248 0 0 1 0-.496m0 .496a.248.248 0 1 0 0-.496"></svg:path></svg:g>`,
})
export class StreamlineHelpChat2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpQuestion1Icon],svg[streamline-help-question-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M5.25 5.25a1.75 1.75 0 0 1 2.093-1.717A1.752 1.752 0 0 1 8.62 5.92A1.75 1.75 0 0 1 7.002 7v1.167M7 10.459a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHelpQuestion1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHexagramIcon],svg[streamline-hexagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5h13L7 13.5z"></svg:path><svg:path d="M.5 10.5h13L7 .5z"></svg:path></svg:g>`,
})
export class StreamlineHexagramIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy10Icon],svg[streamline-hierarchy-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 9.5v-5m8-.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M4.5.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 9h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4-3.5h-2a3 3 0 0 0-3 3"></svg:path>`,
})
export class StreamlineHierarchy10Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy13Icon],svg[streamline-hierarchy-13-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.531 7.027L2.885 9.5m8.224-5L10.344 7M6.25 6.257L7.5 7.5m5-3h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m-2 6.5h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M5.25 7.027h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M3.5 13.5h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1"></svg:path>`,
})
export class StreamlineHierarchy13Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy14Icon],svg[streamline-hierarchy-14-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.5v-4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1M7 6.5v4m-5 0v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m-11.5 2v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1m5 0v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1m5 0v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1"></svg:path>`,
})
export class StreamlineHierarchy14Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy2Icon],svg[streamline-hierarchy-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 10V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2M7 4v6M5.5 2v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m0 9v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m-5 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m10 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1"></svg:path>`,
})
export class StreamlineHierarchy2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy4Icon],svg[streamline-hierarchy-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 .5H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 9H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m6-4H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-7-1v5m4-2H7a3 3 0 0 1-3-3"></svg:path>`,
})
export class StreamlineHierarchy4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy7Icon],svg[streamline-hierarchy-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 9h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9 0h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-10 0v-5m9 5v-5a2 2 0 0 0-2-2H7"></svg:path><svg:path d="m9 .5l-2 2l2 2"></svg:path></svg:g>`,
})
export class StreamlineHierarchy7Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHighSpeedTrainFrontIcon],svg[streamline-high-speed-train-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.564 5.39c0 3.333-2.572 7.378-5.744 7.378c-3.173 0-5.744-4.045-5.744-7.379S3.647.694 6.82.694s5.744 1.361 5.744 4.695Z"></svg:path><svg:path d="M10.617 10.673c-1.012 1.243-2.341 2.095-3.797 2.095c-1.454 0-2.782-.85-3.794-2.092c.641-1.745 2.1-2.493 3.796-2.493s3.153.747 3.795 2.49m-8.473 1.593L1.076 13.27m10.78-1.004l1.068 1.003M4.497 3.365h4.648s1.271 0 1.271 1.271v0s0 1.271-1.271 1.271H4.497s-1.271 0-1.271-1.271v0s0-1.271 1.271-1.271"></svg:path></svg:g>`,
})
export class StreamlineHighSpeedTrainFrontIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHinduismIcon],svg[streamline-hinduism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.796 9.186a3.825 3.825 0 1 0 3.825-3.825M2.327 1.586A2.909 2.909 0 0 1 6.34 5.743m6.315-2.377a2.447 2.447 0 0 1-3.46 0"></svg:path><svg:path d="M11.668 11.546a3.252 3.252 0 0 0-2.253-5.294c-.62-.052-1.468.094-1.878.459m3.388-5.254a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHinduismIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHome3Icon],svg[streamline-home-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1zM7 13.5v-4"></svg:path>`,
})
export class StreamlineHome3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHome4Icon],svg[streamline-home-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 8L7 1.5L13.5 8"></svg:path><svg:path d="M2.5 6v6.5h9V6"></svg:path></svg:g>`,
})
export class StreamlineHome4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHorizontalMenuCircleIcon],svg[streamline-horizontal-menu-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHorizontalMenuCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignCircleIcon],svg[streamline-hospital-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 4.5v5m4-5v5M5 7h4m-2 6.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path>`,
})
export class StreamlineHospitalSignCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignSquareIcon],svg[streamline-hospital-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M5 4.5v5m4-5v5M5 7h4"></svg:path>`,
})
export class StreamlineHospitalSignSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotSpringIcon],svg[streamline-hot-spring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 7a2.8 2.8 0 0 1 1.5 2.24c0 1.93-2.91 3.5-6.5 3.5S.5 11.18.5 9.25A2.8 2.8 0 0 1 2 7"></svg:path><svg:path d="M4.08 2.25c-2 2.5 2 3.5 0 6m2.92-7c-2 2.5 2 5.5 0 8m2.92-7c-2 2.5 2 3.5 0 6"></svg:path></svg:g>`,
})
export class StreamlineHotSpringIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelAirConditionerIcon],svg[streamline-hotel-air-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"></svg:path><svg:path d="M11 7.5v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2m-.5 5h.1A1.4 1.4 0 0 0 4 11.1V10m7.5 2.5h-.1a1.4 1.4 0 0 1-1.4-1.4V10m-3 3.5V10"></svg:path></svg:g>`,
})
export class StreamlineHotelAirConditionerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelBed2Icon],svg[streamline-hotel-bed-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 3.5H3v-3m8 0v3H7v-3M.5 6h13"></svg:path></svg:g>`,
})
export class StreamlineHotelBed2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelLaundryIcon],svg[streamline-hotel-laundry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M9.959 9h-.841C8.383 9 7.658 8.829 7 8.5v0A4.7 4.7 0 0 0 4.882 8h-.84M10 8.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-8.5-5h11"></svg:path></svg:g>`,
})
export class StreamlineHotelLaundryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelOneStarIcon],svg[streamline-hotel-one-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5.07v4.32M5.56 6.15h.36A1.08 1.08 0 0 0 7 5.07v0m1.44 4.32H5.56"></svg:path><svg:path d="M6.039 1.282a1.135 1.135 0 0 1 1.922 0l1.866 2.952l2.432.298a1.115 1.115 0 0 1 .721 1.836l-2.029 2.327l.654 3.22a1.12 1.12 0 0 1-.442 1.126a1.14 1.14 0 0 1-1.211.067L7 11.493l-2.952 1.615a1.14 1.14 0 0 1-1.211-.067a1.13 1.13 0 0 1-.442-1.125l.653-3.221L1.02 6.368a1.115 1.115 0 0 1 .72-1.836l2.433-.298L6.04 1.282Z"></svg:path></svg:g>`,
})
export class StreamlineHotelOneStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelShowerHeadIcon],svg[streamline-hotel-shower-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 6.5a4 4 0 0 1 8 0zm2 3v1m-1.5 2v1m3.5-1v1m3.5-1v1M9 9.5v1m-2-8v-2"></svg:path>`,
})
export class StreamlineHotelShowerHeadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelTwoStarIcon],svg[streamline-hotel-two-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.44 9.451H5.56v-.614c0-.429.254-.817.647-.99l1.603-.7a1.052 1.052 0 0 0-.422-2.016H6.64c-.47 0-.87.3-1.018.72"></svg:path><svg:path d="M6.039 1.282a1.135 1.135 0 0 1 1.922 0l1.866 2.952l2.432.298a1.115 1.115 0 0 1 .721 1.836l-2.028 2.327l.653 3.22a1.13 1.13 0 0 1-.442 1.126a1.14 1.14 0 0 1-1.211.067L7 11.493l-2.952 1.615a1.14 1.14 0 0 1-1.211-.067a1.13 1.13 0 0 1-.442-1.125l.653-3.221L1.02 6.368a1.115 1.115 0 0 1 .72-1.836l2.433-.298L6.04 1.282Z"></svg:path></svg:g>`,
})
export class StreamlineHotelTwoStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHumidityNoneIcon],svg[streamline-humidity-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m8.64 12.448a4.48 4.48 0 0 1-6.619-3.98a5.5 5.5 0 0 1 .498-1.932m8.001 3.984A4.5 4.5 0 0 0 11.5 9C11.5 6.51 7 .5 7 .5S5.626 2.335 4.397 4.397"></svg:path>`,
})
export class StreamlineHumidityNoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream2Icon],svg[streamline-ice-cream-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 .5H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1M5.5 3v3.5m3-3.5v3.5m0 3V12a1.5 1.5 0 0 1-3 0V9.5"></svg:path>`,
})
export class StreamlineIceCream2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream3Icon],svg[streamline-ice-cream-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.354 6.467l-2.87 6.697a.54.54 0 0 1-.999 0L3.637 6.467"></svg:path><svg:path d="M4.876 6.867a2.129 2.129 0 1 0 0-4.258a2.129 2.129 0 0 0 0 4.258"></svg:path><svg:path d="M4.876 2.619a2.119 2.119 0 1 1 4.238 0"></svg:path><svg:path d="M9.124 6.867a2.129 2.129 0 1 0 0-4.258a2.129 2.129 0 0 0 0 4.258"></svg:path></svg:g>`,
})
export class StreamlineIceCream3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageAccessoriesLensesPhotosCameraShutterPicturePhotographyPicturesPhotoLensIcon],svg[streamline-image-accessories-lenses-photos-camera-shutter-picture-photography-pictures-photo-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:circle cx="7" cy="7" r="2.5"></svg:circle><svg:path d="M4.5 7V1M7 4.5h6M9.5 7v6M7 9.5H1"></svg:path></svg:g>`,
})
export class StreamlineImageAccessoriesLensesPhotosCameraShutterPicturePhotographyPicturesPhotoLensIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageBlurIcon],svg[streamline-image-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M5.542 2.896a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m2.917.25a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-2.917 8.708a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25M2.771 5.667a.125.125 0 1 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 3.166a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m8.458-2.666a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 3.166a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-2.77 3.021a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25M5.5 5.792a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3.021.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M5.5 8.708a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3.021.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineImageBlurIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCamera1PhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-1-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Z"></svg:path><svg:circle cx="7" cy="7.5" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineImageCamera1PhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCamera2PhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-2-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="3.75" rx="1"></svg:rect><svg:circle cx="7" cy="8.25" r="2"></svg:circle><svg:path d="M9.5 3.75v-1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.5"></svg:path></svg:g>`,
})
export class StreamlineImageCamera2PhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCameraSettingPinPhotosCameraMapPhotographyPicturesMapsSettingsPinPhotoIcon],svg[streamline-image-camera-setting-pin-photos-camera-map-photography-pictures-maps-settings-pin-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 3.5a1 1 0 0 0-1-1h-2L9 .5H5l-1.5 2h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3l2.5 4l2.5-4h3a1 1 0 0 0 1-1Z"></svg:path><svg:circle cx="7" cy="5.5" r="2"></svg:circle></svg:g>`,
})
export class StreamlineImageCameraSettingPinPhotosCameraMapPhotographyPicturesMapsSettingsPinPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCameraTripodTripodPhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-tripod-tripod-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.5v5m0-5l-4.5 5m4.5-5l4.5 5"></svg:path><svg:rect width="11" height="8" x="1.5" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="4.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineImageCameraTripodTripodPhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageFlash1FlashPowerConnectChargeElectricityLightningIcon],svg[streamline-image-flash-1-flash-power-connect-charge-electricity-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.25.5L2 5.81a.5.5 0 0 0 .46.69h2.79l-2 7l8.59-8.14a.5.5 0 0 0-.34-.86H7.75l2-4Z"></svg:path>`,
})
export class StreamlineImageFlash1FlashPowerConnectChargeElectricityLightningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageFlash2FlashPowerConnectChargeElectricityLightningIcon],svg[streamline-image-flash-2-flash-power-connect-charge-electricity-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 .5v5h3.5l-5.5 8v-5H2.5L8 .5z"></svg:path>`,
})
export class StreamlineImageFlash2FlashPowerConnectChargeElectricityLightningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoCompositionVerticalCameraPortraitFrameVerticalCompositionPhotographyPhotoIcon],svg[streamline-image-photo-composition-vertical-camera-portrait-frame-vertical-composition-photography-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.2 1.19a.52.52 0 0 0 0-.47a.49.49 0 0 0-.46-.22H3.26a.49.49 0 0 0-.41.22a.52.52 0 0 0-.05.47a14.67 14.67 0 0 1 0 11.62a.52.52 0 0 0 .05.47a.49.49 0 0 0 .41.22h7.48a.49.49 0 0 0 .41-.22a.52.52 0 0 0 0-.47a14.67 14.67 0 0 1 .05-11.62Z"></svg:path>`,
})
export class StreamlineImagePhotoCompositionVerticalCameraPortraitFrameVerticalCompositionPhotographyPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoCompsitionHorizontalCameraHorizontalPanoramaCompositionPhotographyPhotoPicturesIcon],svg[streamline-image-photo-compsition-horizontal-camera-horizontal-panorama-composition-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.81 11.2a.52.52 0 0 0 .47 0a.49.49 0 0 0 .22-.41V3.26a.49.49 0 0 0-.22-.41a.52.52 0 0 0-.47-.05a14.67 14.67 0 0 1-11.62 0a.52.52 0 0 0-.47.05a.49.49 0 0 0-.22.41v7.48a.49.49 0 0 0 .22.41a.52.52 0 0 0 .47 0a14.67 14.67 0 0 1 11.62.05Z"></svg:path>`,
})
export class StreamlineImagePhotoCompsitionHorizontalCameraHorizontalPanoramaCompositionPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoFocusFramePhotosFramePhotoCameraPhotographyPicturesFocusIcon],svg[streamline-image-photo-focus-frame-photos-frame-photo-camera-photography-pictures-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2.5" rx="1"></svg:rect><svg:path d="M11 6.5V9H8.5M3 7.5V5h2.5"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoFocusFramePhotosFramePhotoCameraPhotographyPicturesFocusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoFourPhotosCameraPicturePhotographyPicturesFourPhotoIcon],svg[streamline-image-photo-four-photos-camera-picture-photography-pictures-four-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="5" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="5" x="8.5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="5" x=".5" y="8.5" rx=".5"></svg:rect><svg:rect width="5" height="5" x="8.5" y="8.5" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineImagePhotoFourPhotosCameraPicturePhotographyPicturesFourPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoPolaroidFourPhotosCameraPolaroidPicturePhotographyPicturesFourPhotoIcon],svg[streamline-image-photo-polaroid-four-photos-camera-polaroid-picture-photography-pictures-four-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5.25" height="5.25" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="8.25" y=".5" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x=".5" y="8.25" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="8.25" y="8.25" rx=".5"></svg:rect><svg:path d="M.5 3.5h5.25m2.5 0h5.25m-5.25 7.75h5.25m-13 0h5.25"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoPolaroidFourPhotosCameraPolaroidPicturePhotographyPicturesFourPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoPolaroidPhotosPolaroidPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-photo-polaroid-photos-polaroid-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9" height="9" x=".5" y=".5" rx="1" transform="rotate(180 5 5)"></svg:rect><svg:path d="m12 4.7l.78.25a1 1 0 0 1 .64 1.27l-2.18 6.59a1 1 0 0 1-1.26.64L5.56 12M.5 7h9"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoPolaroidPhotosPolaroidPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureFlowerPhotosPhotoPictureCameraPhotographyPicturesFlowerIcon],svg[streamline-image-picture-flower-photos-photo-picture-camera-photography-pictures-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M10 6.5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V4.31a.5.5 0 0 1 .72-.45L7 5l2.28-1.14a.5.5 0 0 1 .72.45Zm-3 3v4m0 0L9.5 11M7 13.5L4.5 11"></svg:path></svg:g>`,
})
export class StreamlineImagePictureFlowerPhotosPhotoPictureCameraPhotographyPicturesFlowerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureGalleryPagesFilterPicturePaginationImageIcon],svg[streamline-image-picture-gallery-pages-filter-picture-pagination-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10.5" height="8.5" x="3" y="4" rx="1" transform="rotate(180 8.25 8.25)"></svg:rect><svg:path d="M.5 10V2.5a1 1 0 0 1 1-1h9M3.6 12.42l3.93-4.15A1 1 0 0 1 9 8.26l3.95 4.14"></svg:path></svg:g>`,
})
export class StreamlineImagePictureGalleryPagesFilterPicturePaginationImageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureLandscape1PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon],svg[streamline-image-picture-landscape-1-photos-photo-landscape-picture-photography-camera-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7.005 7)"></svg:rect><svg:circle cx="9.25" cy="4.75" r="1.75"></svg:circle><svg:path d="M9.4 13.5a7.36 7.36 0 0 0-7.4-6a7.88 7.88 0 0 0-1.5.14"></svg:path><svg:path d="M13.5 9.91A7.8 7.8 0 0 0 11 9.5a7.89 7.89 0 0 0-3.13.64"></svg:path></svg:g>`,
})
export class StreamlineImagePictureLandscape1PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon],svg[streamline-image-picture-landscape-2-photos-photo-landscape-picture-photography-camera-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M.5 11h13m-9.66 0l5.21-4.88a.5.5 0 0 1 .64 0l3.81 2.73"></svg:path><svg:circle cx="4.5" cy="4.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageSaturationIcon],svg[streamline-image-saturation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.835 11.473V4C5.84 4.902 3.85 6.615 3.85 9.081c0 1.825 1.99 2.417 2.985 2.392"></svg:path><svg:path d="M12 8.996C12 5.498 7 .5 7 .5S2 5.498 2 8.996a4.77 4.77 0 0 0 1.572 3.28C4.509 13.12 6 13.494 7 13.494s2.491-.375 3.428-1.218A4.77 4.77 0 0 0 12 8.996"></svg:path></svg:g>`,
})
export class StreamlineImageSaturationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxBlockIcon],svg[streamline-inbox-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.25 13.5a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m2.3-.95l-4.6-4.6M4.5 9.5h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24"></svg:path></svg:g>`,
})
export class StreamlineInboxBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxFavoriteIcon],svg[streamline-inbox-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.45 7.336a.59.59 0 0 1 1.1 0l.64 1.63h1.71a.61.61 0 0 1 .56.39a.59.59 0 0 1-.16.65l-1.51 1.35l.64 1.28a.58.58 0 0 1-.12.69a.61.61 0 0 1-.7.1l-1.61-.91l-1.61.88a.61.61 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28l-1.51-1.36a.59.59 0 0 1-.16-.65a.61.61 0 0 1 .56-.35h1.71zM4 9.5H1.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24"></svg:path></svg:g>`,
})
export class StreamlineInboxFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxFavoriteHeartIcon],svg[streamline-inbox-favorite-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 9.5h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24M10 8.991c1.17-2.595 3.5-1.293 3.5.651c0 2.555-3.5 3.858-3.5 3.858s-3.5-1.303-3.5-3.908c0-1.944 2.33-3.246 3.5-.601"></svg:path></svg:g>`,
})
export class StreamlineInboxFavoriteHeartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxLockIcon],svg[streamline-inbox-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 9.5h-4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24M8 9.5h5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5m.5 0v-1c0-1.1.9-2 2-2s2 .9 2 2v1"></svg:path></svg:g>`,
})
export class StreamlineInboxLockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray1Icon],svg[streamline-inbox-tray-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8H10a1 1 0 0 0-1 1a2 2 0 0 1-4 0a1 1 0 0 0-1-1H.5v4.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1zm-9-4L7 6.5L9.5 4M7 .5v6"></svg:path>`,
})
export class StreamlineInboxTray1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray2Icon],svg[streamline-inbox-tray-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8H10a1 1 0 0 0-1 1a2 2 0 0 1-4 0a1 1 0 0 0-1-1H.5v4.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1zm-9-5L7 .5L9.5 3M7 6.5v-6"></svg:path>`,
})
export class StreamlineInboxTray2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIncognitoModeIcon],svg[streamline-incognito-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.499 11.242a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6.502 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0"></svg:path><svg:path d="M5.998 11.242s0-1 1-1s1.001 1 1.001 1M.5 6.5h13M2.86 1.336A1 1 0 0 1 3.848.5h6.306a1 1 0 0 1 .986.836L12 6.5H2z"></svg:path></svg:g>`,
})
export class StreamlineIncognitoModeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIncomingCallIcon],svg[streamline-incoming-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.53 12.823a2.7 2.7 0 0 1-3.37-.36l-.38-.38a.91.91 0 0 1 0-1.28l1.6-1.59a.9.9 0 0 1 1.27 0v0a.91.91 0 0 0 1.28 0l2.55-2.55a.91.91 0 0 0 0-1.28v0a.9.9 0 0 1 0-1.27l1.54-1.6a.91.91 0 0 1 1.28 0l.38.38a2.7 2.7 0 0 1 .41 3.37a24.2 24.2 0 0 1-6.56 6.56M2 5.5h3.5V2m0 3.5l-5-5"></svg:path>`,
})
export class StreamlineIncomingCallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIndustryInnovationAndInfrastructureIcon],svg[streamline-industry-innovation-and-infrastructure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.65 11.694v-3.62l3.167-1.357l3.167 1.358v3.619L3.817 13.05z"></svg:path><svg:path d="m.65 8.067l3.167 1.357l3.167-1.357M3.817 3.122L6.983 4.48l3.167-1.357"></svg:path><svg:path d="m6.983 8.067l3.167 1.357l3.167-1.357"></svg:path><svg:path d="M3.819 6.715v-3.62l3.166-1.357l3.167 1.357v3.62L6.985 8.072zm3.164 4.979v-3.62l3.167-1.357l3.167 1.358v3.619L10.15 13.05zM3.817 9.426v3.625m6.335-3.625v3.625M6.983 4.48v3.624"></svg:path></svg:g>`,
})
export class StreamlineIndustryInnovationAndInfrastructureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationCircleIcon],svg[streamline-information-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M5.5 10h3"></svg:path><svg:path d="M7 10V6.5H6m1-2.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineInformationCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationDeskIcon],svg[streamline-information-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.901 4.317v1.364M9.9 2.662a.124.124 0 0 1-.124-.125c0-.07.056-.125.124-.125m.002.25a.125.125 0 0 0 .124-.125a.124.124 0 0 0-.124-.125M.857 12.864h12.007M1.989 6.829a1.939 1.939 0 1 0 3.878 0a1.939 1.939 0 1 0-3.878 0"></svg:path><svg:path d="M.855 12.865v-1.024a3.072 3.072 0 1 1 6.145 0v1.024m.394-6.149A3.554 3.554 0 1 0 6.33 4"></svg:path></svg:g>`,
})
export class StreamlineInformationDeskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationDeskCustomerIcon],svg[streamline-information-desk-customer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.284 3.503a1.621 1.621 0 1 0 3.242 0a1.621 1.621 0 1 0-3.242 0"></svg:path><svg:path d="M8.473 8.367v-.81a2.432 2.432 0 0 1 4.865 0v.81M6.6 8.369h6.738M3.604 5.612a1.712 1.712 0 1 0 0-3.425a1.712 1.712 0 0 0 0 3.425"></svg:path><svg:path d="M6.6 8.609a2.996 2.996 0 1 0-5.993 0v1.284h1.285l.428 3.424h2.568l.428-3.424H6.6z"></svg:path></svg:g>`,
})
export class StreamlineInformationDeskCustomerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInputBoxIcon],svg[streamline-input-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 5H13a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H7.5m-5 0H1a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 1 5h1.5M4 2.5h2m-2 9h2m-1-9v9"></svg:path>`,
})
export class StreamlineInputBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertCloudVideoIcon],svg[streamline-insert-cloud-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5.344 7.948l3.875 2.422l-3.875 2.421z"></svg:path><svg:path d="M3.353 10.364a2.67 2.67 0 1 1 0-5.33q.225-.015.45 0a3.43 3.43 0 0 1 6.71 0q.23-.015.46 0a2.67 2.67 0 0 1 0 5.33"></svg:path></svg:g>`,
})
export class StreamlineInsertCloudVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertSideIcon],svg[streamline-insert-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H8m5.5 3H8m5.5 3H8m5.5 6H8m5.5-3H8M.5 1.5v4A.5.5 0 0 0 1 6h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 5 1H1a.5.5 0 0 0-.5.5m0 7v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 5 8H1a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class StreamlineInsertSideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopLeftIcon],svg[streamline-insert-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H9m4.5 3H9m4.5 3H9m4.5 6H.5m13-3H.5M6 1H1a.5.5 0 0 0-.5.5v5A.5.5 0 0 0 1 7h5a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 6 1"></svg:path>`,
})
export class StreamlineInsertTopLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopRightIcon],svg[streamline-insert-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1H5M.5 4H5M.5 7H5M.5 13h13m-13-3h13M8 7h5a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 13 1H8a.5.5 0 0 0-.5.5v5A.5.5 0 0 0 8 7"></svg:path>`,
})
export class StreamlineInsertTopRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInstagramIcon],svg[streamline-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path><svg:path d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573V3.43Z"></svg:path><svg:path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0"></svg:path></svg:g>`,
})
export class StreamlineInstagramIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsuranceHandIcon],svg[streamline-insurance-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.315 1.031a.5.5 0 0 0-.5.5v1.407H6.409a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.406v1.406a.5.5 0 0 0 .5.5H9.94a.5.5 0 0 0 .5-.5V5.563h1.406a.5.5 0 0 0 .5-.5V3.438a.5.5 0 0 0-.5-.5H10.44V1.53a.5.5 0 0 0-.5-.5zm-7.732 9.75l2.444 2.037a2 2 0 0 0 1.28.463h6.443c.46 0 .833-.373.833-.833c0-.92-.746-1.667-1.667-1.667H5.437"></svg:path><svg:path d="m3.583 9.781l.75.75a1.06 1.06 0 1 0 1.5-1.5L4.669 7.867a2 2 0 0 0-1.414-.586H.583"></svg:path></svg:g>`,
})
export class StreamlineInsuranceHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAdd1ExpandCrossButtonsButtonMoreRemovePlusAddIcon],svg[streamline-interface-add-1-expand-cross-buttons-button-more-remove-plus-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .54v13M.5 7h13"></svg:path>`,
})
export class StreamlineInterfaceAdd1ExpandCrossButtonsButtonMoreRemovePlusAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAdd2RemoveBoldCrossButtonsButtonAddPlusIcon],svg[streamline-interface-add-2-remove-bold-cross-buttons-button-add-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.5a1 1 0 0 0-1-1h-4v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class StreamlineInterfaceAdd2RemoveBoldCrossButtonsButtonAddPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAddCircleButtonRemoveCrossAddButtonsPlusCircleIcon],svg[streamline-interface-add-circle-button-remove-cross-add-buttons-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 4v6M4 7h6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAddCircleButtonRemoveCrossAddButtonsPlusCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAddSquareSquareRemoveCrossButtonsAddPlusButtonIcon],svg[streamline-interface-add-square-square-remove-cross-buttons-add-plus-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4v6M4 7h6"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAddSquareSquareRemoveCrossButtonsAddPlusButtonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertAlarmBell1NotificationVibrateRingSoundAlarmAlertBellNoiseIcon],svg[streamline-interface-alert-alarm-bell-1-notification-vibrate-ring-sound-alarm-alert-bell-noise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 13.25h2m3-7.5a4 4 0 0 0-8 0v3.5a1.5 1.5 0 0 1-1.5 1.5h11a1.5 1.5 0 0 1-1.5-1.5ZM.5 5.62A6 6 0 0 1 3 .75m10.5 4.87A6 6 0 0 0 11 .75"></svg:path>`,
})
export class StreamlineInterfaceAlertAlarmBell1NotificationVibrateRingSoundAlarmAlertBellNoiseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertAlarmBell2AlertBellRingNotificationAlarmIcon],svg[streamline-interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5a4.29 4.29 0 0 1 4.29 4.29c0 4.77 1.74 5.71 2.21 5.71H.5c.48 0 2.21-.95 2.21-5.71A4.29 4.29 0 0 1 7 .5ZM5.5 12.33a1.55 1.55 0 0 0 3 0"></svg:path>`,
})
export class StreamlineInterfaceAlertAlarmBell2AlertBellRingNotificationAlarmIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertAlarmBellOffDisableSilentNotificationOffSilenceAlarmBellAlertIcon],svg[streamline-interface-alert-alarm-bell-off-disable-silent-notification-off-silence-alarm-bell-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13M6 13.5h2M8.73.84A4.51 4.51 0 0 0 2.5 5v2.5M3 11h10.5a2 2 0 0 1-2-2V5a4.42 4.42 0 0 0-.5-2"></svg:path>`,
})
export class StreamlineInterfaceAlertAlarmBellOffDisableSilentNotificationOffSilenceAlarmBellAlertIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertInformationCircleInformationFrameInfoMoreHelpPointCircleIcon],svg[streamline-interface-alert-information-circle-information-frame-info-more-help-point-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 7v3.5"></svg:path><svg:circle cx="7" cy="4.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceAlertInformationCircleInformationFrameInfoMoreHelpPointCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertRadioActive1DangerNukeRadiationNuclearWarningAlertRadioactiveCautionIcon],svg[streamline-interface-alert-radio-active-1-danger-nuke-radiation-nuclear-warning-alert-radioactive-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 4.83L3.75.94A6.49 6.49 0 0 0 .5 6.56H5a2 2 0 0 1 1-1.73Zm3 1.73h4.5A6.49 6.49 0 0 0 10.25.94L8 4.83a2 2 0 0 1 1 1.73Zm-2 2a2 2 0 0 1-1-.26l-2.25 3.89a6.51 6.51 0 0 0 6.5 0L8 8.3a2 2 0 0 1-1 .26Z"></svg:path>`,
})
export class StreamlineInterfaceAlertRadioActive1DangerNukeRadiationNuclearWarningAlertRadioactiveCautionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertRadioActive2WarningRadioactiveRadiationEmergencyDangerSafetyIcon],svg[streamline-interface-alert-radio-active-2-warning-radioactive-radiation-emergency-danger-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.92 1.25a3.2 3.2 0 1 1-3.84 0"></svg:path><svg:path d="M.5 9.17a3.2 3.2 0 1 1 1.92 3.32"></svg:path><svg:path d="M11.58 12.49a3.19 3.19 0 1 1 1.92-3.32"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlertRadioActive2WarningRadioactiveRadiationEmergencyDangerSafetyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertRadioActive3WarningRadioactiveRadiationEmergencyDangerSafetyIcon],svg[streamline-interface-alert-radio-active-3-warning-radioactive-radiation-emergency-danger-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7.49" r="3.5"></svg:circle><svg:path d="M9.35 1.31a3.32 3.32 0 1 1-4.7 0"></svg:path><svg:path d="M.5 8.5a3.32 3.32 0 1 1 2.35 4.07"></svg:path><svg:path d="M11.15 12.57A3.32 3.32 0 1 1 13.5 8.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlertRadioActive3WarningRadioactiveRadiationEmergencyDangerSafetyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertWarningCircleWarningAlertFrameExclamationCautionCircleIcon],svg[streamline-interface-alert-warning-circle-warning-alert-frame-exclamation-caution-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 3.5v3"></svg:path><svg:circle cx="7" cy="9.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceAlertWarningCircleWarningAlertFrameExclamationCautionCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertWarningDiamondDiamondAlertWarningFrameExclamationCautionIcon],svg[streamline-interface-alert-warning-diamond-diamond-alert-warning-frame-exclamation-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 3.5v3"></svg:path><svg:circle cx="7" cy="9.5" r=".5"></svg:circle><svg:rect width="9.82" height="9.82" x="2.09" y="2.09" rx="1.07" transform="rotate(-45 7 7)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlertWarningDiamondDiamondAlertWarningFrameExclamationCautionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertWarningTriangleFrameAlertWarningTriangleExclamationCautionIcon],svg[streamline-interface-alert-warning-triangle-frame-alert-warning-triangle-exclamation-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5v3"></svg:path><svg:circle cx="7" cy="11" r=".5"></svg:circle><svg:path d="M7.89 1.05a1 1 0 0 0-1.78 0l-5.5 11a1 1 0 0 0 .89 1.45h11a1 1 0 0 0 .89-1.45Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlertWarningTriangleFrameAlertWarningTriangleExclamationCautionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignBackBackDesignLayerLayersPileStackIcon],svg[streamline-interface-align-back-back-design-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10.5" height="10.5" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M13.5 3.5v9a1 1 0 0 1-1 1h-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignBackBackDesignLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignFrontDesignFrontLayerLayersPileStackIcon],svg[streamline-interface-align-front-design-front-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10.5" height="10.5" x="3" y="3" rx="1" transform="rotate(180 8.25 8.25)"></svg:rect><svg:path d="M.5 10.5v-9a1 1 0 0 1 1-1h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignFrontDesignFrontLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalCenterAlignCenterDesignIcon],svg[streamline-interface-align-horizontal-center-align-center-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="7" height="4" x="3.5" y=".5" rx="1"></svg:rect><svg:rect width="11" height="4" x="1.5" y="9.5" rx="1"></svg:rect><svg:path d="M7 4.5v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalCenterAlignCenterDesignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalLeftAlignDesignLeftIcon],svg[streamline-interface-align-horizontal-left-align-design-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v13"></svg:path><svg:rect width="6.5" height="4" x="3" y="1.5" rx="1"></svg:rect><svg:rect width="10.5" height="4" x="3" y="8.5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalLeftAlignDesignLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalRightAlignDesignRightIcon],svg[streamline-interface-align-horizontal-right-align-design-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.5v13"></svg:path><svg:rect width="6.5" height="4" x="4.5" y="1.5" rx="1" transform="rotate(180 7.75 3.5)"></svg:rect><svg:rect width="10.5" height="4" x=".5" y="8.5" rx="1" transform="rotate(180 5.75 10.5)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalRightAlignDesignRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignLayers1DesignLayerLayersPileStackIcon],svg[streamline-interface-align-layers-1-design-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.47 6.9a1.18 1.18 0 0 1-.94 0L.83 4.26a.56.56 0 0 1 0-1L6.53.6a1.18 1.18 0 0 1 .94 0l5.7 2.64a.56.56 0 0 1 0 1Zm6.03.45l-6.1 2.81a1 1 0 0 1-.83 0L.5 7.35m13 3.25l-6.1 2.81a1 1 0 0 1-.83 0L.5 10.6"></svg:path>`,
})
export class StreamlineInterfaceAlignLayers1DesignLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignLayers2DesignLayerLayersPileStackIcon],svg[streamline-interface-align-layers-2-design-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="6" x="5.5" y="1.5" rx="1"></svg:rect><svg:path d="M11 10H4a1 1 0 0 1-1-1V4"></svg:path><svg:path d="M9 12.5H1.5a1 1 0 0 1-1-1V6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignLayers2DesignLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignVerticalBottomAlignDesignBottomIcon],svg[streamline-interface-align-vertical-bottom-align-design-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 13.5H.5"></svg:path><svg:rect width="6.5" height="4" x="7.25" y="5.75" rx="1" transform="rotate(-90 10.5 7.75)"></svg:rect><svg:rect width="10.5" height="4" x="-1.75" y="3.75" rx="1" transform="rotate(-90 3.5 5.75)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignVerticalBottomAlignDesignBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignVerticalCenterAlignDesignMiddleIcon],svg[streamline-interface-align-vertical-center-align-design-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="4" x="7.5" y="5.5" rx="1" transform="rotate(90 11.5 7.5)"></svg:rect><svg:rect width="11" height="4" x="-3" y="5" rx="1" transform="rotate(90 2.5 7)"></svg:rect><svg:path d="M9.5 7h-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignVerticalCenterAlignDesignMiddleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignVerticalTopAlignDesignTopIcon],svg[streamline-interface-align-vertical-top-align-design-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.5H.5"></svg:path><svg:rect width="6.5" height="4" x="7.25" y="4.25" rx="1" transform="rotate(90 10.5 6.25)"></svg:rect><svg:rect width="10.5" height="4" x="-1.75" y="6.25" rx="1" transform="rotate(90 3.5 8.25)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignVerticalTopAlignDesignTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownLeft1ArrowBendCurveChangeDirectionLeftToDownIcon],svg[streamline-interface-arrows-bend-down-left-1-arrow-bend-curve-change-direction-left-to-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.75 11l2.5 2.5l2.5-2.5"></svg:path><svg:path d="M11.25.5h-5a1 1 0 0 0-1 1v12"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownLeft1ArrowBendCurveChangeDirectionLeftToDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownLeft2ArrowBendCurveChangeDirectionDownToLeftIcon],svg[streamline-interface-arrows-bend-down-left-2-arrow-bend-curve-change-direction-down-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 11.5l-3-3l3-3"></svg:path><svg:path d="M13.5 2.5v2a4 4 0 0 1-4 4h-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownLeft2ArrowBendCurveChangeDirectionDownToLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownRight2ArrowBendCurveChangeDirectionDownToRightIcon],svg[streamline-interface-arrows-bend-down-right-2-arrow-bend-curve-change-direction-down-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 11.5l3-3l-3-3"></svg:path><svg:path d="M.5 2.5v2a4 4 0 0 0 4 4h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownRight2ArrowBendCurveChangeDirectionDownToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendLeft1ArrowBendCurveChangeDirectionUpToLeftBackIcon],svg[streamline-interface-arrows-bend-left-1-arrow-bend-curve-change-direction-up-to-left-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 2.75L.5 5.25L3 7.75"></svg:path><svg:path d="M13.5 11.25v-5a1 1 0 0 0-1-1H.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendLeft1ArrowBendCurveChangeDirectionUpToLeftBackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendRight1ArrowBendCurveChangeDirectionUpToRightIcon],svg[streamline-interface-arrows-bend-right-1-arrow-bend-curve-change-direction-up-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 2.75l2.5 2.5l-2.5 2.5"></svg:path><svg:path d="M.5 11.25v-5a1 1 0 0 1 1-1h12"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendRight1ArrowBendCurveChangeDirectionUpToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpLeft1ArrowBendCurveChangeDirectionLeftToUpIcon],svg[streamline-interface-arrows-bend-up-left-1-arrow-bend-curve-change-direction-left-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.75 3L5.25.5L7.75 3"></svg:path><svg:path d="M11.25 13.5h-5a1 1 0 0 1-1-1V.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpLeft1ArrowBendCurveChangeDirectionLeftToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpLeft2ArrowBendCurveChangeDirectionLeftToUpIcon],svg[streamline-interface-arrows-bend-up-left-2-arrow-bend-curve-change-direction-left-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 3.5l3-3l3 3"></svg:path><svg:path d="M11.5 13.5h-2a4 4 0 0 1-4-4v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpLeft2ArrowBendCurveChangeDirectionLeftToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpLeft3ArrowBendCurveChangeDirectionUpToLeftIcon],svg[streamline-interface-arrows-bend-up-left-3-arrow-bend-curve-change-direction-up-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 2.5l-3 3l3 3"></svg:path><svg:path d="M13.5 11.5v-2a4 4 0 0 0-4-4h-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpLeft3ArrowBendCurveChangeDirectionUpToLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpRight1ArrowBendCurveChangeDirectionRightToUpIcon],svg[streamline-interface-arrows-bend-up-right-1-arrow-bend-curve-change-direction-right-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 3.5l-3-3l-3 3"></svg:path><svg:path d="M2.5 13.5h2a4 4 0 0 0 4-4v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpRight1ArrowBendCurveChangeDirectionRightToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpRight2ArrowBendCurveChangeDirectionUpToRightIcon],svg[streamline-interface-arrows-bend-up-right-2-arrow-bend-curve-change-direction-up-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 2.5l3 3l-3 3"></svg:path><svg:path d="M.5 11.5v-2a4 4 0 0 1 4-4h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpRight2ArrowBendCurveChangeDirectionUpToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonDownArrowDownKeyboardIcon],svg[streamline-interface-arrows-button-down-arrow-down-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.85L6.65 10a.48.48 0 0 0 .7 0l6.15-6.15"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonDownArrowDownKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonDownDoubleArrowArrowsDoubleDownIcon],svg[streamline-interface-arrows-button-down-double-arrow-arrows-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 6.46l6.15 6.14a.48.48 0 0 0 .7 0l6.15-6.14"></svg:path><svg:path d="M.5 1.25L6.65 7.4a.5.5 0 0 0 .7 0l6.15-6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonDownDoubleArrowArrowsDoubleDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonLeftArrowKeyboardLeftIcon],svg[streamline-interface-arrows-button-left-arrow-keyboard-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.15.5L4 6.65a.48.48 0 0 0 0 .7l6.15 6.15"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonLeftArrowKeyboardLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonLeftDoubleArrowArrowsDoubleLeftIcon],svg[streamline-interface-arrows-button-left-double-arrow-arrows-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.54.5L1.4 6.65a.48.48 0 0 0 0 .7l6.14 6.15"></svg:path><svg:path d="M12.75.5L6.6 6.65a.5.5 0 0 0 0 .7l6.15 6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonLeftDoubleArrowArrowsDoubleLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonRightArrowRightKeyboardIcon],svg[streamline-interface-arrows-button-right-arrow-right-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.85.5L10 6.65a.48.48 0 0 1 0 .7L3.85 13.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonRightArrowRightKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonRightDuobleArrowArrowsDoubleRightIcon],svg[streamline-interface-arrows-button-right-duoble-arrow-arrows-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6.46.5l6.14 6.15a.48.48 0 0 1 0 .7L6.46 13.5"></svg:path><svg:path d="M1.25.5L7.4 6.65a.5.5 0 0 1 0 .7L1.25 13.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonRightDuobleArrowArrowsDoubleRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToBottomArrowDownLineToBottomIcon],svg[streamline-interface-arrows-button-to-bottom-arrow-down-line-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 5.71l6.15 6.14a.48.48 0 0 0 .7 0l6.15-6.14M.5 2h13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToBottomArrowDownLineToBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToLeftArrowLineToLeftIcon],svg[streamline-interface-arrows-button-to-left-arrow-line-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.29.5L2.15 6.65a.48.48 0 0 0 0 .7l6.14 6.15M12 .5v13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToLeftArrowLineToLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToRightArrowLineToRightIcon],svg[streamline-interface-arrows-button-to-right-arrow-line-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.71.5l6.14 6.15a.48.48 0 0 1 0 .7L5.71 13.5M2 .5v13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToRightArrowLineToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToTopArrowUpLineToTopIcon],svg[streamline-interface-arrows-button-to-top-arrow-up-line-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 8.29l6.15-6.14a.48.48 0 0 1 .7 0l6.15 6.14M.5 12h13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToTopArrowUpLineToTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonUpArrowUpKeyboardIcon],svg[streamline-interface-arrows-button-up-arrow-up-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.15L6.65 4a.48.48 0 0 1 .7 0l6.15 6.15"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonUpArrowUpKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonUpDoubleArrowArrowsDoubleUpIcon],svg[streamline-interface-arrows-button-up-double-arrow-arrows-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7.54L6.65 1.4a.48.48 0 0 1 .7 0l6.15 6.14"></svg:path><svg:path d="M.5 12.75L6.65 6.6a.5.5 0 0 1 .7 0l6.15 6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonUpDoubleArrowArrowsDoubleUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonZigzagBothDirectionArrowCurvyDiagramZigzagVerticalIcon],svg[streamline-interface-arrows-button-zigzag-both-direction-arrow-curvy-diagram-zigzag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11L3 13.5v-11a2 2 0 0 1 4 0v9a2 2 0 0 0 4 0V.5L13.5 3"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonZigzagBothDirectionArrowCurvyDiagramZigzagVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerDownLeftDownKeyboardArrowLeftBottomIcon],svg[streamline-interface-arrows-corner-down-left-down-keyboard-arrow-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5.5l-13 13m5 0h-5v-5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerDownLeftDownKeyboardArrowLeftBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerDownRightDownKeyboardArrowRightBottomIcon],svg[streamline-interface-arrows-corner-down-right-down-keyboard-arrow-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13m-5 0h5v-5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerDownRightDownKeyboardArrowRightBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerUpLeftKeyboardTopArrowLeftUpIcon],svg[streamline-interface-arrows-corner-up-left-keyboard-top-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m5 0h-5v5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerUpLeftKeyboardTopArrowLeftUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerUpRightKeyboardTopArrowRightUpIcon],svg[streamline-interface-arrows-corner-up-right-keyboard-top-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-5 0h5v5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerUpRightKeyboardTopArrowRightUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyBothDirection1BothDirectionArrowCurvyDiagramZigzagHorizontalIcon],svg[streamline-interface-arrows-curvy-both-direction-1-both-direction-arrow-curvy-diagram-zigzag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 .5L13.5 3h-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H.5L3 13.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCurvyBothDirection1BothDirectionArrowCurvyDiagramZigzagHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyBothDirection2BothDirectionArrowCurvyDiagramZigzagHorizontalIcon],svg[streamline-interface-arrows-curvy-both-direction-2-both-direction-arrow-curvy-diagram-zigzag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 .5L.5 3h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12L11 13.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCurvyBothDirection2BothDirectionArrowCurvyDiagramZigzagHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyLeftSnakeArrowSidewaysDiagramLeftIcon],svg[streamline-interface-arrows-curvy-left-snake-arrow-sideways-diagram-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.75h-12a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H.5"></svg:path><svg:path d="m3 8.25l-2.5 2.5l2.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsCurvyLeftSnakeArrowSidewaysDiagramLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyRightSnakeArrowSidewaysDiagramRightIcon],svg[streamline-interface-arrows-curvy-right-snake-arrow-sideways-diagram-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.75h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-11a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12"></svg:path><svg:path d="m11 8.25l2.5 2.5l-2.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsCurvyRightSnakeArrowSidewaysDiagramRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTransferDiagonalSquareArrowSquareDataDiagonalInternetTransferNetworkIcon],svg[streamline-interface-arrows-data-transfer-diagonal-square-arrow-square-data-diagonal-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m4 8l4.5-4.5H5M10 6l-4.5 4.5H9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDataTransferDiagonalSquareArrowSquareDataDiagonalInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTransferHorizontalArrowSquareDataInternetTransferNetworkHorizontalIcon],svg[streamline-interface-arrows-data-transfer-horizontal-arrow-square-data-internet-transfer-network-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m6 10.5l-2-2h6m-2-5l2 2H4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDataTransferHorizontalArrowSquareDataInternetTransferNetworkHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTransferVerticalArrowSquareDataInternetTransferNetworkVerticalIcon],svg[streamline-interface-arrows-data-transfer-vertical-arrow-square-data-internet-transfer-network-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m10.5 8l-2 2V4m-5 2l2-2v6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDataTransferVerticalArrowSquareDataInternetTransferNetworkVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTrasnferVerticalArrowServerArrowsDataVerticalInternetTransferNetworkIcon],svg[streamline-interface-arrows-data-trasnfer-vertical-arrow-server-arrows-data-vertical-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 3.5l3-3v13m6-3l-3 3V.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsDataTrasnferVerticalArrowServerArrowsDataVerticalInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonal1ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-diagonal-1-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-4 0h4v4m-9 9h-4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonal1ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonal2ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-diagonal-2-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5.5h-4v4m0-4l13 13m-4 0h4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonal2ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonalArrowsArrowServerDataDiagonalInternetTransferNetworkIcon],svg[streamline-interface-arrows-diagonal-arrows-arrow-server-data-diagonal-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 8.5l8-8m0 3.5V.5h0H6m6.5 5l-8 8m0-3.5v3.5H8"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonalArrowsArrowServerDataDiagonalInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonalScrollPoint1MoveScrollIcon],svg[streamline-interface-arrows-diagonal-scroll-point-1-move-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M9 .5h4a.5.5 0 0 1 .5.5v4M5 13.5H1a.5.5 0 0 1-.5-.5V9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDiagonalScrollPoint1MoveScrollIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonalScrollPoint2MoveScrollIcon],svg[streamline-interface-arrows-diagonal-scroll-point-2-move-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M5 .5H1a.5.5 0 0 0-.5.5v4M9 13.5h4a.5.5 0 0 0 .5-.5V9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDiagonalScrollPoint2MoveScrollIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownArrowDownKeyboardIcon],svg[streamline-interface-arrows-down-arrow-down-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m3.5-3.5L7 13.5L3.5 10"></svg:path>`,
})
export class StreamlineInterfaceArrowsDownArrowDownKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownCircle1ArrowKeyboardCircleButtonDownIcon],svg[streamline-interface-arrows-down-circle-1-arrow-keyboard-circle-button-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4v6M5.5 8.5L7 10l1.5-1.5"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsDownCircle1ArrowKeyboardCircleButtonDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownCircle2ArrowKeyboardCircleButtonDownIcon],svg[streamline-interface-arrows-down-circle-2-arrow-keyboard-circle-button-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 6L7 9L4 6"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsDownCircle2ArrowKeyboardCircleButtonDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownleftCornerArrowCornerDownLeftDownleftIcon],svg[streamline-interface-arrows-downleft-corner-arrow-corner-down-left-downleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5h-12a1 1 0 0 1-1-1V.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsDownleftCornerArrowCornerDownLeftDownleftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownrightCornerArrowCornerDownRightDownrightIcon],svg[streamline-interface-arrows-downright-corner-arrow-corner-down-right-downright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5v12a1 1 0 0 1-1 1H.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsDownrightCornerArrowCornerDownRightDownrightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpand2ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-expand-2-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 5.5l-5-5m4 0h-4v4m8 4l5 5m-4 0h4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpand2ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpand3ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-expand-3-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 5.5l5-5m-4 0h4v4m-8 4l-5 5m4 0h-4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpand3ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpand4ExpandSmallBiggerRetractSmallerBigIcon],svg[streamline-interface-arrows-expand-4-expand-small-bigger-retract-smaller-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x="3.5" y=".5" rx="1" transform="rotate(180 8.5 5.5)"></svg:rect><svg:path d="M10.5 13.5h-9a1 1 0 0 1-1-1v-9m7 0h3v3m0-3l-4 4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsExpand4ExpandSmallBiggerRetractSmallerBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpandDiagonal1ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-expand-diagonal-1-expand-resize-bigger-diagonal-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 5L13.5.5m-4 0h4v4M5 9L.5 13.5m4 0h-4v-4M4 4l6 6"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpandDiagonal1ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpandDiagonal2ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-expand-diagonal-2-expand-resize-bigger-diagonal-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 5L.5.5m4 0h-4v4M9 9l4.5 4.5m-4 0h4v-4M10 4l-6 6"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpandDiagonal2ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpandVerticalDiamondArrowDiamondDataVerticalDataInternetTransferNetworkIcon],svg[streamline-interface-arrows-expand-vertical-diamond-arrow-diamond-data-vertical-data-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9.82" height="9.82" x="2.09" y="2.09" rx="1.07" transform="rotate(-45 7 7)"></svg:rect><svg:path d="M5.5 5.5L7 4l1.5 1.5m-3 3L7 10l1.5-1.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsExpandVerticalDiamondArrowDiamondDataVerticalDataInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizonalScrollPointMoveScrollHorizonalIcon],svg[streamline-interface-arrows-horizonal-scroll-point-move-scroll-horizonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.48 3.87L.61 6.74a.36.36 0 0 0 0 .52l2.87 2.87m7.04-6.26l2.87 2.87a.36.36 0 0 1 0 .52l-2.87 2.87"></svg:path><svg:circle cx="7" cy="7" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsHorizonalScrollPointMoveScrollHorizonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizontalExpandExpandResizeBiggerHorizontalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-horizontal-expand-expand-resize-bigger-horizontal-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 7h-9M5 4.5L2.5 7L5 9.5m4-5L11.5 7L9 9.5M.5.5v13m13-13v13"></svg:path>`,
})
export class StreamlineInterfaceArrowsHorizontalExpandExpandResizeBiggerHorizontalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizontalExpandResizeBiggerHorizontalSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-horizontal-expand-resize-bigger-horizontal-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5m3-3l-3 3l3 3m7-6l3 3l-3 3"></svg:path>`,
})
export class StreamlineInterfaceArrowsHorizontalExpandResizeBiggerHorizontalSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizontalUpDownExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-horizontal-up-down-expand-resize-bigger-vertical-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.13 3.48L7.26.61a.36.36 0 0 0-.52 0L3.87 3.48m6.26 7.04l-2.87 2.87a.36.36 0 0 1-.52 0l-2.87-2.87M.5 7h13"></svg:path>`,
})
export class StreamlineInterfaceArrowsHorizontalUpDownExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsLeftArrowKeyboardLeftIcon],svg[streamline-interface-arrows-left-arrow-keyboard-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5M4 3.5L.5 7L4 10.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsLeftArrowKeyboardLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsLeftCircle1ArrowKeyboardCircleButtonLeftIcon],svg[streamline-interface-arrows-left-circle-1-arrow-keyboard-circle-button-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 7H4m1.5-1.5L4 7l1.5 1.5"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsLeftCircle1ArrowKeyboardCircleButtonLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsLeftCircle2ArrowKeyboardCircleButtonLeftIcon],svg[streamline-interface-arrows-left-circle-2-arrow-keyboard-circle-button-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 4L5 7l3 3"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsLeftCircle2ArrowKeyboardCircleButtonLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsLoopArrowDiagramLoopInfinityRepeatIcon],svg[streamline-interface-arrows-loop-arrow-diagram-loop-infinity-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 10.43a2.37 2.37 0 0 1-1.5.57a2.75 2.75 0 0 1-3-3a2.75 2.75 0 0 1 3-3c2.75 0 4.25 6 7 6a2.75 2.75 0 0 0 3-3a2.75 2.75 0 0 0-3-3h-2l2-2"></svg:path>`,
})
export class StreamlineInterfaceArrowsLoopArrowDiagramLoopInfinityRepeatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveDownMoveDownArrowsIcon],svg[streamline-interface-arrows-move-down-move-down-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 7.5v6M4.5 11L7 13.5L9.5 11"></svg:path><svg:rect width="4.5" height="13" x="4.75" y="-3.75" rx="1" transform="rotate(-90 7 2.75)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveDownMoveDownArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveHorizontalCircleTransferDataInternetArrowHorizontalNetworkCircleIcon],svg[streamline-interface-arrows-move-horizontal-circle-transfer-data-internet-arrow-horizontal-network-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 10.5l-2-2h6m-2-5l2 2H4"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveHorizontalCircleTransferDataInternetArrowHorizontalNetworkCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveLeftDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-left-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5.5l-2 2l2 2"></svg:path><svg:path d="M11.5 13.5v-10a1 1 0 0 0-1-1H.5"></svg:path><svg:path d="m9.5 11.5l2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveLeftDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveLeftMoveLeftArrowsIcon],svg[streamline-interface-arrows-move-left-move-left-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 7h-6M3 4.5L.5 7L3 9.5"></svg:path><svg:rect width="4.5" height="13" x="9" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveLeftMoveLeftArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveLeftUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-left-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 13.5l-2-2l2-2"></svg:path><svg:path d="M11.5.5v10a1 1 0 0 1-1 1H.5"></svg:path><svg:path d="m9.5 2.5l2-2l2 2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveLeftUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveRightDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-right-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5.5l2 2l-2 2"></svg:path><svg:path d="M2.5 13.5v-10a1 1 0 0 1 1-1h10"></svg:path><svg:path d="m4.5 11.5l-2 2l-2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveRightDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveRightMoveRightArrowsIcon],svg[streamline-interface-arrows-move-right-move-right-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 7h6M11 4.5L13.5 7L11 9.5"></svg:path><svg:rect width="4.5" height="13" x=".5" y=".5" rx="1" transform="rotate(-180 2.75 7)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveRightMoveRightArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveRightUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-right-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 2.5l2-2l2 2"></svg:path><svg:path d="M13.5 11.5h-10a1 1 0 0 1-1-1V.5"></svg:path><svg:path d="m11.5 9.5l2 2l-2 2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveRightUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveUpMoveUpArrowsIcon],svg[streamline-interface-arrows-move-up-move-up-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 6.5v-6M9.5 3L7 .5L4.5 3"></svg:path><svg:rect width="4.5" height="13" x="4.75" y="4.75" rx="1" transform="rotate(90 7 11.25)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveUpMoveUpArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsRightArrowRightKeyboardIcon],svg[streamline-interface-arrows-right-arrow-right-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h13M10 10.5L13.5 7L10 3.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsRightArrowRightKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsRightCircle1ArrowKeyboardCircleButtonRightIcon],svg[streamline-interface-arrows-right-circle-1-arrow-keyboard-circle-button-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 7h6M8.5 5.5L10 7L8.5 8.5"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsRightCircle1ArrowKeyboardCircleButtonRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsRightCircle2ArrowKeyboardCircleButtonRightIcon],svg[streamline-interface-arrows-right-circle-2-arrow-keyboard-circle-button-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 4l3 3l-3 3"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsRightCircle2ArrowKeyboardCircleButtonRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsShrink4ExpandRetractShrinkBiggerBigSmallSmallerIcon],svg[streamline-interface-arrows-shrink-4-expand-retract-shrink-bigger-big-small-smaller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x="3.5" y=".5" rx="1" transform="rotate(180 8.5 5.5)"></svg:rect><svg:path d="M10.5 13.5h-9a1 1 0 0 1-1-1v-9m9 4h-3v-3m0 3l4-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsShrink4ExpandRetractShrinkBiggerBigSmallSmallerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsShrinkVerticalMoveVerticalShrinkIcon],svg[streamline-interface-arrows-shrink-vertical-move-vertical-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5L6.74 9a.37.37 0 0 1 .52 0l4.49 4.49M2.25.5L6.74 5a.37.37 0 0 0 .52 0L11.75.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsShrinkVerticalMoveVerticalShrinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsSplitVerticalUpMergeArrowDiagramIcon],svg[streamline-interface-arrows-split-vertical-up-merge-arrow-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10 3.5l-3-3l-3 3m7 10a4 4 0 0 1-4-4a4 4 0 0 1-4 4m4-4v-9"></svg:path>`,
})
export class StreamlineInterfaceArrowsSplitVerticalUpMergeArrowDiagramIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsSynchronizeArrowsLoadingLoadSyncSynchronizeArrowReloadIcon],svg[streamline-interface-arrows-synchronize-arrows-loading-load-sync-synchronize-arrow-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 9l2-.5l.5 2"></svg:path><svg:path d="M13 8.5A6.76 6.76 0 0 1 7 13h0a6 6 0 0 1-5.64-3.95M3 5l-2 .5l-.5-2"></svg:path><svg:path d="M1 5.5C1.84 3.2 4.42 1 7 1h0a6 6 0 0 1 5.64 4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsSynchronizeArrowsLoadingLoadSyncSynchronizeArrowReloadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsSynchronizeWarningArrowFailNotificationSyncWarningFailureSynchronizeErrorIcon],svg[streamline-interface-arrows-synchronize-warning-arrow-fail-notification-sync-warning-failure-synchronize-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 9l2-.5l.5 2"></svg:path><svg:path d="M13 8.5A6.6 6.6 0 0 1 7 13h0a6 6 0 0 1-5.64-3.95M3 5l-2 .5l-.5-2"></svg:path><svg:path d="M1 5.5A6.79 6.79 0 0 1 7 1h0a6 6 0 0 1 5.64 4M7 3.5v4"></svg:path><svg:circle cx="7" cy="10" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsSynchronizeWarningArrowFailNotificationSyncWarningFailureSynchronizeErrorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTopMoveUpArrowArrowsIcon],svg[streamline-interface-arrows-top-move-up-arrow-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 7.5l3-3l3 3m-3 6v-9M3.5.5h7"></svg:path>`,
})
export class StreamlineInterfaceArrowsTopMoveUpArrowArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTriangleLoopDiagramTriangleLoopArrowArrowsIcon],svg[streamline-interface-arrows-triangle-loop-diagram-triangle-loop-arrow-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 13.5L4 11h8.5m1-7l-1 3.5L8 .5m-6 3h3.5l-5 7"></svg:path>`,
})
export class StreamlineInterfaceArrowsTriangleLoopDiagramTriangleLoopArrowArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnBackwardArrowBendCurveChangeDirectionReturnLeftBackBackwardIcon],svg[streamline-interface-arrows-turn-backward-arrow-bend-curve-change-direction-return-left-back-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 1.5l-3 3l3 3"></svg:path><svg:path d="M.5 4.5h9a4 4 0 0 1 0 8h-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnBackwardArrowBendCurveChangeDirectionReturnLeftBackBackwardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnDownArrowBendCurveChangeDirectionReturnDownIcon],svg[streamline-interface-arrows-turn-down-arrow-bend-curve-change-direction-return-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.5 10.5l3 3l3-3"></svg:path><svg:path d="M4.5 13.5v-9a4 4 0 0 1 8 0v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnDownArrowBendCurveChangeDirectionReturnDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnForwardArrowBendCurveChangeDirectionReturnRightNextForwardIcon],svg[streamline-interface-arrows-turn-forward-arrow-bend-curve-change-direction-return-right-next-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 1.5l3 3l-3 3"></svg:path><svg:path d="M13.5 4.5h-9a4 4 0 0 0 0 8h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnForwardArrowBendCurveChangeDirectionReturnRightNextForwardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnUpArrowBendCurveChangeDirectionReturnUpIcon],svg[streamline-interface-arrows-turn-up-arrow-bend-curve-change-direction-return-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12.5 3.5l-3-3l-3 3"></svg:path><svg:path d="M9.5.5v9a4 4 0 0 1-8 0v-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnUpArrowBendCurveChangeDirectionReturnUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUpCircle1ArrowUpKeyboardCircleButtonIcon],svg[streamline-interface-arrows-up-circle-1-arrow-up-keyboard-circle-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10V4M5.5 5.5L7 4l1.5 1.5"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsUpCircle1ArrowUpKeyboardCircleButtonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUpCircle2ArrowKeyboardCircleButtonUpIcon],svg[streamline-interface-arrows-up-circle-2-arrow-keyboard-circle-button-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4 8l3-3l3 3"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsUpCircle2ArrowKeyboardCircleButtonUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUpleftCornerArrowCornerUpLeftUpleftIcon],svg[streamline-interface-arrows-upleft-corner-arrow-corner-up-left-upleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5h-12a1 1 0 0 0-1 1v12"></svg:path>`,
})
export class StreamlineInterfaceArrowsUpleftCornerArrowCornerUpLeftUpleftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUprightCornerArrowUpRightUprightCornerIcon],svg[streamline-interface-arrows-upright-corner-arrow-up-right-upright-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5h12a1 1 0 0 1 1 1v12"></svg:path>`,
})
export class StreamlineInterfaceArrowsUprightCornerArrowUpRightUprightCornerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpand1MoveExpandVerticalIcon],svg[streamline-interface-arrows-vertical-expand-1-move-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.25 5.1L6.74.61a.36.36 0 0 1 .52 0l4.49 4.49m-9.5 3.8l4.49 4.49a.36.36 0 0 0 .52 0l4.49-4.49"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpand1MoveExpandVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpand2ExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-vertical-expand-2-expand-resize-bigger-vertical-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 11.5v-9M9.5 5L7 2.5L4.5 5m5 4L7 11.5L4.5 9m9-8.5H.5m13 13H.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpand2ExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpandResizeBiggerVerticalSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-vertical-expand-resize-bigger-vertical-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5m3 3l-3-3l-3 3m6 7l-3 3l-3-3"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpandResizeBiggerVerticalSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalScrollPointMoveScrollVerticalIcon],svg[streamline-interface-arrows-vertical-scroll-point-move-scroll-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.13 3.48L7.26.61a.36.36 0 0 0-.52 0L3.87 3.48m6.26 7.04l-2.87 2.87a.36.36 0 0 1-.52 0l-2.87-2.87"></svg:path><svg:circle cx="7" cy="7" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsVerticalScrollPointMoveScrollVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAwardCrownRewardSocialRatingMediaQueenVipKingCrownIcon],svg[streamline-interface-award-crown-reward-social-rating-media-queen-vip-king-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 4l-3 3L7 2L3.5 7l-3-3v6.5A1.5 1.5 0 0 0 2 12h10a1.5 1.5 0 0 0 1.5-1.5Z"></svg:path>`,
})
export class StreamlineInterfaceAwardCrownRewardSocialRatingMediaQueenVipKingCrownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAwardHalfStarRewardRatingRateSocialStarMediaFavoriteLikeStarsHalfIcon],svg[streamline-interface-award-half-star-reward-rating-rate-social-star-media-favorite-like-stars-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.25.5a.54.54 0 0 0-.49.32L8.17 4.18a.52.52 0 0 1-.41.31L4.22 5a.58.58 0 0 0-.3 1l2.56 2.63a.58.58 0 0 1 .16.5L6 12.83a.56.56 0 0 0 .8.6l3.2-1.74a.59.59 0 0 1 .26-.07Z"></svg:path>`,
})
export class StreamlineInterfaceAwardHalfStarRewardRatingRateSocialStarMediaFavoriteLikeStarsHalfIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAwardTrophyRewardRatingTrophySocialAwardMediaIcon],svg[streamline-interface-award-trophy-reward-rating-trophy-social-award-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.5v5m-2.5 0h5m-6-8a3 3 0 0 1-3-3v-1H4v4Zm7 0a3 3 0 0 0 3-3v-1H10v4Z"></svg:path><svg:path d="M10 5.5a3 3 0 0 1-6 0v-5h6Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAwardTrophyRewardRatingTrophySocialAwardMediaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBlockRemoveCircleGarbageTrashDeleteIcon],svg[streamline-interface-block-remove-circle-garbage-trash-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m2.4 11.6l9.2-9.2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceBlockRemoveCircleGarbageTrashDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBookmarkBookmarksTagsFavoriteIcon],svg[streamline-interface-bookmark-bookmarks-tags-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.5l-4-4l-4 4v-12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class StreamlineInterfaceBookmarkBookmarksTagsFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBookmarkDoubleBookmarksDoubleTagsFavoriteIcon],svg[streamline-interface-bookmark-double-bookmarks-double-tags-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9 13.5l-3.5-3l-3.5 3v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Z"></svg:path><svg:path d="M5 .5h6a1 1 0 0 1 1 1v9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceBookmarkDoubleBookmarksDoubleTagsFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBookmarkTagTagsBookmarkFavoriteIcon],svg[streamline-interface-bookmark-tag-tags-bookmark-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.28 9.39l-3.89 3.89a.75.75 0 0 1-1.06 0L.61 5.56a.36.36 0 0 1-.11-.29l.59-3.83a.37.37 0 0 1 .35-.35L5.27.5a.36.36 0 0 1 .29.11l7.72 7.72a.75.75 0 0 1 0 1.06Z"></svg:path><svg:circle cx="4.11" cy="4.11" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceBookmarkTagTagsBookmarkFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarAddAddCalendarDateDayMonthIcon],svg[streamline-interface-calendar-add-add-calendar-date-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m1 5.5h-5M7 5.5v5"></svg:path>`,
})
export class StreamlineInterfaceCalendarAddAddCalendarDateDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarBlankCalendarDateDayMonthIcon],svg[streamline-interface-calendar-blank-calendar-date-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-10 4h13m-10-6v4m7-4v4m-7-2h5"></svg:path>`,
})
export class StreamlineInterfaceCalendarBlankCalendarDateDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarBlockBlockCalendarDateDayMonthIcon],svg[streamline-interface-calendar-block-block-calendar-date-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:circle cx="7" cy="8.5" r="3"></svg:circle><svg:path d="m4.88 10.62l4.24-4.24"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarBlockBlockCalendarDateDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarCheckApproveCalendarCheckDateDayMonthSuccessIcon],svg[streamline-interface-calendar-check-approve-calendar-check-date-day-month-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m4 9l2 1.5l3.5-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarCheckApproveCalendarCheckDateDayMonthSuccessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDateMonthThirtyThirtyCalendarDateWeekDayMonthIcon],svg[streamline-interface-calendar-date-month-thirty-thirty-calendar-date-week-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 6.5h1V11m-1 0h2"></svg:path><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M3.5 6.5H6l-1.5 2s1.5 0 1.5 1A1.33 1.33 0 0 1 4.5 11h-1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarDateMonthThirtyThirtyCalendarDateWeekDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDateOneOneCalendarDateDayMonthIcon],svg[streamline-interface-calendar-date-one-one-calendar-date-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 6.5h1V11m-1.5 0h3"></svg:path><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarDateOneOneCalendarDateDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDisableCalendarDateDayDeleteDisableMonthRemoveIcon],svg[streamline-interface-calendar-disable-calendar-date-day-delete-disable-month-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m.27 7.27L5.23 6.23m3.54 0L5.23 9.77"></svg:path>`,
})
export class StreamlineInterfaceCalendarDisableCalendarDateDayDeleteDisableMonthRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDownloadArrowCalendarDateDayDownDownloadMonthIcon],svg[streamline-interface-calendar-download-arrow-calendar-date-day-down-download-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m5 9l2 2l2-2m-2 2V6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarDownloadArrowCalendarDateDayDownDownloadMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarFavoriteCalendarDateDayFavoriteLikeMonthStarIcon],svg[streamline-interface-calendar-favorite-calendar-date-day-favorite-like-month-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M6.45 5.37a.59.59 0 0 1 1.1 0L8.19 7H9.9a.6.6 0 0 1 .4 1L8.79 9.36l.64 1.28a.58.58 0 0 1-.12.69a.61.61 0 0 1-.7.1L7 10.55l-1.61.88a.61.61 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28L3.7 8a.6.6 0 0 1 .4-1h1.71Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarFavoriteCalendarDateDayFavoriteLikeMonthStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarHeartCalendarDateDayFavoriteHeartLikeMonthIcon],svg[streamline-interface-calendar-heart-calendar-date-day-favorite-heart-like-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M7 7.5c1-2 3-1 3 .5c0 2-3 3-3 3s-3-1-3-3c0-1.5 2-2.5 3-.5Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarHeartCalendarDateDayFavoriteHeartLikeMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarHomeCalendarDateDayHomeHouseMonthIcon],svg[streamline-interface-calendar-home-calendar-date-day-home-house-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m10 8.5l-3-3l-3 3"></svg:path><svg:path d="M5 7.5V11h4V7.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarHomeCalendarDateDayHomeHouseMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarLockCalendarDateDayLockMonthPadlockSecureSecurityIcon],svg[streamline-interface-calendar-lock-calendar-date-day-lock-month-padlock-secure-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M5 8h4v3H5zm.5 0V7a1.5 1.5 0 0 1 3 0v1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarLockCalendarDateDayLockMonthPadlockSecureSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarMarkCalendarDateDayMonthMarkIcon],svg[streamline-interface-calendar-mark-calendar-date-day-month-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:circle cx="3.5" cy="7.5" r=".5"></svg:circle><svg:circle cx="7" cy="7.5" r=".5"></svg:circle><svg:circle cx="10.5" cy="7.5" r=".5"></svg:circle><svg:circle cx="3.5" cy="10.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceCalendarMarkCalendarDateDayMonthMarkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarRemoveCalendarDateDayDeleteMonthRemoveSubtractIcon],svg[streamline-interface-calendar-remove-calendar-date-day-delete-month-remove-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m1 7.5h-5m-4-3.5h13"></svg:path>`,
})
export class StreamlineInterfaceCalendarRemoveCalendarDateDayDeleteMonthRemoveSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarSettingCalendarCogDateDayGearLoadLoadingMonthSettingWorkIcon],svg[streamline-interface-calendar-setting-calendar-cog-date-day-gear-load-loading-month-setting-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m-1.53 2V6m-3.03.25l1.3.75m-1.3 2.75L5.24 9m1.73 2.5V10M10 9.75L8.7 9M10 6.25L8.7 7"></svg:path><svg:circle cx="6.97" cy="8" r="2"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceCalendarSettingCalendarCogDateDayGearLoadLoadingMonthSettingWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarUploadCalendarDateDayMonthPushUpArrowUploadIcon],svg[streamline-interface-calendar-upload-calendar-date-day-month-push-up-arrow-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m5 8l2-2l2 2M7 6v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarUploadCalendarDateDayMonthPushUpArrowUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarWarningAlterCalendarCautionDateDayMonthNotificationWarningIcon],svg[streamline-interface-calendar-warning-alter-calendar-caution-date-day-month-notification-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5M7 5v3"></svg:path><svg:circle cx="7" cy="11" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceCalendarWarningAlterCalendarCautionDateDayMonthNotificationWarningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveBoxContentBankerArchiveFileIcon],svg[streamline-interface-content-archive-box-content-banker-archive-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 5.54h11v7a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-7h0Z"></svg:path><svg:rect width="4" height="13" x="5" y="-2.96" rx="1" transform="rotate(90 7 3.54)"></svg:rect><svg:path d="M5.5 8.54h3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentArchiveBoxContentBankerArchiveFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveFolderOutboxContentFolderArchiveFileInboxIcon],svg[streamline-interface-content-archive-folder-outbox-content-folder-archive-file-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 9.54a1 1 0 0 0-1-1h-3v1h-5v-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Zm-12-4h11m-11-3h11"></svg:path>`,
})
export class StreamlineInterfaceContentArchiveFolderOutboxContentFolderArchiveFileInboxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveLockerLockerContentArchiveFileCabinetIcon],svg[streamline-interface-content-archive-locker-locker-content-archive-file-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5.5h11a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-10a1 1 0 0 1 1-1ZM.5 7h13"></svg:path><svg:circle cx="7" cy="3.5" r=".5"></svg:circle><svg:circle cx="7" cy="10" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceContentArchiveLockerLockerContentArchiveFileCabinetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBook2LibraryContentBooksBookShelfStackIcon],svg[streamline-interface-content-book-2-library-content-books-book-shelf-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="3.5" height="13" x=".55" y=".5" rx=".5"></svg:rect><svg:rect width="3.5" height="11" x="4.05" y="2.5" rx=".5"></svg:rect><svg:rect width="3" height="11" x="9.26" y="2.3" rx=".5" transform="rotate(-14.05 10.779 7.795)"></svg:rect><svg:path d="M.55 10h3.5m0-1h3.5m2.5 2l2.88-.72"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentBook2LibraryContentBooksBookShelfStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookContentBooksBookCloseIcon],svg[streamline-interface-content-book-content-books-book-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 13.54H3a1.5 1.5 0 0 1 0-3h8.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3A1.5 1.5 0 0 0 1.5 2v10m10-1.46v3"></svg:path>`,
})
export class StreamlineInterfaceContentBookContentBooksBookCloseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookEditPencilContentWriteNotebookBookEditCompositionCreationIcon],svg[streamline-interface-content-book-edit-pencil-content-write-notebook-book-edit-composition-creation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 13.5H1.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9m1.5 3l1.5-3l1.5 3V12a1.5 1.5 0 0 1-3 0Zm0 6h3m-10-9v13M6 4h2"></svg:path>`,
})
export class StreamlineInterfaceContentBookEditPencilContentWriteNotebookBookEditCompositionCreationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookOpenContentBooksBookOpenIcon],svg[streamline-interface-content-book-open-content-books-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a9.26 9.26 0 0 0-5.61-2.95a1 1 0 0 1-.89-1V1.5A1 1 0 0 1 .85.74a1 1 0 0 1 .79-.23A9.3 9.3 0 0 1 7 3.43Zm0 0a9.26 9.26 0 0 1 5.61-2.95a1 1 0 0 0 .89-1V1.5a1 1 0 0 0-.35-.76a1 1 0 0 0-.79-.23A9.3 9.3 0 0 0 7 3.43Z"></svg:path>`,
})
export class StreamlineInterfaceContentBookOpenContentBooksBookOpenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookPagePagesContentBooksBookOpenIcon],svg[streamline-interface-content-book-page-pages-content-books-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 12.5a1 1 0 0 1-1.45.89l-4-2A1 1 0 0 1 2 10.5V.5l5.45 2.72a1 1 0 0 1 .55.9Z"></svg:path><svg:path d="M2 .5h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentBookPagePagesContentBooksBookOpenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentChartProductDataAnalysisAnalyticsGraphLineBusinessBoardChartIcon],svg[streamline-interface-content-chart-product-data-analysis-analytics-graph-line-business-board-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M3 3h2M3 5.5h4.5m4 0l-3 5l-3.5-2l-2 3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentChartProductDataAnalysisAnalyticsGraphLineBusinessBoardChartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentEyeGlassesVisionSunglassesProtectionSpectaclesCorrectionSunEyeGlassesIcon],svg[streamline-interface-content-eye-glasses-vision-sunglasses-protection-spectacles-correction-sun-eye-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm8 0h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm-8 0h3m5 0V3a2 2 0 0 0-2-2h-1M.5 9V3a2 2 0 0 1 2-2h1"></svg:path>`,
})
export class StreamlineInterfaceContentEyeGlassesVisionSunglassesProtectionSpectaclesCorrectionSunEyeGlassesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentFileEmptyCommonFileIcon],svg[streamline-interface-content-file-empty-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Z"></svg:path><svg:path d="M7.5.5v5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentFileEmptyCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentFireLitFlameTorchTrendingIcon],svg[streamline-interface-content-fire-lit-flame-torch-trending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.15.53a.39.39 0 0 0-.4 0a.26.26 0 0 0-.06.34C6.92 3 7.18 5.9 5.5 7.5a5.52 5.52 0 0 1-1.5-2A3.89 3.89 0 0 0 2 9a4.7 4.7 0 0 0 5 4.5c3.22 0 4.89-2 5-4.5c.13-3-2-6.69-5.85-8.47Z"></svg:path><svg:path d="M9.5 9a2 2 0 0 1-2 2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentFireLitFlameTorchTrendingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentNotePadContentNotesBookNotepadNotebookIcon],svg[streamline-interface-content-note-pad-content-notes-book-notepad-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 3.5v-3m3 3v-3m3 3v-3"></svg:path><svg:rect width="13" height="11.5" x=".5" y="2" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceContentNotePadContentNotesBookNotepadNotebookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentNotePadTextContentNotesBookNotepadNotebookIcon],svg[streamline-interface-content-note-pad-text-content-notes-book-notepad-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 3.5v-3m3 3v-3m3 3v-3"></svg:path><svg:rect width="13" height="11.5" x=".5" y="2" rx="1"></svg:rect><svg:path d="M3.5 7h7m-7 3h4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentNotePadTextContentNotesBookNotepadNotebookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentSaveDiskFloppyElectronicsDeviceDiscComputerIcon],svg[streamline-interface-content-save-disk-floppy-electronics-device-disc-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 12.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9l3-3h9a1 1 0 0 1 1 1Z"></svg:path><svg:path d="M3.5 8.5h7v5h-7zm1-8h6v4h-6z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentSaveDiskFloppyElectronicsDeviceDiscComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCursorArrow1MouseSelectCursorIcon],svg[streamline-interface-cursor-arrow-1-mouse-select-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 10.5l-4-4l2-2a1 1 0 0 0-.5-1.68L1.74.53A1 1 0 0 0 .53 1.74L2.82 11a1 1 0 0 0 1.68.46l2-2l4 4Z"></svg:path>`,
})
export class StreamlineInterfaceCursorArrow1MouseSelectCursorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCursorArrow2MouseSelectCursorIcon],svg[streamline-interface-cursor-arrow-2-mouse-select-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.15 5.45a.5.5 0 0 0 0-1L1.83.56A1 1 0 0 0 .56 1.83L4.5 13.16a.5.5 0 0 0 1 0l2-5.66Z"></svg:path>`,
})
export class StreamlineInterfaceCursorArrow2MouseSelectCursorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCursorHandHandSelectCursorFingerIcon],svg[streamline-interface-cursor-hand-hand-select-cursor-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.13a2 2 0 0 1 1.59 2.24l-.61 4.27a1 1 0 0 1-1 .86H4a1 1 0 0 1-.93-.63L2 10.21a2 2 0 0 1 1-2.53L4.35 7V2a1.5 1.5 0 0 1 3 0v3.5Z"></svg:path>`,
})
export class StreamlineInterfaceCursorHandHandSelectCursorFingerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout1CornersDashboardFrameLayoutMatOctagonSquareTriangleIcon],svg[streamline-interface-dashboard-layout-1-corners-dashboard-frame-layout-mat-octagon-square-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M.5 6.5L6 .5m7.5 6L8 .5m-7.5 7l5.5 6m7.5-6l-5.5 6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout1CornersDashboardFrameLayoutMatOctagonSquareTriangleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout2CornersDashboardFrameLayoutCircleSquareCenterIcon],svg[streamline-interface-dashboard-layout-2-corners-dashboard-frame-layout-circle-square-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5.5h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m7 13h2a1 1 0 0 0 1-1v-2m-13 0v2a1 1 0 0 0 1 1h2"></svg:path><svg:circle cx="7" cy="7" r="3.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout2CornersDashboardFrameLayoutCircleSquareCenterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout3AppApplicationDashboardHomeLayoutIcon],svg[streamline-interface-dashboard-layout-3-app-application-dashboard-home-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="7" x="8.5" y="6.5" rx=".5"></svg:rect><svg:rect width="5" height="3.01" x="8.5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="7" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="3.01" x=".5" y="10.49" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout3AppApplicationDashboardHomeLayoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayoutCircleAppApplicationDashboardHomeLayoutCircleIcon],svg[streamline-interface-dashboard-layout-circle-app-application-dashboard-home-layout-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3.25" cy="3.25" r="2.75"></svg:circle><svg:circle cx="10.75" cy="3.25" r="2.75"></svg:circle><svg:circle cx="3.25" cy="10.75" r="2.75"></svg:circle><svg:circle cx="10.75" cy="10.75" r="2.75"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDashboardLayoutCircleAppApplicationDashboardHomeLayoutCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayoutSquareAppApplicationDashboardHomeLayoutSquareIcon],svg[streamline-interface-dashboard-layout-square-app-application-dashboard-home-layout-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="5" x=".5" y=".5" rx="1"></svg:rect><svg:rect width="5" height="5" x="8.5" y=".5" rx="1"></svg:rect><svg:rect width="5" height="5" x=".5" y="8.5" rx="1"></svg:rect><svg:rect width="5" height="5" x="8.5" y="8.5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceDashboardLayoutSquareAppApplicationDashboardHomeLayoutSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDelete2RemoveBoldAddButtonButtonsDeleteIcon],svg[streamline-interface-delete-2-remove-bold-add-button-buttons-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.19 3.05a1.06 1.06 0 0 0 0-1.49l-.75-.75a1.06 1.06 0 0 0-1.44 0L7 4.76L3.05.81a1.06 1.06 0 0 0-1.49 0l-.75.75a1.06 1.06 0 0 0 0 1.49l4 4l-4 3.95a1.06 1.06 0 0 0 0 1.49l.75.75a1.06 1.06 0 0 0 1.49 0l3.95-4l4 3.95a1.06 1.06 0 0 0 1.49 0l.75-.75a1.06 1.06 0 0 0 0-1.49L9.24 7Z"></svg:path>`,
})
export class StreamlineInterfaceDelete2RemoveBoldAddButtonButtonsDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDelete3RemoveCircleGarbageTrashDeleteIcon],svg[streamline-interface-delete-3-remove-circle-garbage-trash-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m2.4 11.6l9.2-9.2m0 9.2L2.4 2.4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDelete3RemoveCircleGarbageTrashDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteBin1RemoveDeleteEmptyBinTrashGarbageIcon],svg[streamline-interface-delete-bin-1-remove-delete-empty-bin-trash-garbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 5.5l-1 8h-7l-1-8M1 3.5h12m-8.54-.29V1.48a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2"></svg:path>`,
})
export class StreamlineInterfaceDeleteBin1RemoveDeleteEmptyBinTrashGarbageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteBin2RemoveDeleteEmptyBinTrashGarbageIcon],svg[streamline-interface-delete-bin-2-remove-delete-empty-bin-trash-garbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 3.5h12m-10.5 0h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9h0Zm2 0V3a2.5 2.5 0 0 1 5 0v.5m-4 2V11m3-5.5V11"></svg:path>`,
})
export class StreamlineInterfaceDeleteBin2RemoveDeleteEmptyBinTrashGarbageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteBin3RemoveDeleteEmptyBinTrashGarbageIcon],svg[streamline-interface-delete-bin-3-remove-delete-empty-bin-trash-garbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12 .5l-1.4 12.11a1 1 0 0 1-1 .89H4.39a1 1 0 0 1-1-.89L2 .5m-1 0h12m-6 0v13m-4.54-9h9.08M2.98 9h8.04"></svg:path>`,
})
export class StreamlineInterfaceDeleteBin3RemoveDeleteEmptyBinTrashGarbageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteBin5RemoveDeleteEmptyBinTrashGarbageIcon],svg[streamline-interface-delete-bin-5-remove-delete-empty-bin-trash-garbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 3.5h12m-10.5 0h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9h0Zm2 0V3a2.5 2.5 0 0 1 5 0v.5"></svg:path>`,
})
export class StreamlineInterfaceDeleteBin5RemoveDeleteEmptyBinTrashGarbageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteCircleButtonDeleteRemoveAddCircleButtonsIcon],svg[streamline-interface-delete-circle-button-delete-remove-add-circle-buttons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.12 4.88L4.88 9.12m0-4.24l4.24 4.24"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDeleteCircleButtonDeleteRemoveAddCircleButtonsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteSquareButtonRemoveButtonsAddSquareDeleteIcon],svg[streamline-interface-delete-square-button-remove-buttons-add-square-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.12 4.88L4.88 9.12m0-4.24l4.24 4.24"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceDeleteSquareButtonRemoveButtonsAddSquareDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadBox1ArrowBoxDownDownloadInternetNetworkServerUploadIcon],svg[streamline-interface-download-box-1-arrow-box-down-download-internet-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 13.5h-1a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-1"></svg:path><svg:path d="M4.5 11L7 13.5L9.5 11M7 13.5v-6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13ZM7 .5v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadBox1ArrowBoxDownDownloadInternetNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadButton1ArrowButtonDownDownloadInternetNetworkServerUploadIcon],svg[streamline-interface-download-button-1-arrow-button-down-download-internet-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 4.75h1a.5.5 0 0 1 .5.5v7.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-7.5a.5.5 0 0 1 .5-.5h1m3.5-4v8"></svg:path><svg:path d="m5 6.75l2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadButton1ArrowButtonDownDownloadInternetNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadButton2ArrowBottomDownDownloadInternetNetworkServerUploadIcon],svg[streamline-interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.5v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1M4 6l3 3.5L10 6M7 9.5v-9"></svg:path>`,
})
export class StreamlineInterfaceDownloadButton2ArrowBottomDownDownloadInternetNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadCircleArrowCircleDownDownloadInternetNetworkServerUploadIcon],svg[streamline-interface-download-circle-arrow-circle-down-download-internet-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4 7l3 3.5L10 7m-3 3.5v-7"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDownloadCircleArrowCircleDownDownloadInternetNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadDesktopActionActionsComputerDesktopDeviceDisplayDownloadMonitorScreenIcon],svg[streamline-interface-download-desktop-action-actions-computer-desktop-device-display-download-monitor-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 3H13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 1 3h1.5M7 11v2.5m-2 0h4M7 .5v6"></svg:path><svg:path d="m5 4.5l2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadDesktopActionActionsComputerDesktopDeviceDisplayDownloadMonitorScreenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadLaptopArrowComputerDownDownloadInternetLaptopNetworkServerUploadIcon],svg[streamline-interface-download-laptop-arrow-computer-down-download-internet-laptop-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.91 9.5l-1.3 2.55a1 1 0 0 0 0 1a1 1 0 0 0 .87.47h11a1 1 0 0 0 .87-.47a1 1 0 0 0 0-1L12.09 9.5ZM5 4.5l2 2l2-2m-2 2v-6"></svg:path><svg:path d="M2.5 4.63a1 1 0 0 0-.5.87v4h10v-4a1 1 0 0 0-.5-.87"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadLaptopArrowComputerDownDownloadInternetLaptopNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadSquareArrowDownDownloadInternetNetworkServerSquareUploadIcon],svg[streamline-interface-download-square-arrow-down-download-internet-network-server-square-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m4 7l3 3.5L10 7m-3 3.5v-7"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadSquareArrowDownDownloadInternetNetworkServerSquareUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadWebsiteActionActionsComputerWebsiteDeviceDisplayDownloadMonitorScreenIcon],svg[streamline-interface-download-website-action-actions-computer-website-device-display-download-monitor-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 7v6.5M4.5 11L7 13.5L9.5 11"></svg:path><svg:path d="M2.5 13.5h-1a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1m-11-10h13"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadWebsiteActionActionsComputerWebsiteDeviceDisplayDownloadMonitorScreenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditAttachment1AttachmentLinkPaperclipUnlinkIcon],svg[streamline-interface-edit-attachment-1-attachment-link-paperclip-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13 6.81l-5.95 6a2.48 2.48 0 0 1-3.54 0L1.73 11a2.53 2.53 0 0 1 0-3.55l6.34-6.36a2 2 0 0 1 2.84 0l.71.71a2 2 0 0 1 0 2.84L6 10.28a1 1 0 0 1-1.42 0l-.35-.36a1 1 0 0 1 0-1.42L8 4.76"></svg:path>`,
})
export class StreamlineInterfaceEditAttachment1AttachmentLinkPaperclipUnlinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditAttachment2AttachmentLinkPaperclipUnlinkIcon],svg[streamline-interface-edit-attachment-2-attachment-link-paperclip-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.75 11.5V3A2.5 2.5 0 0 0 8.25.5h-2.5A2.5 2.5 0 0 0 3.25 3v8.5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1v5.5"></svg:path>`,
})
export class StreamlineInterfaceEditAttachment2AttachmentLinkPaperclipUnlinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBinocularBinocularBinocularsViewZoomIcon],svg[streamline-interface-edit-binocular-binocular-binoculars-view-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3" cy="11" r="2.5"></svg:circle><svg:path d="M5.5 3V1.5a1 1 0 0 0-1-1H3.32a1 1 0 0 0-1 .81L.55 10.5m3.95-5h5M5.5 8v3"></svg:path><svg:circle cx="11" cy="11" r="2.5"></svg:circle><svg:path d="M8.5 3V1.5a1 1 0 0 1 1-1h1.18a1 1 0 0 1 1 .81l1.79 9.19M8.5 8v3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBinocularBinocularBinocularsViewZoomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBombDeleteBombRemoveIcon],svg[streamline-interface-edit-bomb-delete-bomb-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.5" cy="7.5" r="6"></svg:circle><svg:path d="m13.5.5l-2.76 2.76M3.5 7.5a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBombDeleteBombRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBrush1BrushColorColorsDesignPaintPaintingIcon],svg[streamline-interface-edit-brush-1-brush-color-colors-design-paint-painting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1 1 0 0 0 .77-.37a1 1 0 0 0 .21-.83Zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 0 1 4 0v2a1 1 0 0 0 1 1Zm-3 8V11"></svg:path>`,
})
export class StreamlineInterfaceEditBrush1BrushColorColorsDesignPaintPaintingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBrush2BrushColorColorsDesignPaintPaintingIcon],svg[streamline-interface-edit-brush-2-brush-color-colors-design-paint-painting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.13 12.06C4.6 13.6 2 14.11.5 12.57C2.5 10.5.5 9.5 2 8a2.9 2.9 0 1 1 4.09 4.1Z"></svg:path><svg:path d="M12.92 1.08A2 2 0 0 0 11.44.5a2 2 0 0 0-1.44.67l-5.38 6A2.85 2.85 0 0 1 6.13 8a3 3 0 0 1 .77 1.31L12.83 4a2 2 0 0 0 .67-1.43a2 2 0 0 0-.58-1.49Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBrush2BrushColorColorsDesignPaintPaintingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBrush3BrushColorColorsDesignPaintPaintingRollerRollingIcon],svg[streamline-interface-edit-brush-3-brush-color-colors-design-paint-painting-roller-rolling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="4" x="2.5" y=".5" rx="1"></svg:rect><svg:path d="M8 9.5v-1a2 2 0 0 0-2-2H2.5a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1h1m4 11v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBrush3BrushColorColorsDesignPaintPaintingRollerRollingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBrush4DesignRubberStampSuppliesToolIcon],svg[streamline-interface-edit-brush-4-design-rubber-stamp-supplies-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 10.5h11v2a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-2h0Zm9-4a1 1 0 0 1-1-1V3a2.5 2.5 0 0 0-5 0v2.5a1 1 0 0 1-1 1h-1a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class StreamlineInterfaceEditBrush4DesignRubberStampSuppliesToolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditClipBinderClipClipperCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-clip-binder-clip-clipper-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 6h1a1 1 0 0 1 1 1.13l-.73 5.5a1 1 0 0 1-1 .87H2.23a1 1 0 0 1-1-.87l-.72-5.5A1 1 0 0 1 1.5 6h1"></svg:path><svg:path d="M10.46 13.5L8.33 4h.42a1.75 1.75 0 0 0 0-3.5h-3.5a1.75 1.75 0 0 0 0 3.5h.41l-2.12 9.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditClipBinderClipClipperCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditColorDropPickColorDropPickCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-color-drop-pick-color-drop-pick-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 9C12 5.5 7 .5 7 .5S2 5.5 2 9a4.77 4.77 0 0 0 5 4.5A4.77 4.77 0 0 0 12 9ZM7 .5v13m2.5-.6V3.44"></svg:path>`,
})
export class StreamlineInterfaceEditColorDropPickColorDropPickCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditColorPaletteColorPaletteCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-color-palette-color-palette-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="4.5" cy="9" r="4"></svg:circle><svg:circle cx="9.5" cy="9" r="4"></svg:circle><svg:circle cx="7" cy="5" r="4"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditColorPaletteColorPaletteCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditColorTriangleColorTriangleCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-color-triangle-color-triangle-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M3.5 9h7L7 3.5L3.5 9z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditColorTriangleColorTriangleCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCopyClipboardCopyCutPasteIcon],svg[streamline-interface-edit-copy-clipboard-copy-cut-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 3.5v-1a1 1 0 0 0-1-1h-1m-2.5 9H1.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1"></svg:path><svg:rect width="7" height="8" x="6.5" y="5.5" rx="1"></svg:rect><svg:path d="M6.75.5h-4.5l.41 1.62a.49.49 0 0 0 .48.38h2.72a.49.49 0 0 0 .48-.38Zm1.75 8h3m-3 2h3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditCopyClipboardCopyCutPasteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCropArtboardCropDesignImagePictureIcon],svg[streamline-interface-edit-crop-artboard-crop-design-image-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4.5h1.5a1 1 0 0 1 1 1V7"></svg:path><svg:path d="M4.5.5v8a1 1 0 0 0 1 1h8m-9-5h-4m9 5v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditCropArtboardCropDesignImagePictureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCutCouponCutDiscountPricePricesScissorsIcon],svg[streamline-interface-edit-cut-coupon-cut-discount-price-prices-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.49 10.5h2m2 0h2M2.19 4.93l5.8 3.33"></svg:path><svg:circle cx="2.75" cy="2.75" r="2.25"></svg:circle><svg:path d="M2.19 9.07L13.5 2.55"></svg:path><svg:circle cx="2.75" cy="11.25" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditCutCouponCutDiscountPricePricesScissorsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCutterCutterCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-cutter-cutter-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 7.5l-2 2v4l4-4"></svg:path><svg:path d="M11.67 1.33a2.82 2.82 0 0 0-4 0L2.5 6.5l4 4l5.17-5.17a2.82 2.82 0 0 0 0-4ZM6.5 6.5l3-3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditCutterCutterCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditDesignToolSelectionWandSselectionWandObjectWorkIcon],svg[streamline-interface-edit-design-tool-selection-wand-sselection-wand-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l9-9m2-2l1-1M9 2V.5M12 5h1.5M11 7l1 1M6 2l1 1"></svg:path>`,
})
export class StreamlineInterfaceEditDesignToolSelectionWandSselectionWandObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditDrawingBoardBoardDesignDrawingEaselProcessIcon],svg[streamline-interface-edit-drawing-board-board-design-drawing-easel-process-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 2.5h8a1 1 0 0 1 1 1V10h0H2h0V3.5a1 1 0 0 1 1-1ZM.5 10h13M7 2.5v-2M5.5 10L3 13.5M8.5 10l2.5 3.5"></svg:path>`,
})
export class StreamlineInterfaceEditDrawingBoardBoardDesignDrawingEaselProcessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditExpandBigBiggerDesignExpandLargerResizeSizeSquareIcon],svg[streamline-interface-edit-expand-big-bigger-design-expand-larger-resize-size-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m5 5v3m-13-3v3m11 5h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m3 0h3"></svg:path><svg:rect width="6" height="6" x="4" y="4" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceEditExpandBigBiggerDesignExpandLargerResizeSizeSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipBottomAlternate1FlipBottomObjectWorkIcon],svg[streamline-interface-edit-flip-bottom-alternate-1-flip-bottom-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7a6.5 6.5 0 0 1-13 0M13 4.39a6.13 6.13 0 0 0-.76-1.3a6.34 6.34 0 0 0-1-1.09M1.05 4.39a6.13 6.13 0 0 1 .76-1.3A6.34 6.34 0 0 1 2.85 2M8.5.67a6.7 6.7 0 0 0-3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipBottomAlternate1FlipBottomObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipBottomFlipBottomObjectWorkIcon],svg[streamline-interface-edit-flip-bottom-flip-bottom-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h13a6.5 6.5 0 0 1-13 0ZM13 4.39a6.13 6.13 0 0 0-.76-1.3a6.34 6.34 0 0 0-1-1.09M1.05 4.39a6.13 6.13 0 0 1 .76-1.3A6.34 6.34 0 0 1 2.85 2M8.5.67a6.7 6.7 0 0 0-3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipBottomFlipBottomObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipDownDesignDownFlipReflectVerticalIcon],svg[streamline-interface-edit-flip-down-design-down-flip-reflect-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 11.5v1a1 1 0 0 1-1 1h-1m-3 0h-3m-5-2v1a1 1 0 0 0 1 1h1m-2-9v-3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3m-13 4V7h13v1.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipDownDesignDownFlipReflectVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipHorizontal1ArrowDesignFlipReflectIcon],svg[streamline-interface-edit-flip-horizontal-1-arrow-design-flip-reflect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 3l4 4l-4 4V3zm13 0l-4 4l4 4V3zM7 .5v1m0 2v1m0 2v1m0 2v1m0 2v1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipHorizontal1ArrowDesignFlipReflectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipHorizontal2ArrowDesignFlipReflectIcon],svg[streamline-interface-edit-flip-horizontal-2-arrow-design-flip-reflect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 3.75l2.93 3.07a.27.27 0 0 1 0 .36L1.5 10.25m11-6.5L9.57 6.82a.27.27 0 0 0 0 .36l2.93 3.07M7 .5v1m0 2v1m0 2v1m0 2v1m0 2v1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipHorizontal2ArrowDesignFlipReflectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipLeftAlternate1FlipLeftObjectWorkIcon],svg[streamline-interface-edit-flip-left-alternate-1-flip-left-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5a6.5 6.5 0 0 0 0 13M9.61 1.05a6.13 6.13 0 0 1 1.3.76a6.34 6.34 0 0 1 1.09 1M9.61 13a6.13 6.13 0 0 0 1.3-.76a6.34 6.34 0 0 0 1.09-1m1.33-5.74a6.7 6.7 0 0 1 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipLeftAlternate1FlipLeftObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipLeftDesignFlipReflectLeftHorizontalIcon],svg[streamline-interface-edit-flip-left-design-flip-reflect-left-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h-1a1 1 0 0 0-1 1v1m0 3v3m2 5h-1a1 1 0 0 1-1-1v-1m9 2h3a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-3m-4 13H7V.5H5.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipLeftDesignFlipReflectLeftHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipLeftFlipLeftObjectWorkIcon],svg[streamline-interface-edit-flip-left-flip-left-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5a6.5 6.5 0 0 0 0 13ZM9.61 1.05a6.13 6.13 0 0 1 1.3.76a6.34 6.34 0 0 1 1.09 1M9.61 13a6.13 6.13 0 0 0 1.3-.76a6.34 6.34 0 0 0 1.09-1m1.33-5.74a6.7 6.7 0 0 1 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipLeftFlipLeftObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipRightAlternate1FlipRightObjectWorkIcon],svg[streamline-interface-edit-flip-right-alternate-1-flip-right-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5a6.5 6.5 0 0 1 0 13M4.39 1.05a6.13 6.13 0 0 0-1.3.76A6.34 6.34 0 0 0 2 2.85M4.39 13a6.13 6.13 0 0 1-1.3-.76a6.34 6.34 0 0 1-1.09-1M.67 5.5a6.7 6.7 0 0 0 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipRightAlternate1FlipRightObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipRightDesignFlipReflectRightHorizontalIcon],svg[streamline-interface-edit-flip-right-design-flip-reflect-right-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h1a1 1 0 0 1 1 1v1m0 3v3m-2 5h1a1 1 0 0 0 1-1v-1m-9 2h-3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h3m4 13H7V.5h1.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipRightDesignFlipReflectRightHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipRightFlipRightObjectWorkIcon],svg[streamline-interface-edit-flip-right-flip-right-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5a6.5 6.5 0 0 1 0 13ZM4.39 1.05a6.13 6.13 0 0 0-1.3.76A6.34 6.34 0 0 0 2 2.85M4.39 13a6.13 6.13 0 0 1-1.3-.76a6.34 6.34 0 0 1-1.09-1M.67 5.5a6.7 6.7 0 0 0 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipRightFlipRightObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipTopAlternate1FlipTopObjectWorkIcon],svg[streamline-interface-edit-flip-top-alternate-1-flip-top-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7a6.5 6.5 0 0 1 13 0M1.05 9.61a6.13 6.13 0 0 0 .76 1.3a6.34 6.34 0 0 0 1 1.09M13 9.61a6.13 6.13 0 0 1-.76 1.3a6.34 6.34 0 0 1-1 1.09M5.5 13.33a6.7 6.7 0 0 0 3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipTopAlternate1FlipTopObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipTopFlipTopObjectWorkIcon],svg[streamline-interface-edit-flip-top-flip-top-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5a6.5 6.5 0 0 1 13 0ZM1.05 9.61a6.13 6.13 0 0 0 .76 1.3a6.34 6.34 0 0 0 1 1.09M13 9.61a6.13 6.13 0 0 1-.76 1.3a6.34 6.34 0 0 1-1 1.09M5.5 13.33a6.7 6.7 0 0 0 3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipTopFlipTopObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipVertical1ArrowDesignFlipReflectUpDownIcon],svg[streamline-interface-edit-flip-vertical-1-arrow-design-flip-reflect-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.25 1.5L7.18 4.43a.27.27 0 0 1-.36 0L3.75 1.5m6.5 11L7.18 9.57a.27.27 0 0 0-.36 0L3.75 12.5M13.5 7h-1m-2 0h-1m-2 0h-1m-2 0h-1m-2 0h-1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipVertical1ArrowDesignFlipReflectUpDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipVertical2ArrowDesignFlipReflectUpDownIcon],svg[streamline-interface-edit-flip-vertical-2-arrow-design-flip-reflect-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.5l-4-4l-4 4h8zm0-13l-4 4l-4-4h8zM13.5 7h-1m-2 0h-1m-2 0h-1m-2 0h-1m-2 0h-1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipVertical2ArrowDesignFlipReflectUpDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditGlueGlueCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-glue-glue-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 8v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V8A2.5 2.5 0 0 1 5 5.5h4A2.5 2.5 0 0 1 11.5 8ZM7.5.5h-1L5 5.5h4L7.5.5zM5 11h4M2.5 8.5h9"></svg:path>`,
})
export class StreamlineInterfaceEditGlueGlueCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditGridGridLayoutLayoutsModuleIcon],svg[streamline-interface-edit-grid-grid-layout-layouts-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5 .5v13m4-13v13M13.5 5H.5m13 4H.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditGridGridLayoutLayoutsModuleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditGridOffGridLayoutLayoutsModuleOffCloseDenySlashIcon],svg[streamline-interface-edit-grid-off-grid-layout-layouts-module-off-close-deny-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13M1.79 1.79a1 1 0 0 1 .71-.29h9a1 1 0 0 1 1 1v9a1 1 0 0 1-.29.71M9 12.5H2.5a1 1 0 0 1-1-1V5m3.75-3.5v3.75m3.5-3.75v7.25m3.75-3.5H5.25m7.25 3.5H8.75m-3.5-.25v4m3.5-.5v.5M5.5 8.75h-4m.5-3.5h-.5"></svg:path>`,
})
export class StreamlineInterfaceEditGridOffGridLayoutLayoutsModuleOffCloseDenySlashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditLayerAdd1LayerAddDesignPlusLayersSquareBoxIcon],svg[streamline-interface-edit-layer-add-1-layer-add-design-plus-layers-square-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3.19v4.62M3.19 5.5h4.62"></svg:path><svg:rect width="10" height="10" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M3.5 13.5h9a1 1 0 0 0 1-1v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditLayerAdd1LayerAddDesignPlusLayersSquareBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditLayerAdd2LayerAddDesignPlusLayersSquareBoxIcon],svg[streamline-interface-edit-layer-add-2-layer-add-design-plus-layers-square-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x=".5" y="3.5" rx="1"></svg:rect><svg:path d="M3.5.5h9a1 1 0 0 1 1 1v9M5.5 6v5M8 8.5H3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditLayerAdd2LayerAddDesignPlusLayersSquareBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditMagicWandDesignMagicStarSuppliesToolWandIcon],svg[streamline-interface-edit-magic-wand-design-magic-star-supplies-tool-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51Zm-5.6 5.09L.5 13.5"></svg:path>`,
})
export class StreamlineInterfaceEditMagicWandDesignMagicStarSuppliesToolWandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditMagnetDesignMagnetSnapSuppliesToToolIcon],svg[streamline-interface-edit-magnet-design-magnet-snap-supplies-to-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.81 12.07a4.86 4.86 0 0 1-6.88-6.88L6.62.5l2.19 2.19L4.51 7A1.77 1.77 0 0 0 7 9.49l4.3-4.3l2.2 2.19Zm.38-4.76l2.19 2.19M4.5 2.62l2.19 2.19"></svg:path>`,
})
export class StreamlineInterfaceEditMagnetDesignMagnetSnapSuppliesToToolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPaintColorColorsDesignPaintPaintingPaletteIcon],svg[streamline-interface-edit-paint-color-colors-design-paint-painting-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="8.5" cy="4" r="1"></svg:circle><svg:circle cx="4.5" cy="9.5" r=".5"></svg:circle><svg:circle cx="4.5" cy="5.5" r="1"></svg:circle><svg:path d="M9.52 12.28a1 1 0 0 0-.65-.88a2 2 0 0 1 .63-3.9h1.87a2 2 0 0 0 1.89-2.67a6.5 6.5 0 1 0-6.13 8.67a6.3 6.3 0 0 0 1.74-.24a.9.9 0 0 0 .65-.98Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPaintColorColorsDesignPaintPaintingPaletteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderDividePathfinderDivideWorkIcon],svg[streamline-interface-edit-pathfinder-divide-pathfinder-divide-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5a1 1 0 0 0 1 1m0-9a1 1 0 0 0-1 1m9 0a1 1 0 0 0-1-1M4 .5h2M.5 4v2m9-1.5h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3h4a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class StreamlineInterfaceEditPathfinderDividePathfinderDivideWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderIntersectPathfinderIntersectWorkIcon],svg[streamline-interface-edit-pathfinder-intersect-pathfinder-intersect-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5a1 1 0 0 0 1 1m0-9a1 1 0 0 0-1 1m9 0a1 1 0 0 0-1-1M4 .5h2M.5 4v2m4 6.5a1 1 0 0 0 1 1m8-8a1 1 0 0 0-1-1m0 9a1 1 0 0 0 1-1m-5.5 1h2M13.5 8v2m-4-1.5v-4h-4a1 1 0 0 0-1 1v4h4a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class StreamlineInterfaceEditPathfinderIntersectPathfinderIntersectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderMergePathfinderMergeWorkIcon],svg[streamline-interface-edit-pathfinder-merge-pathfinder-merge-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.5h1a1 1 0 0 0 1-1v-1m0-3v-3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3m0 3a1 1 0 0 0 1 1m8-8a1 1 0 0 0-1-1m0 9a1 1 0 0 0 1-1m-4-8h.5m-2 9h2M13.5 8v2m-9-.5v.5"></svg:path>`,
})
export class StreamlineInterfaceEditPathfinderMergePathfinderMergeWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderOutlinePathfinderOutlineWorkIcon],svg[streamline-interface-edit-pathfinder-outline-pathfinder-outline-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 9.5a1 1 0 0 0 1-1m-5 1H6m3.5-5V6m-4-1.5a1 1 0 0 0-1 1"></svg:path><svg:path d="M.5 1.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3h-3a1 1 0 0 1-1-1Zm7.5 3h1.5M4.5 8v1.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPathfinderOutlinePathfinderOutlineWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPen1ContentCreationEditPenWriteIcon],svg[streamline-interface-edit-pen-1-content-creation-edit-pen-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 13.5l2-2m2.21.79a1 1 0 0 1-1.42 0l-1.58-1.58a1 1 0 0 1 0-1.42l8.17-8.17a2.12 2.12 0 0 1 3 3Z"></svg:path><svg:path d="M11.5 5.5L7.21 1.21a1 1 0 0 0-1.42 0L2.5 4.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPen1ContentCreationEditPenWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPen2ContentCreationEditFountainPenWriteIcon],svg[streamline-interface-edit-pen-2-content-creation-edit-fountain-pen-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 12.5a2.72 2.72 0 0 0 0-4a2.72 2.72 0 0 0-4 0c-1 1-1 5-1 5s4 0 5-1Z"></svg:path><svg:path d="M12.92 1.08a2 2 0 0 0-2.64-.15L4.5 5l-.71 2.64a2.87 2.87 0 0 1 1.71.86a2.87 2.87 0 0 1 .86 1.71L9 9.5l4.07-5.78a2 2 0 0 0-.15-2.64ZM.5 13.5l3.25-3.25"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPen2ContentCreationEditFountainPenWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPen3ContentCreationEditPenPensWriteIcon],svg[streamline-interface-edit-pen-3-content-creation-edit-pen-pens-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3a2.5 2.5 0 0 0-5 0v7.5l2.5 3l2.5-3Zm-5 1.5h5m2-2a2 2 0 0 1 4 0v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Zm2 9v2"></svg:path><svg:path d="M7.5 4.5h5a1 1 0 0 1 1 1v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPen3ContentCreationEditPenPensWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPencilChangeEditModifyPencilWriteWritingIcon],svg[streamline-interface-edit-pencil-change-edit-modify-pencil-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12.24L.5 13.5L1.76 9L10 .8a1 1 0 0 1 1.43 0l1.77 1.78a1 1 0 0 1 0 1.42Z"></svg:path>`,
})
export class StreamlineInterfaceEditPencilChangeEditModifyPencilWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPickerColorColorsDesignDropperEyeEyedropEyedropperPaintingPickerIcon],svg[streamline-interface-edit-picker-color-colors-design-dropper-eye-eyedrop-eyedropper-painting-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.46 1.54a3.52 3.52 0 0 0-5 0L2.87 6.13a3 3 0 0 0-.53 3.53L.79 11.21a1 1 0 0 0 0 1.41l.59.59a1 1 0 0 0 1.41 0l1.55-1.55a3 3 0 0 0 3.53-.53l4.59-4.59a3.52 3.52 0 0 0 0-5ZM4.5 1.5l8 8"></svg:path>`,
})
export class StreamlineInterfaceEditPickerColorColorsDesignDropperEyeEyedropEyedropperPaintingPickerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPin1PinPushThumbtackIcon],svg[streamline-interface-edit-pin-1-pin-push-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9" cy="5" r="4.5"></svg:circle><svg:path d="m.5 13.5l5.58-5.07"></svg:path><svg:circle cx="8.5" cy="3.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditPin1PinPushThumbtackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPin2PinPushThumbtackIcon],svg[streamline-interface-edit-pin-2-pin-push-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.73 7.65L13 5.54A1 1 0 0 0 13.21 4L10 .79A1 1 0 0 0 8.46 1L6.3 4.23l-4.49 1a.6.6 0 0 0-.29 1l6.15 6.16a.61.61 0 0 0 1-.3ZM4.59 9.38L.5 13.5"></svg:path>`,
})
export class StreamlineInterfaceEditPin2PinPushThumbtackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPin3PinPushThumbtackIcon],svg[streamline-interface-edit-pin-3-pin-push-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9" cy="5" r="4.5"></svg:circle><svg:path d="M10.25 3.67a1.5 1.5 0 0 0-2.31-.23M.5 13.5l5.58-5.07"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPin3PinPushThumbtackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPrinterPrinterCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-printer-printer-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 8.5h9a1 1 0 0 1 1 1v4h0h-11h0v-4a1 1 0 0 1 1-1Z"></svg:path><svg:path d="M1.5 9.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M3 .5h8v5H3zM4 11h6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPrinterPrinterCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditQuillChangeEditFeatherModifyQuillWriteWritingIcon],svg[streamline-interface-edit-quill-change-edit-feather-modify-quill-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.51 10.05a10.21 10.21 0 0 0 3 .45A10 10 0 0 0 13.5 1a10.16 10.16 0 0 0-3-.45a10 10 0 0 0-9.99 9.5Z"></svg:path><svg:path d="M1 13.5a9.65 9.65 0 0 1-.49-3.45M8.01 5l2.57 2.57"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditQuillChangeEditFeatherModifyQuillWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditRotateAngleRotateAngleCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-rotate-angle-rotate-angle-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v13h13"></svg:path><svg:path d="M7.5 13.5a7 7 0 0 0-7-7m0 7L3 11m2.5-2.5L7 7m2-2l1.5-1.5m2-2l1-1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditRotateAngleRotateAngleCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditRulerRulerCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-ruler-ruler-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.502 9.496L9.503.495l4.002 4.002l-9.001 9.001zM7.5 2.5L9 4M5 5l1.5 1.5m-4 1L4 9"></svg:path>`,
})
export class StreamlineInterfaceEditRulerRulerCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditScissorsClipboardCopyCutPasteRightScissorsIcon],svg[streamline-interface-edit-scissors-clipboard-copy-cut-paste-right-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.19 4.93l11.31 6.52"></svg:path><svg:circle cx="2.75" cy="2.75" r="2.25"></svg:circle><svg:path d="M2.19 9.07L13.5 2.55"></svg:path><svg:circle cx="2.75" cy="11.25" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditScissorsClipboardCopyCutPasteRightScissorsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectAreaCircleDashSelectAreaObjectWorkIcon],svg[streamline-interface-edit-select-area-circle-dash-select-area-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5.67a6.7 6.7 0 0 0-3 0m-1.91.8a7 7 0 0 0-1.19.93a7 7 0 0 0-.93 1.19M.67 5.5a6.7 6.7 0 0 0 0 3m.8 1.91a7 7 0 0 0 .93 1.19a7 7 0 0 0 1.19.93m1.91.8a6.7 6.7 0 0 0 3 0m1.91-.8a7 7 0 0 0 1.19-.93a7 7 0 0 0 .93-1.19m.8-1.91a6.7 6.7 0 0 0 0-3m-.8-1.91a7 7 0 0 0-.93-1.19a7 7 0 0 0-1.19-.93"></svg:path>`,
})
export class StreamlineInterfaceEditSelectAreaCircleDashSelectAreaObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectAreaRectangleDashSelectAreaObjectWorkIcon],svg[streamline-interface-edit-select-area-rectangle-dash-select-area-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m5 5v3m-13-3v3m11 5h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m3 0h3"></svg:path>`,
})
export class StreamlineInterfaceEditSelectAreaRectangleDashSelectAreaObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectBackBehindBoxDesignLayerLayersSelectSendToBackIcon],svg[streamline-interface-edit-select-back-behind-box-design-layer-layers-select-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 9.5a1 1 0 0 0 1 1m0-10a1 1 0 0 0-1 1m10 0a1 1 0 0 0-1-1m0 10a1 1 0 0 0 1-1"></svg:path><svg:path d="M10.5 13.5h-8a2 2 0 0 1-2-2v-8m7-3h2m-2 10h2m4-6v2m-10-2v2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSelectBackBehindBoxDesignLayerLayersSelectSendToBackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectFrameCursorFrameSelectIcon],svg[streamline-interface-edit-select-frame-cursor-frame-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5.5h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m7 13h2a1 1 0 0 0 1-1v-2m-13 0v2a1 1 0 0 0 1 1h2"></svg:path>`,
})
export class StreamlineInterfaceEditSelectFrameCursorFrameSelectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectFrontDesignFrontLayerLayersSelectSendToTopIcon],svg[streamline-interface-edit-select-front-design-front-layer-layers-select-send-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x="3.5" y=".5" rx="1"></svg:rect><svg:path d="M.5 12.5a1 1 0 0 0 1 1m3 0H6m3 0h1.5M.5 8v1.5m0-6V5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSelectFrontDesignFrontLayerLayersSelectSendToTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSkull1CrashDeathDeleteDieErrorGarbageRemoveSkullTrashIcon],svg[streamline-interface-edit-skull-1-crash-death-delete-die-error-garbage-remove-skull-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 6.5a6 6 0 1 0-9.5 4.87v1.13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1.13A6 6 0 0 0 13 6.5Z"></svg:path><svg:circle cx="4.5" cy="7" r=".5"></svg:circle><svg:circle cx="9.5" cy="7" r=".5"></svg:circle><svg:path d="M6 11.5v2m2-2v2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSkull1CrashDeathDeleteDieErrorGarbageRemoveSkullTrashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSprayCanColorColorsDesignPaintPaintingSprayIcon],svg[streamline-interface-edit-spray-can-color-colors-design-paint-painting-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="6" height="9" x=".5" y="4.5" rx="1"></svg:rect><svg:path d="M3.5 2v2.5m5-3l5-1m-5 3l5 1M2.5 2h2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSprayCanColorColorsDesignPaintPaintingSprayIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSwatchColorColorsDesignPaintingPaletteSampleSwatchIcon],svg[streamline-interface-edit-swatch-color-colors-design-painting-palette-sample-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5.5h3a1 1 0 0 1 1 1V11A2.5 2.5 0 0 1 3 13.5h0A2.5 2.5 0 0 1 .5 11V1.5a1 1 0 0 1 1-1Z"></svg:path><svg:path d="M5.5 5L9 1.48a1 1 0 0 1 1.41 0l2.11 2.12a1 1 0 0 1 0 1.41l-7.75 7.76"></svg:path><svg:path d="M9 8.5h3.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3m-2.5-9h5m-5 4h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSwatchColorColorsDesignPaintingPaletteSampleSwatchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditTypewriterTypewriterCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-typewriter-typewriter-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5h13v3H.5zM3 .5h8a.5.5 0 0 1 .5.5v2.5h0h-9h0V1A.5.5 0 0 1 3 .5Z"></svg:path><svg:circle cx="3" cy="8" r="1.5"></svg:circle><svg:circle cx="11" cy="8" r="1.5"></svg:circle><svg:path d="M2.5 9.41v3.09a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9.41m-9 .09h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditTypewriterTypewriterCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditViewEyeEyeballOpenViewIcon],svg[streamline-interface-edit-view-eye-eyeball-open-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.23 6.33a1 1 0 0 1 0 1.34C12.18 8.8 9.79 11 7 11S1.82 8.8.77 7.67a1 1 0 0 1 0-1.34C1.82 5.2 4.21 3 7 3s5.18 2.2 6.23 3.33Z"></svg:path><svg:circle cx="7" cy="7" r="2"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditViewEyeEyeballOpenViewIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditViewOffDisableEyeEyeballHideOffViewIcon],svg[streamline-interface-edit-view-off-disable-eye-eyeball-hide-off-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.29 5.4c.38.34.7.67.94.93a1 1 0 0 1 0 1.34C12.18 8.8 9.79 11 7 11h-.4m-2.73-.87a12.4 12.4 0 0 1-3.1-2.46a1 1 0 0 1 0-1.34C1.82 5.2 4.21 3 7 3a6.56 6.56 0 0 1 3.13.87M12.5 1.5l-11 11"></svg:path><svg:path d="M5.59 8.41A2 2 0 0 1 5 7a2 2 0 0 1 2-2a2 2 0 0 1 1.41.59M8.74 8a2 2 0 0 1-.74.73"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditViewOffDisableEyeEyeballHideOffViewIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditWrite1EditEditionFormPenTextWriteIcon],svg[streamline-interface-edit-write-1-edit-edition-form-pen-text-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.5h11m-5-3.5l-3 .54L4 7.5L10.73.79a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42Z"></svg:path>`,
})
export class StreamlineInterfaceEditWrite1EditEditionFormPenTextWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditWrite2ChangeDocumentEditModifyPaperPencilWriteWritingIcon],svg[streamline-interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.5 9l-3 .54L5 6.5L10.73.79a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42Z"></svg:path><svg:path d="M12 9.5v3a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditWrite2ChangeDocumentEditModifyPaperPencilWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditWriteCircleChangeCircleEditModifyPencilWriteWritingIcon],svg[streamline-interface-edit-write-circle-change-circle-edit-modify-pencil-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 7A6.5 6.5 0 1 1 7 .5"></svg:path><svg:path d="m10.5.5l-5 5l-1 4l4-1l5-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditWriteCircleChangeCircleEditModifyPencilWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditZoomInEnhanceGlassInMagnifyMagnifyingZoomIcon],svg[streamline-interface-edit-zoom-in-enhance-glass-in-magnify-magnifying-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5.92" cy="5.92" r="5.42"></svg:circle><svg:path d="M13.5 13.5L9.75 9.75M6 3.5v5M3.5 6h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditZoomInEnhanceGlassInMagnifyMagnifyingZoomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditZoomOutGlassMagnifyingOutReduceZoomIcon],svg[streamline-interface-edit-zoom-out-glass-magnifying-out-reduce-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5.92" cy="5.92" r="5.42"></svg:circle><svg:path d="M13.5 13.5L9.75 9.75M3.5 6h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditZoomOutGlassMagnifyingOutReduceZoomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteAwardRibbonRewardLikeSocialRatingMediaIcon],svg[streamline-interface-favorite-award-ribbon-reward-like-social-rating-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.87" cy="5" r="4.5"></svg:circle><svg:circle cx="6.87" cy="5" r="2"></svg:circle><svg:path d="m6 9.42l-.88 3.7a.51.51 0 0 1-.26.33a.54.54 0 0 1-.43 0L1.11 12a.51.51 0 0 1-.18-.78L3.5 8M8 9.37l.9 3.75a.5.5 0 0 0 .27.33a.51.51 0 0 0 .42 0l3.3-1.45a.5.5 0 0 0 .28-.35a.48.48 0 0 0-.1-.43l-2.68-3.41"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFavoriteAwardRibbonRewardLikeSocialRatingMediaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteDislike1RewardDownThumbHandSocialMediaDislikeRatingIcon],svg[streamline-interface-favorite-dislike-1-reward-down-thumb-hand-social-media-dislike-rating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.37 8.15l2.54 4.06a1.09 1.09 0 0 0 .94.52h0A1.11 1.11 0 0 0 8 11.63V8.72h4.39a1.15 1.15 0 0 0 1.1-1.32l-.8-5.16a1.14 1.14 0 0 0-1.13-1H5a2 2 0 0 0-.9.21l-.72.36m-.01 6.34V1.84M1 1.84h2.37v6.31h0H1a.5.5 0 0 1-.5-.5V2.34a.5.5 0 0 1 .5-.5Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteDislike1RewardDownThumbHandSocialMediaDislikeRatingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteGiveHeartRewardSocialRatingMediaHeartHandIcon],svg[streamline-interface-favorite-give-heart-reward-social-rating-media-heart-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5h2A2.5 2.5 0 0 1 5 11h0m-3 0h5a2 2 0 0 1 2 2h0a.5.5 0 0 1-.5.5h-8m8.25-5l-4-3.7c-2.18-2.19 1-6.43 4-3c3-3.42 6.21.82 4 3Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteGiveHeartRewardSocialRatingMediaHeartHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteHeartRewardSocialRatingMediaHeartItLikeFavoriteLoveIcon],svg[streamline-interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteHeartRewardSocialRatingMediaHeartItLikeFavoriteLoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteLike1RewardSocialUpRatingMediaLikeThumbHandIcon],svg[streamline-interface-favorite-like-1-reward-social-up-rating-media-like-thumb-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.37 5.85l2.54-4.06a1.09 1.09 0 0 1 .94-.52h0A1.11 1.11 0 0 1 8 2.37v2.91h4.39a1.15 1.15 0 0 1 1.1 1.32l-.8 5.16a1.14 1.14 0 0 1-1.13 1H5a2 2 0 0 1-.9-.21l-.72-.36m-.01-6.34v6.31M1 5.85h2.37v6.31h0H1a.5.5 0 0 1-.5-.5V6.35a.5.5 0 0 1 .5-.5Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteLike1RewardSocialUpRatingMediaLikeThumbHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteStarRewardRatingRateSocialStarMediaFavoriteLikeStarsIcon],svg[streamline-interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteStarRewardRatingRateSocialStarMediaFavoriteLikeStarsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileAddAlternateFileCommonAddIcon],svg[streamline-interface-file-add-alternate-file-common-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 5.5v-4a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-5"></svg:path><svg:path d="M8.5.5v5h5m-10 2v6m-3-3h6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileAddAlternateFileCommonAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileAddFileCommonAddIcon],svg[streamline-interface-file-add-file-common-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Zm-6-6.75v3.5M4.75 7.5h3.5"></svg:path>`,
})
export class StreamlineInterfaceFileAddFileCommonAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileBookmarkTextCommonBookmarkIcon],svg[streamline-interface-file-bookmark-text-common-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4Z"></svg:path><svg:path d="m8 7.5l-2-2l-2 2v-7h4v7z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileBookmarkTextCommonBookmarkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileCheckFileCommonCheckIcon],svg[streamline-interface-file-check-file-common-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Z"></svg:path><svg:path d="m4.5 8.5l1.5 1l2.5-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileCheckFileCommonCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardAddEditTaskEditionAddClipboardFormIcon],svg[streamline-interface-file-clipboard-add-edit-task-edition-add-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="M7 6v4m2-2H5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardAddEditTaskEditionAddClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardBlockEditTaskEditionBlockClipboardFormIcon],svg[streamline-interface-file-clipboard-block-edit-task-edition-block-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 13.5h-4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1H3m5 0h1.5a1 1 0 0 1 1 1v2"></svg:path><svg:rect width="5" height="2.5" x="3" y=".5" rx="1"></svg:rect><svg:circle cx="10.25" cy="10.25" r="3.25"></svg:circle><svg:path d="m7.95 12.55l4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardBlockEditTaskEditionBlockClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardCheckCheckmarkEditTaskEditionChecklistCheckSuccessClipboardFormIcon],svg[streamline-interface-file-clipboard-check-checkmark-edit-task-edition-checklist-check-success-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="m4.5 8.5l2 1.5L9 6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardCheckCheckmarkEditTaskEditionChecklistCheckSuccessClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardDeleteEditTaskEditionDeleteClipboardFormIcon],svg[streamline-interface-file-clipboard-delete-edit-task-edition-delete-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="m5.5 6.5l3 3m0-3l-3 3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardDeleteEditTaskEditionDeleteClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardRemoveEditTaskEditionRemoveDeleteClipboardFormIcon],svg[streamline-interface-file-clipboard-remove-edit-task-edition-remove-delete-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="M9 8H5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardRemoveEditTaskEditionRemoveDeleteClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardTextEditionFormTaskChecklistEditClipboardIcon],svg[streamline-interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="M4.5 5.5h5M4.5 8h5m-5 2.5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardTextEditionFormTaskChecklistEditClipboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardWorkPlainClipboardTaskListCompanyOfficeIcon],svg[streamline-interface-file-clipboard-work-plain-clipboard-task-list-company-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceFileClipboardWorkPlainClipboardTaskListCompanyOfficeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileDeleteAlternateFileCommonDeleteIcon],svg[streamline-interface-file-delete-alternate-file-common-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 7V1.5a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1H8"></svg:path><svg:path d="M8.5.5v5h5M4.74 9.26L.5 13.5m0-4.24l4.24 4.24"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileDeleteAlternateFileCommonDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileDeleteFileCommonDeleteIcon],svg[streamline-interface-file-delete-file-common-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5ZM8.74 6L4.5 10.24M4.5 6l4.24 4.24"></svg:path>`,
})
export class StreamlineInterfaceFileDeleteFileCommonDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileDoubleFileCommonDoubleIcon],svg[streamline-interface-file-double-file-common-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h4.5l3 3Z"></svg:path><svg:path d="M9.5 13.5h-7a1 1 0 0 1-1-1v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileDoubleFileCommonDoubleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileFolderWorkOfficeCompanyFolderSuppliesFileIcon],svg[streamline-interface-file-folder-work-office-company-folder-supplies-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.91 12.56l-.41-7A.5.5 0 0 1 1 5h4.61a.51.51 0 0 1 .49.38L6.5 7H13a.5.5 0 0 1 .5.54l-.39 5a1 1 0 0 1-1 .92H1.91a1 1 0 0 1-1-.9ZM3.5 3V1A.5.5 0 0 1 4 .5h8.5a.5.5 0 0 1 .5.5v4M7.5 3h3"></svg:path>`,
})
export class StreamlineInterfaceFileFolderWorkOfficeCompanyFolderSuppliesFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileMultipleDoubleCommonFileIcon],svg[streamline-interface-file-multiple-double-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="11" x="2" y="2.5" rx="1"></svg:rect><svg:path d="M4 5h4M4 7.5h4M4 10h2M4.5.5H11a1 1 0 0 1 1 1V11"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileMultipleDoubleCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileRemoveAlternateFileCommonRemoveMinusSubtractIcon],svg[streamline-interface-file-remove-alternate-file-common-remove-minus-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 7.5v-6a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-6"></svg:path><svg:path d="M8.5.5v5h5m-13 5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileRemoveAlternateFileCommonRemoveMinusSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileRemoveFileCommonRemoveMinusSubtractIcon],svg[streamline-interface-file-remove-file-common-remove-minus-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Zm-7.75-5h3.5"></svg:path>`,
})
export class StreamlineInterfaceFileRemoveFileCommonRemoveMinusSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileSettingFileCommonSettingIcon],svg[streamline-interface-file-setting-file-common-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.39 4V1.5a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-3.5"></svg:path><svg:path d="M8.39.5v5h5m-9.75 1V8m-3.03.25l1.3.75m-1.3 2.75l1.3-.75m1.73 2.5V12m3.03-.25L5.37 11m1.3-2.75L5.37 9"></svg:path><svg:circle cx="3.64" cy="10" r="2"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceFileSettingFileCommonSettingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileStickyNoteEmptyCommonFileIcon],svg[streamline-interface-file-sticky-note-empty-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 13.5h-7a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7Z"></svg:path><svg:path d="M8.5 9v4.5l5-5H9a.5.5 0 0 0-.5.5Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileStickyNoteEmptyCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileTextTextCommonFileIcon],svg[streamline-interface-file-text-text-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Zm-8-8h2m-2 3h5m-5 3h5"></svg:path>`,
})
export class StreamlineInterfaceFileTextTextCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileZipFileCommonZipIcon],svg[streamline-interface-file-zip-file-common-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h6l4 4ZM4 3.5h3m-3 3h3m-3 3h3M5.5.5v10"></svg:path>`,
})
export class StreamlineInterfaceFileZipFileCommonZipIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderAddAddFolderPlusIcon],svg[streamline-interface-folder-add-add-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.75v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Zm6.63-5.5v3.5M5.38 8h3.5"></svg:path>`,
})
export class StreamlineInterfaceFolderAddAddFolderPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderBlockBlockFolderSubtractIcon],svg[streamline-interface-folder-block-block-folder-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75 12H1.5a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.28 1.24h6a1 1 0 0 1 1 1v1.75"></svg:path><svg:circle cx="10.25" cy="10.25" r="3.25"></svg:circle><svg:path d="m7.95 12.55l4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFolderBlockBlockFolderSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderCheckRemoveCheckFolderSubtractIcon],svg[streamline-interface-folder-check-remove-check-folder-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 11.75v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Z"></svg:path><svg:path d="m5 8.75l1.5 1l2.5-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFolderCheckRemoveCheckFolderSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderDeleteRemoveMinusFolderSubtractDeleteIcon],svg[streamline-interface-folder-delete-remove-minus-folder-subtract-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.75v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1ZM5 8h3.5"></svg:path>`,
})
export class StreamlineInterfaceFolderDeleteRemoveMinusFolderSubtractDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderEmptyFolderIcon],svg[streamline-interface-folder-empty-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6A1.5 1.5 0 0 0 12 4.5H7l-1.44-3H2A1.5 1.5 0 0 0 .5 3v8A1.5 1.5 0 0 0 2 12.5h10a1.5 1.5 0 0 0 1.5-1.5Z"></svg:path>`,
})
export class StreamlineInterfaceFolderEmptyFolderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderRemoveRemoveMinusFolderSubtractDeleteIcon],svg[streamline-interface-folder-remove-remove-minus-folder-subtract-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.75v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Zm8-5l-3 3m0-3l3 3"></svg:path>`,
})
export class StreamlineInterfaceFolderRemoveRemoveMinusFolderSubtractDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderZipZipFolderCompactIcon],svg[streamline-interface-folder-zip-zip-folder-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6.25h3m-3 3h3m-1.5-6v7m-9 1.5v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Z"></svg:path>`,
})
export class StreamlineInterfaceFolderZipZipFolderCompactIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricPentagonPentagonDesignGeometricShapeShapesIcon],svg[streamline-interface-geometric-pentagon-pentagon-design-geometric-shape-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6L7 .5L.5 6l3 7.5h7l3-7.5z"></svg:path>`,
})
export class StreamlineInterfaceGeometricPentagonPentagonDesignGeometricShapeShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricPolygonPolygonOctangleDesignGeometricShapeShapesIcon],svg[streamline-interface-geometric-polygon-polygon-octangle-design-geometric-shape-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 13.5h-5l-4-4v-5l4-4h5l4 4v5l-4 4z"></svg:path>`,
})
export class StreamlineInterfaceGeometricPolygonPolygonOctangleDesignGeometricShapeShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricSquareSquareGeometricDesignShapeShapesIcon],svg[streamline-interface-geometric-square-square-geometric-design-shape-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="13" x=".5" y=".5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect>`,
})
export class StreamlineInterfaceGeometricSquareSquareGeometricDesignShapeShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricTriangleGeometricTriangleShapeDesignShapesIcon],svg[streamline-interface-geometric-triangle-geometric-triangle-shape-design-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.46 2a.55.55 0 0 0-.92 0l-6 9.5a.5.5 0 0 0 0 .5a.54.54 0 0 0 .46.25h12a.54.54 0 0 0 .46-.25a.5.5 0 0 0 0-.5Z"></svg:path>`,
})
export class StreamlineInterfaceGeometricTriangleGeometricTriangleShapeDesignShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpCustomerSupport1CustomerHeadsetHelpMicrophonePhoneSupportIcon],svg[streamline-interface-help-customer-support-1-customer-headset-help-microphone-phone-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 7V4.37A3.93 3.93 0 0 1 7 .5h0a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM9 12.25a2 2 0 0 0 2-2h0V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25Z"></svg:path>`,
})
export class StreamlineInterfaceHelpCustomerSupport1CustomerHeadsetHelpMicrophonePhoneSupportIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpCustomerSupport2CustomerHeadphonesHeadsetHelpMicrophonePhonePersonSupportIcon],svg[streamline-interface-help-customer-support-2-customer-headphones-headset-help-microphone-phone-person-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 6h1a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm11 3.5h-1A.5.5 0 0 1 11 9V6.5a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1Zm-3 2.75a2 2 0 0 0 2-2h0V9.5"></svg:path><svg:path d="M8.25 11a1.25 1.25 0 0 1 0 2.5h-1.5a1.25 1.25 0 0 1 0-2.5ZM2.5 6V5a4.5 4.5 0 0 1 9 0v1m-6-2v1.5m3-1.5v1.5m-3 2c0 1.33 3 1.33 3 0"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHelpCustomerSupport2CustomerHeadphonesHeadsetHelpMicrophonePhonePersonSupportIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpCustomerSupport4CustomerHeadsetHelpPhoneSupportIcon],svg[streamline-interface-help-customer-support-4-customer-headset-help-phone-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a6.5 6.5 0 0 1 13 0v5.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1"></svg:path>`,
})
export class StreamlineInterfaceHelpCustomerSupport4CustomerHeadsetHelpPhoneSupportIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpCustomerSupport5CustomerHeadsetHelpPhoneSupportIcon],svg[streamline-interface-help-customer-support-5-customer-headset-help-phone-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="3" height="6" x="2.5" y="7.5" rx="1"></svg:rect><svg:rect width="3" height="6" x="8.5" y="7.5" rx="1"></svg:rect><svg:path d="M.5 9.5V7a6.5 6.5 0 0 1 13 0v2.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHelpCustomerSupport5CustomerHeadsetHelpPhoneSupportIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpCustomerSupportHuman1CustomerHeadphonesHelpHeadsetPersonProfileSuuportIcon],svg[streamline-interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="2.5"></svg:circle><svg:path d="M7 4.5v-4m2.5 13V12h2a1 1 0 0 0 1-1V7a5.5 5.5 0 0 0-3-4.9m-5 0a5.5 5.5 0 0 0 0 9.8v1.6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHelpCustomerSupportHuman1CustomerHeadphonesHelpHeadsetPersonProfileSuuportIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpQuestionCircleCircleFaqFrameHelpInfoMarkMoreQueryQuestionIcon],svg[streamline-interface-help-question-circle-circle-faq-frame-help-info-mark-more-query-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5A1.5 1.5 0 1 1 7 7v1"></svg:path><svg:path fill="currentColor" d="M7 9.5a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 9.5Z"></svg:path>`,
})
export class StreamlineInterfaceHelpQuestionCircleCircleFaqFrameHelpInfoMarkMoreQueryQuestionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpQuestionMessageBubbleHelpMarkMessageQueryQuestionSpeechIcon],svg[streamline-interface-help-question-message-bubble-help-mark-message-query-question-speech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h2v2.5L6.62 11h5.88a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 4.5A1.5 1.5 0 1 1 7 6v.5"></svg:path><svg:path fill="currentColor" d="M7 8a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 8Z"></svg:path>`,
})
export class StreamlineInterfaceHelpQuestionMessageBubbleHelpMarkMessageQueryQuestionSpeechIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpQuestionSquareFrameHelpMarkQueryQuestionSquareIcon],svg[streamline-interface-help-question-square-frame-help-mark-query-question-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="13" x=".5" y=".5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5A1.5 1.5 0 1 1 7 7v1"></svg:path><svg:path fill="currentColor" d="M7 9.5a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 9.5Z"></svg:path>`,
})
export class StreamlineInterfaceHelpQuestionSquareFrameHelpMarkQueryQuestionSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHierarchy1NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon],svg[streamline-interface-hierarchy-1-node-organization-links-structure-link-nodes-network-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.5" cy="7" r="2"></svg:circle><svg:circle cx="11.5" cy="2.5" r="2"></svg:circle><svg:circle cx="11.5" cy="11.5" r="2"></svg:circle><svg:path d="m3.71 5.41l5.85-2.43M3.71 8.59l5.85 2.43"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHierarchy1NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHierarchy2NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon],svg[streamline-interface-hierarchy-2-node-organization-links-structure-link-nodes-network-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="2.5" r="1.5"></svg:circle><svg:circle cx="2" cy="11.5" r="1.5"></svg:circle><svg:circle cx="7" cy="11.5" r="1.5"></svg:circle><svg:circle cx="12" cy="11.5" r="1.5"></svg:circle><svg:path d="M2 10V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2M7 4v6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHierarchy2NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHierarchy3NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon],svg[streamline-interface-hierarchy-3-node-organization-links-structure-link-nodes-network-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="3.5" height="3.5" x=".5" y="10" rx=".5"></svg:rect><svg:rect width="3.5" height="3.5" x="10" y="10" rx=".5"></svg:rect><svg:rect width="4" height="4" x="5" y=".5" rx=".5"></svg:rect><svg:path d="M4 12h6M5.09 4.29L2.5 10m6.41-5.71L11.5 10"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHierarchy3NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHome1HomeHouseMapRoofIcon],svg[streamline-interface-home-1-home-house-map-roof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class StreamlineInterfaceHome1HomeHouseMapRoofIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHome2DoorEntranceHomeHouseMapRoofRoundIcon],svg[streamline-interface-home-2-door-entrance-home-house-map-roof-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 9L7 2.5L13.5 9"></svg:path><svg:path d="M2.5 7v6.5h9V7M7 13.5v-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHome2DoorEntranceHomeHouseMapRoofRoundIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHome3HomeHouseMapRoofIcon],svg[streamline-interface-home-3-home-house-map-roof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7L7 .5L13.5 7m-11 1.5v5h9v-5"></svg:path>`,
})
export class StreamlineInterfaceHome3HomeHouseMapRoofIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
