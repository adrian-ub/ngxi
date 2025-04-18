import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBeeIcon],svg[icon-park-twotone-bee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBee0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M30 28.696C30 35 27.314 44 24 44s-6-9-6-15.304C18 24.998 20.686 22 24 22s6 2.998 6 6.696Z"></svg:path><svg:path d="M11.478 17C13.988 17 20 19.239 20 22s-6.012 5-8.522 5S6 24.761 6 22s2.968-5 5.478-5Zm25.044 0C34.012 17 28 19.239 28 22s6.012 5 8.522 5S42 24.761 42 22s-2.968-5-5.478-5Z"></svg:path><svg:rect width="10" height="13" x="19" y="9" fill="#555" rx="5"></svg:rect><svg:path stroke-linecap="round" d="M28 10a6 6 0 0 1 6-6m-13 6c0-3.314-3.134-6-7-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBee0)"></svg:path>`,
})
export class IconParkTwotoneBeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
