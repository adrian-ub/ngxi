import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGemReferenceIcon],svg[carbon-gem-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:path fill="currentColor" d="M23.5 4h-15l-6.784 9.045L6.01 18l1.511-1.31L5.19 14h5.255L16 22.887L21.554 14h5.256L15.813 26.692L17.324 28l12.96-14.955ZM5 12l4.5-6h4.696l-3.75 6Zm11-5.113L19.196 12h-6.392Zm0 12.226L12.804 14h6.392ZM21.554 12l-3.75-6H22.5l4.5 6Z"></svg:path>`,
})
export class CarbonGemReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
