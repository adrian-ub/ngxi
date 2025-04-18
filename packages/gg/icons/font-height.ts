import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFontHeightIcon],svg[gg-font-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 5V3H3v2zm0 14v2H3v-2z"></svg:path><svg:path fill-rule="evenodd" d="M12 7.376a1 1 0 0 0-.967.576l-3.381 7.25a1 1 0 1 0 1.812.846L9.953 15h4.094l.489 1.048a1 1 0 1 0 1.813-.845l-3.381-7.251A1 1 0 0 0 12 7.376M13.115 13h-2.23L12 10.61z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFontHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
