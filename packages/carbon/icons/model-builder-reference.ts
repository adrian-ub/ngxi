import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonModelBuilderReferenceIcon],svg[carbon-model-builder-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:path fill="currentColor" d="M22 4v3H10V4H2v8h8V9h7.023A4.95 4.95 0 0 0 16 12v16h2V12a3 3 0 0 1 2.997-3H22v3h8V4ZM8 10H4V6h4Zm20 0h-4V6h4Z"></svg:path>`,
})
export class CarbonModelBuilderReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
