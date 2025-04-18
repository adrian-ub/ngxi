import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSwimBoldIcon],svg[ph-person-simple-swim-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m90.44 108.6l6.24-6.24A83.54 83.54 0 0 0 56.24 92H40a12 12 0 0 1 0-24h16.24a107.28 107.28 0 0 1 76.36 31.64l40.25 40.25c10.74.27 22.11-3.64 35.49-14.73a12 12 0 1 1 15.32 18.47C205.49 158.7 189.06 164 174.15 164c-19.76 0-36.86-9.29-51.88-17.45c-25.06-13.61-44.86-24.36-74.61.31a12 12 0 1 1-15.32-18.48c21.73-18.02 40.96-22.06 58.1-19.78M140 72a36 36 0 1 1 36 36a36 36 0 0 1-36-36m24 0a12 12 0 1 0 12-12a12 12 0 0 0-12 12m44.34 109.16c-29.75 24.67-49.55 13.92-74.61.3c-26.35-14.3-59.14-32.11-101.39 2.93a12 12 0 1 0 15.32 18.47c29.75-24.66 49.55-13.92 74.61-.3c15 8.15 32.12 17.44 51.88 17.44c14.91 0 31.34-5.29 49.51-20.36a12 12 0 0 0-15.32-18.48"></svg:path>`,
})
export class PhPersonSimpleSwimBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
