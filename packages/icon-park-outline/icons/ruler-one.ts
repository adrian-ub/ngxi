import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRulerOneIcon],svg[icon-park-outline-ruler-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M43 41H23M38.718 5H21L5 41h17.662zM9.959 29.882h8.028m-4.722-7.412h8.028m-4.519-7.87h8.029"></svg:path><svg:path d="M21 5L5 41"></svg:path></svg:g>`,
})
export class IconParkOutlineRulerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
