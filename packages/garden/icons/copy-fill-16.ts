import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCopyFill16Icon],svg[garden-copy-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 5a1 1 0 0 1 1-1h5.5a.5.5 0 0 0 .5-.5V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.5a.5.5 0 0 0 .5-.5z"></svg:path><svg:rect width="11" height="11" x="5" y="5" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenCopyFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
