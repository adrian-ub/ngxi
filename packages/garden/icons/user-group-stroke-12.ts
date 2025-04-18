import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserGroupStroke12Icon],svg[garden-user-group-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="3" cy="2" r="1.5"></svg:circle><svg:circle cx="8" cy="4.5" r="2"></svg:circle><svg:path stroke-linecap="round" d="M11.5 11.5c-.2-1.7-1.7-3-3.5-3s-3.3 1.3-3.5 3m-4-4c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2"></svg:path></svg:g>`,
})
export class GardenUserGroupStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
