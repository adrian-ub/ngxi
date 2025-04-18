import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserListStroke12Icon],svg[garden-user-list-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="4" cy="3.5" r="2"></svg:circle><svg:path stroke-linecap="round" d="M7.5 10.5c-.2-1.7-1.7-3-3.5-3S.7 8.8.5 10.5m7.5-7h3.5m-3 3h3m-1.5 3h1.5"></svg:path></svg:g>`,
})
export class GardenUserListStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
