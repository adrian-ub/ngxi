import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsKtorLightIcon],svg[skill-icons-ktor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path fill="#F26636" d="M95.406 34L31 96.46l64.406 62.428V96.46h64.374z"></svg:path><svg:path fill="#6373FF" d="m224.17 158.873l-64.406-62.429v62.429H95.39l64.374 62.459z"></svg:path><svg:path fill="#27282C" d="M159.78 96.444H95.39v62.444h64.39z"></svg:path></svg:g>`,
})
export class SkillIconsKtorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
