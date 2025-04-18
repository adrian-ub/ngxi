import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenThumbsUpFill12Icon],svg[garden-thumbs-up-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 12h5c1.2 0 1.77-2 2-6.75A1.24 1.24 0 0 0 10.77 4H8V1.5A1.46 1.46 0 0 0 6.5 0A1.46 1.46 0 0 0 5 1.5c0 2.08-.73 2.56-.74 2.56A.54.54 0 0 0 4 4.5V11a1 1 0 0 0 1 1"></svg:path><svg:rect width="3" height="8" y="4" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenThumbsUpFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
