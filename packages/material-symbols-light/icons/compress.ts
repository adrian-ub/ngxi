import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCompressIcon],svg[material-symbols-light-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12.77v-1h14v1zM5 10V9h14v1zm6.5 11v-4.123l-2.1 2.1l-.708-.708L12 14.962l3.308 3.307l-.708.708l-2.1-2.089V21zM12 6.808L8.692 3.5l.708-.708l2.1 2.1V.77h1v4.123l2.1-2.1l.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
