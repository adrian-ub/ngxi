import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiIndustryIcon],svg[maki-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v12H1V8.72a.5.5 0 0 1 .17-.37l3-3.22a.5.5 0 0 1 .83.38v3l3.16-3.37a.5.5 0 0 1 .84.37V11h3V1z"></svg:path>`,
})
export class MakiIndustryIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
