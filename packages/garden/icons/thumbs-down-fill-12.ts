import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenThumbsDownFill12Icon],svg[garden-thumbs-down-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.5 12A1.46 1.46 0 0 1 4 10.5V8H1.23A1.24 1.24 0 0 1 0 6.77C.2 2 .77 0 2 0h5a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-.28.45S7 8.43 7 10.5A1.46 1.46 0 0 1 5.5 12"></svg:path><svg:rect width="3" height="8" x="9" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenThumbsDownFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
