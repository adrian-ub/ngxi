import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLightIcon],svg[icon-park-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 16V22"></svg:path><svg:path d="M38.1421 21.8579L33.8994 26.1005"></svg:path><svg:path d="M44 36H38"></svg:path><svg:path d="M4 36H10"></svg:path><svg:path d="M9.85791 21.8579L14.1006 26.1005"></svg:path><svg:path d="M18 36H30"></svg:path></svg:g>`,
})
export class IconParkLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
