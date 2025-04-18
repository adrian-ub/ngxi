import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFindOneIcon],svg[icon-park-outline-find-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.8 14C29.433 14 34 18.477 34 24s-4.567 10-10.2 10c-2.612 0-4.995-.963-6.8-2.546"></svg:path><svg:path d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20a19.93 19.93 0 0 1-13.927-5.646A19.94 19.94 0 0 1 4 24a19.93 19.93 0 0 1 5.556-13.833"></svg:path><svg:path d="M9.556 10.167L24 24L10.073 38.354"></svg:path></svg:g>`,
})
export class IconParkOutlineFindOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
