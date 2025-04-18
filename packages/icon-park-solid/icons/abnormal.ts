import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAbnormalIcon],svg[icon-park-solid-abnormal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAbnormal0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 16.398V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M16 14h13m-13 7h5"></svg:path><svg:circle cx="34" cy="34" r="10" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" transform="rotate(90 34 34)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M34 36v3"></svg:path><svg:circle cx="34" cy="30" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAbnormal0)"></svg:path>`,
})
export class IconParkSolidAbnormalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
