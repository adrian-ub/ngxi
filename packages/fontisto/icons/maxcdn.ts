import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMaxcdnIcon],svg[fontisto-maxcdn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.72 9.694L29.644 24h-6.262L26.72 8.4a1.76 1.76 0 0 0-.285-1.654l.003.004a1.89 1.89 0 0 0-1.563-.618h.007h-3.17L17.886 24h-6.262l3.825-17.869h-5.36L6.262 24H0L3.825 6.131L.96 0h23.975c1.268 0 2.471.28 3.55.781l-.052-.022a7.6 7.6 0 0 1 2.756 2.114l.011.014a7.35 7.35 0 0 1 1.511 3.11l.009.049a8.6 8.6 0 0 1-.011 3.705z"></svg:path>`,
})
export class FontistoMaxcdnIcon {
  readonly viewBox = input("0 0 33 24")
  readonly width = input("1.38em")
  readonly height = input("1em")
}
