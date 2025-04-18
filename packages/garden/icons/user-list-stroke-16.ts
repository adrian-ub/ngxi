import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserListStroke16Icon],svg[garden-user-list-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="5" cy="5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M9.5 5.5h6m-6 3h6m-4 3h4m-6 2c-.2-2.3-2.2-4-4.5-4s-4.3 1.8-4.5 4"></svg:path></svg:g>`,
})
export class GardenUserListStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
