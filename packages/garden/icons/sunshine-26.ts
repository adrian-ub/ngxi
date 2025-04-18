import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSunshine26Icon],svg[garden-sunshine-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.996 24A13 13 0 0 1 0 19C0 11.82 5.82 6 13 6s13 5.82 13 13c0 1.772-.354 3.46-.996 5z"></svg:path>`,
})
export class GardenSunshine26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
