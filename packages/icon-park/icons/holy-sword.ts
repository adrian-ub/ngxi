import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHolySwordIcon],svg[icon-park-holy-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M17 13L24 4L31 13L26 39H22L17 13Z"></svg:path><svg:path d="M17 39H31"></svg:path><svg:path d="M24 39V45"></svg:path></svg:g>`,
})
export class IconParkHolySwordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
