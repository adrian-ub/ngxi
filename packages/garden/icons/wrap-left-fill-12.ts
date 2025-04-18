import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenWrapLeftFill12Icon],svg[garden-wrap-left-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm6-3a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zM5 3H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M2 2a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2z"></svg:path>`,
})
export class GardenWrapLeftFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
