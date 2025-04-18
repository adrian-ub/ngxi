import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFemaleIcon],svg[icon-park-outline-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M38.379 9.851c-5.468-5.467-14.332-5.467-19.8 0a13.96 13.96 0 0 0-4.1 9.9a13.96 13.96 0 0 0 4.1 9.9c5.468 5.467 14.332 5.467 19.8 0c5.467-5.468 5.467-14.332 0-19.8Z"></svg:path><svg:path stroke-linecap="round" d="M18.464 29.535L5.736 42.263m13.435-.707L6.443 28.828"></svg:path></svg:g>`,
})
export class IconParkOutlineFemaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
