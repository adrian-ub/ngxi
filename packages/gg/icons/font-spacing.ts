import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFontSpacingIcon],svg[gg-font-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 21h2V3h-2zM5 21H3V3h2z"></svg:path><svg:path fill-rule="evenodd" d="M9.464 16.048L9.953 15h4.094l.489 1.048a1 1 0 1 0 1.813-.845l-3.381-7.25A1 1 0 0 0 12 7.375a1 1 0 0 0-.967.576l-3.381 7.25a1 1 0 0 0 1.812.846M12 10.61L10.885 13h2.23z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFontSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
