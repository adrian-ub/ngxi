import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPartialIcon],svg[oui-partial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.664 14.871a7 7 0 0 1-2.42-12.778a.5.5 0 0 1 .612.06c.456.431 8.216 8.212 8.98 9.002a.5.5 0 0 1 .063.618a7 7 0 0 1-7.235 3.098m6.168-3.312a1962 1962 0 0 0-8.377-8.4a6 6 0 1 0 8.378 8.4m2.095-2.548a.5.5 0 1 1-.99-.144c.01-.066.01-.066.018-.133a6 6 0 0 0-.034-1.714a.5.5 0 1 1 .987-.163c.108.655.122 1.326.04 1.999zm-1.273-5.138a.5.5 0 1 1-.808.59a6 6 0 0 0-1.304-1.308a.5.5 0 0 1 .59-.806a7 7 0 0 1 1.522 1.524M9.169 1.098a.5.5 0 1 1-.166.986a6.1 6.1 0 0 0-1.849-.026a.5.5 0 0 1-.14-.99a7 7 0 0 1 2.155.03"></svg:path>`,
})
export class OuiPartialIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
