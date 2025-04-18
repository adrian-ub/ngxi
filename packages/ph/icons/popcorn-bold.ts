import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPopcornBoldIcon],svg[ph-popcorn-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.28 71.32a12 12 0 0 0-7-3.25a48 48 0 0 0-55.19-31a48 48 0 0 0-84.24 0a48 48 0 0 0-55.19 31a12 12 0 0 0-10.34 14.68l30.55 129.83A19.92 19.92 0 0 0 70.34 228h115.32a19.92 19.92 0 0 0 19.47-15.42l30.55-129.83a12 12 0 0 0-3.4-11.43M76 60a23.7 23.7 0 0 1 11.23 2.79a12 12 0 0 0 17.35-8a24 24 0 0 1 46.84 0a12 12 0 0 0 17.35 8A23.7 23.7 0 0 1 180 60a24 24 0 0 1 21.78 13.87l-33.13 9.46l-33.22-13.28a19.9 19.9 0 0 0-14.86 0L87.35 83.33l-33.13-9.46A24 24 0 0 1 76 60m25.13 43.67L128 92.92l26.87 10.75L141.49 204h-27Zm-52.77-6.51l28.78 8.22L90.29 204H73.5ZM182.5 204h-16.79l13.15-98.62l28.78-8.22Z"></svg:path>`,
})
export class PhPopcornBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
