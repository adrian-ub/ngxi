import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJihanpiIcon],svg[arcticons-jihanpi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.997 17.012a15.532 15.532 0 1 1 22.769 17.471C24.824 38.491 24 42.5 24 42.5s-.823-4.009-7.766-8.017a15.53 15.53 0 0 1-7.237-17.47z"></svg:path><svg:circle cx="30" cy="14.033" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 31.033h-7a6 6 0 0 1-6-6V13.89"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 21.033s6.667-.822 13.824-2.74"></svg:path>`,
})
export class ArcticonsJihanpiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
