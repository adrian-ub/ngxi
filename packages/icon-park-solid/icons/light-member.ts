import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLightMemberIcon],svg[icon-park-solid-light-member-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSLightMember0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M35.056 15L18.463 7.665a2 2 0 0 0-2.447.682L11.359 15"></svg:path><svg:path fill="#fff" stroke="#fff" d="M43 15H5a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m19 23l5.103 10L29 23"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLightMember0)"></svg:path>`,
})
export class IconParkSolidLightMemberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
