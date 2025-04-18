import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLincolnIcon],svg[icon-park-solid-lincoln-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSLincoln0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M30.19 4H17.81a2 2 0 0 0-1.99 1.801l-1.8 18a2 2 0 0 0 0 .398l1.8 18A2 2 0 0 0 17.81 44h12.38a2 2 0 0 0 1.99-1.801l1.8-18a2 2 0 0 0 0-.398l-1.8-18A2 2 0 0 0 30.19 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14 24h20M24 4v40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 4h8m-8 40h8M15 14l-.98 9.801a2 2 0 0 0 0 .398L15 34m18-20l.98 9.801q.02.199 0 .398L33 34"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLincoln0)"></svg:path>`,
})
export class IconParkSolidLincolnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
