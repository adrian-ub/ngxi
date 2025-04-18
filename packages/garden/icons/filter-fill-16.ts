import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFilterFill16Icon],svg[garden-filter-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15.57c-.16 0-.32-.04-.47-.12a1 1 0 0 1-.53-.88V7.71l-5-5C.71 2.42.63 1.99.78 1.62S1.3 1 1.71 1H14.3c.41 0 .77.24.92.62s.07.8-.22 1.09l-5 5v5.53c0 .33-.17.65-.44.83l-2 1.33c-.17.11-.37.17-.56.17"></svg:path>`,
})
export class GardenFilterFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
