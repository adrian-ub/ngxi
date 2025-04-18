import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAicameraIcon],svg[arcticons-aicamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.25 18.371h-6.5L17.5 24l3.25 5.629h6.5L30.5 24zM30.5 24l8.75 15.155M8.75 8.845L17.5 24m12-20.784l-8.75 15.155m6.5 11.258L18.5 44.784m2.25-15.155H3.246M27.25 18.371h17.504"></svg:path>`,
})
export class ArcticonsAicameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
