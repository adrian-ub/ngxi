import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNecktieIcon],svg[icon-park-necktie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15 36L21 13H27L33 36L24 44L15 36Z"></svg:path><svg:path d="M21 4H27L30 6L27 13H21L18 6L21 4Z"></svg:path></svg:g>`,
})
export class IconParkNecktieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
