import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPokerIcon],svg[icon-park-solid-poker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPoker0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 4H12v40h30z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 11.79L12 10v34z" clip-rule="evenodd"></svg:path><svg:path fill="#000" stroke="#000" d="m27 18l-5 6l5 6l5-6z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 10v4m18 20v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPoker0)"></svg:path>`,
})
export class IconParkSolidPokerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
