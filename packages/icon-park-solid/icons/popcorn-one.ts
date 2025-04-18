import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPopcornOneIcon],svg[icon-park-solid-popcorn-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPopcornOne0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M7 16h34l-7 28H14z"></svg:path><svg:path stroke="#000" d="M20 16v28m8-28v28"></svg:path><svg:path fill="#fff" stroke="#fff" d="M33 9a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 33 9m-9 0a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 24 9m-9 0a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 15 9"></svg:path><svg:path stroke="#fff" d="M22.874 9a4 4 0 1 0-7.748 0m17.748 0a4 4 0 1 0-7.748 0M16 16h16M16 44h16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPopcornOne0)"></svg:path>`,
})
export class IconParkSolidPopcornOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
