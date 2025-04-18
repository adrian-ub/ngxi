import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserListFill16Icon],svg[garden-user-list-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="5" cy="5" r="3"></svg:circle><svg:path d="M9.47 14H.53a.5.5 0 0 1-.5-.55a5 5 0 0 1 9.94 0a.5.5 0 0 1-.5.55"></svg:path><svg:rect width="7" height="2" x="9" y="3" rx="1" ry="1"></svg:rect><svg:rect width="7" height="2" x="9" y="7" rx="1" ry="1"></svg:rect><svg:rect width="5" height="2" x="11" y="11" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenUserListFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
