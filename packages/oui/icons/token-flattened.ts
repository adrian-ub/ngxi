import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenFlattenedIcon],svg[oui-token-flattened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 3a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25zm0 3.75A.25.25 0 0 0 3 7v2c0 .138.112.25.25.25H5.5A.25.25 0 0 0 5.75 9V7a.25.25 0 0 0-.25-.25zm-.25 4a.25.25 0 0 1 .25-.25H5.5a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25H3.25a.25.25 0 0 1-.25-.25zm3.31-.727c-.082-.073-.082-.224 0-.296l3.054-2.683a.17.17 0 0 1 .19-.026c.064.032.104.1.104.174v1.341l3.161-.016c.1 0 .18.086.18.192v2.3c0 .105-.08.191-.18.191l-3.161.017v1.341c0 .074-.04.142-.103.174a.17.17 0 0 1-.19-.025z"></svg:path>`,
})
export class OuiTokenFlattenedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
