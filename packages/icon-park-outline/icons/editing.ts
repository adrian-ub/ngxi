import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEditingIcon],svg[icon-park-outline-editing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="13" cy="35" r="7"></svg:circle><svg:circle cx="35" cy="35" r="7"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 6l24 22m8-22L16 28"></svg:path></svg:g>`,
})
export class IconParkOutlineEditingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
