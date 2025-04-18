import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPaintedEggshellIcon],svg[icon-park-solid-painted-eggshell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPaintedEggshell0"><svg:g fill="none"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-width="4" d="M24 44c10.252 0 16-6.954 16-18S31.132 4 24 4S8 14.954 8 26s5.748 18 16 18Z" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M21 38a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M16 29.668a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPaintedEggshell0)"></svg:path>`,
})
export class IconParkSolidPaintedEggshellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
