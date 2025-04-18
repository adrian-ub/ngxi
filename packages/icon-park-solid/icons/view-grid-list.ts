import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidViewGridListIcon],svg[icon-park-solid-view-grid-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSViewGridList0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path fill="#000" stroke="#000" d="M13 13h8v8h-8zm0 14h8v8h-8z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M27 28h8m-8 7h8m-8-22h8m-8 7h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSViewGridList0)"></svg:path>`,
})
export class IconParkSolidViewGridListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
