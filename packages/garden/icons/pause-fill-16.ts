import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPauseFill16Icon],svg[garden-pause-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="4" height="14" x="3" y="1" rx="1" ry="1"></svg:rect><svg:rect width="4" height="14" x="9" y="1" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenPauseFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
