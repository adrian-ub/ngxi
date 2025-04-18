import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeShuttleIcon],svg[vscode-icons-file-type-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeShuttle0" x1="36.036" x2="171.04" y1="171.21" y2="36.209" gradientTransform="translate(-93.833 -117.64)scale(1.2523)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#F42929"></svg:stop><svg:stop offset=".495" stop-color="#FF8A3F"></svg:stop><svg:stop offset="1" stop-color="#E5E938"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeShuttle0)" fill-rule="evenodd" d="M78.693-71.892L36.408-29.608H-5.876L-48.16 12.675h42.284V54.96H-48.16v42.284h42.284V54.96h42.284v42.284L78.693 54.96V12.675l42.284-42.283v-42.284z" clip-rule="evenodd" transform="translate(10.022 13.873)scale(.16512)"></svg:path>`,
})
export class VscodeIconsFileTypeShuttleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
