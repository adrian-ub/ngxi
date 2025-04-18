import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNoShootingIcon],svg[icon-park-solid-no-shooting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSNoShooting0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="m15 12l3-6h12l3 6z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M41 12H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m28 20l-8 14"></svg:path><svg:circle cx="24" cy="27" r="8" stroke="#000" stroke-linecap="round"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSNoShooting0)"></svg:path>`,
})
export class IconParkSolidNoShootingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
