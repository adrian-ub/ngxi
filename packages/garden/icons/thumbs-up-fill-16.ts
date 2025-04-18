import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenThumbsUpFill16Icon],svg[garden-thumbs-up-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 16h8.5c1.5 0 2.25-2.54 2.5-8.48A1.51 1.51 0 0 0 14.5 6H10V2a1.94 1.94 0 0 0-2-2a1.94 1.94 0 0 0-2 2c0 3.14-.95 3.79-1.36 3.93A1.07 1.07 0 0 0 4 6.9V15a1 1 0 0 0 1 1"></svg:path><svg:rect width="3" height="10" y="6" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenThumbsUpFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
