import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAreaMapIcon],svg[icon-park-twotone-area-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAreaMap0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="m18 24l-6 9l-8-4.5V42h40V15l-7 8l-6-5l-7 8z"></svg:path><svg:path d="M4 28.5V17l7 6l5.5-8l6 3L31 9l5.5 4.5L44 6v9.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAreaMap0)"></svg:path>`,
})
export class IconParkTwotoneAreaMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
