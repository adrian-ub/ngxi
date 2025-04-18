import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCurveArrayIcon],svg[iconoir-curve-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.164 17a17.5 17.5 0 0 1 1.132-3M11.5 7.794A17 17 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path><svg:path d="M9.5 12a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m10-5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path></svg:g>`,
})
export class IconoirCurveArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
