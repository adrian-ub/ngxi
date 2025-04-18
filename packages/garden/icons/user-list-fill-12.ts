import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserListFill12Icon],svg[garden-user-list-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="4" cy="3.5" r="2.5"></svg:circle><svg:path d="M7.46 11H.54a.5.5 0 0 1-.5-.57a4 4 0 0 1 7.92 0a.5.5 0 0 1-.5.57"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 3h2M9 6h2m-1 3h1"></svg:path>`,
})
export class GardenUserListFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
