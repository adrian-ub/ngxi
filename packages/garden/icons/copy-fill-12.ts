import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCopyFill12Icon],svg[garden-copy-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 3h3.5a.5.5 0 0 0 .5-.5V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.5a.5.5 0 0 0 .5-.5V4a1 1 0 0 1 1-1"></svg:path><svg:rect width="8" height="8" x="4" y="4" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenCopyFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
