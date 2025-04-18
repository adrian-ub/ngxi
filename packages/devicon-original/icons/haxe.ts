import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalHaxeIcon],svg[devicon-original-haxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F6B214" d="m15.7 64l48.4-48.4L0 0z"></svg:path><svg:path fill="#F17321" d="m64 15.7l48.4 48.4L128 0z"></svg:path><svg:path fill="#EF5E21" d="m112.3 64l-48.4 48.4L128 128z"></svg:path><svg:path fill="#F6B214" d="M64 112.3L15.6 63.9L0 128z"></svg:path><svg:path fill="#EA8220" d="M15.6 63.9L64 15.7L112.3 64L64 112.3z"></svg:path><svg:path fill="#F8EF23" d="M15.6 63.9L0 32V0zM0 128V96l15.6-32.1z"></svg:path><svg:path fill="#F8C713" d="M0 0h32l32 15.7zm128 0L64 15.7L96 0z"></svg:path><svg:path fill="#EC4822" d="M112.3 64L128 0v32zm15.7 64V96l-15.7-32z"></svg:path><svg:path fill="#EF5E21" d="m0 128l64-15.7L32 128z"></svg:path><svg:path fill="#EA8220" d="M128 128H96l-32-15.7z"></svg:path>`,
})
export class DeviconOriginalHaxeIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
