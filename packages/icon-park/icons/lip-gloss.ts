import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLipGlossIcon],svg[icon-park-lip-gloss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 12H8C8 12 8 16 9 26C10 36 12 44 12 44H20C20 44 22 36 23 26C24 16 24 12 24 12Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 34H28C28 34 28 36 29 39C30 42 31.5 44 31.5 44H38.5C38.5 44 40 42 41 39C42 36 42 34 42 34Z"></svg:path><svg:path d="M35 34V13"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M31 7H39L37 13H33L31 7Z"></svg:path><svg:rect width="10" height="6" x="11" y="6" fill="#2F88FF" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkLipGlossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
