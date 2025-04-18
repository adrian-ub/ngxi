import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPauseFill12Icon],svg[garden-pause-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="3" height="10" x="2" y="1" rx="1" ry="1"></svg:rect><svg:rect width="3" height="10" x="7" y="1" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenPauseFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
