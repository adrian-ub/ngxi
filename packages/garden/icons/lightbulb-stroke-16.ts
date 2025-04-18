import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLightbulbStroke16Icon],svg[garden-lightbulb-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M5.5 10.997a4.96 4.96 0 0 1-3-4.542c0-2.738 2.24-4.955 5-4.955s5 2.217 5 4.955a4.96 4.96 0 0 1-3 4.542V12.5h-4z"></svg:path><svg:path stroke-linejoin="round" d="M6.5 7.5h2zm1 0V10z"></svg:path></svg:g><svg:path fill="currentColor" d="M5 14h5v.727C10 15.43 9.43 16 8.727 16H6.273C5.57 16 5 15.43 5 14.727z"></svg:path>`,
})
export class GardenLightbulbStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
