import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserBoxLightIcon],svg[lets-icons-user-box-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M17.933 21.257c-.216-1.2-.948-2.293-2.06-3.076c-1.111-.783-2.527-1.202-3.982-1.18s-2.852.484-3.929 1.3s-1.76 1.932-1.924 3.137"></svg:path><svg:circle cx="12" cy="10" r="3" stroke-linecap="round"></svg:circle><svg:rect width="19" height="19" x="2.5" y="2.5" rx="3.5"></svg:rect></svg:g>`,
})
export class LetsIconsUserBoxLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
