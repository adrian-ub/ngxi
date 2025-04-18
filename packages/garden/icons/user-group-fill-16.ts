import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserGroupFill16Icon],svg[garden-user-group-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="11" cy="6" r="3"></svg:circle><svg:circle cx="4.5" cy="3.5" r="2.5"></svg:circle><svg:path d="M15.45 15H6.53c-.14 0-.28-.06-.37-.17s-.14-.25-.12-.39C6.3 11.91 8.44 10 10.99 10s4.68 1.91 4.96 4.45c.02.14-.03.28-.12.39s-.24.16-.38.16m-8.12-5H1.67c-.16 0-.31-.08-.41-.21a.53.53 0 0 1-.06-.46A3.51 3.51 0 0 1 4.5 7c1.48 0 2.81.94 3.3 2.34c.05.15.03.32-.06.46c-.09.12-.25.2-.41.2"></svg:path></svg:g>`,
})
export class GardenUserGroupFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
