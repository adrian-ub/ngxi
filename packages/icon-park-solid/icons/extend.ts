import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidExtendIcon],svg[icon-park-solid-extend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSExtend0"><svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" stroke-width="4" rx="3"></svg:rect><svg:path fill="#000" d="M35 12h-4.586c-.89 0-1.337 1.077-.707 1.707l4.586 4.586c.63.63 1.707.184 1.707-.707V13a1 1 0 0 0-1-1m-23 1v4.586c0 .89 1.077 1.337 1.707.707l4.586-4.586c.63-.63.184-1.707-.707-1.707H13a1 1 0 0 0-1 1m1 23h4.586c.89 0 1.337-1.077.707-1.707l-4.586-4.586c-.63-.63-1.707-.184-1.707.707V35a1 1 0 0 0 1 1m23-1v-4.586c0-.89-1.077-1.337-1.707-.707l-4.586 4.586c-.63.63-.184 1.707.707 1.707H35a1 1 0 0 0 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSExtend0)"></svg:path>`,
})
export class IconParkSolidExtendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
