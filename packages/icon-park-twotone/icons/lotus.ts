import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLotusIcon],svg[icon-park-twotone-lotus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLotus0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 16c.196-2.143 1.235-7.143 5-10c1.372 1.667 4.53 6 5 10"></svg:path><svg:path fill="#555" d="M23.752 42C15.282 40.545-.3 31.31 5.12 6c7.152 1.636 20.892 11.127 18.633 36"></svg:path><svg:path fill="#555" d="M24.248 42C32.718 40.545 48.3 31.31 42.88 6c-7.152 1.636-20.892 11.127-18.633 36"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLotus0)"></svg:path>`,
})
export class IconParkTwotoneLotusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
