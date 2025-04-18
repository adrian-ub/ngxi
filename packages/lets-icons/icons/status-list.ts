import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStatusListIcon],svg[lets-icons-status-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.401 7.5H19a.5.5 0 0 0 0-1h-3.959c.06.359.185.696.36 1m-2.172 0q-.152-.481-.204-1H5a.5.5 0 0 0 0 1zM5 11.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path><svg:circle cx="18" cy="6" r="3" fill="currentColor"></svg:circle>`,
})
export class LetsIconsStatusListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
