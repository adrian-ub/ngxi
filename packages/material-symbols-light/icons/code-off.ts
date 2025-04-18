import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCodeOffIcon],svg[material-symbols-light-code-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.833 21.26L7.346 8.773l-3.232 3.233L8.708 16.6L8 17.308L2.692 12l3.94-3.94l-3.891-3.893l.713-.713l17.092 17.092zm-1.773-6.012l-.714-.713l2.54-2.54L15.293 7.4L16 6.692L21.308 12z"></svg:path>`,
})
export class MaterialSymbolsLightCodeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
