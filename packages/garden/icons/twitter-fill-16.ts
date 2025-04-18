import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTwitterFill16Icon],svg[garden-twitter-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.102 0h4.71l4.193 5.997L14.04 0h1.505L9.58 6.82L16 16h-4.71L6.911 9.738L1.504 16H0l6.337-7.083z"></svg:path>`,
})
export class GardenTwitterFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
