import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonXmlIcon],svg[carbon-xml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 21V9h-2v14h8v-2zM18 9l-1.52 5l-.48 1.98l-.46-1.98L14 9h-2v14h2v-8l-.16-2l.58 2L16 19.63L17.58 15l.58-2l-.16 2v8h2V9zm-8 0H8l-2 6l-2-6H2l2.75 7L2 23h2l2-6l2 6h2l-2.75-7z"></svg:path>`,
})
export class CarbonXmlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
