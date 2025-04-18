import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVipLineIcon],svg[ri-vip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 19h20v2h-20zm9-11h2v8h-2zM7.97 8l-1.86 5.113L4.247 8H2.123l2.986 7.964h2L10.095 8zm9.035 6v2h-2V8h4a3 3 0 0 1 0 6zm0-4v2h2a1 1 0 1 0 0-2zm-15-7h20v2h-20z"></svg:path>`,
})
export class RiVipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
