import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPencilFill12Icon],svg[garden-pencil-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 2.59L.15 9.15A.47.47 0 0 0 0 9.5v2c0 .28.22.5.5.5h2c.13 0 .26-.05.35-.15L9.41 5.3zm4.8-.8L10.21.5A.996.996 0 0 0 8.8.5L7.6 1.7l2.71 2.71l1.2-1.2c.38-.39.38-1.03-.01-1.42"></svg:path>`,
})
export class GardenPencilFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
