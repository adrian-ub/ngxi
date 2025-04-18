import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEraserSize3Icon],svg[material-symbols-light-eraser-size-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.807 18q-1.163 0-1.985-.817T6 15.209q0-.538.213-1.056q.214-.518.62-.916l6.404-6.423q.399-.397.918-.606q.52-.208 1.06-.208q1.158 0 1.972.817T18 8.791q0 .538-.208 1.056q-.209.518-.606.917l-6.403 6.423q-.423.404-.93.608T8.808 18"></svg:path>`,
})
export class MaterialSymbolsLightEraserSize3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
