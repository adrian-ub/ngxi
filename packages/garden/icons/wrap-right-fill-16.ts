import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenWrapRightFill16Icon],svg[garden-wrap-right-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zM14 5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2 11a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2zm0-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zm0-4a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2z"></svg:path>`,
})
export class GardenWrapRightFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
