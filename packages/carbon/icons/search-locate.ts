import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSearchLocateIcon],svg[carbon-search-locate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 28.586l-4.688-4.688a8.028 8.028 0 1 0-1.415 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6M2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z"></svg:path>`,
})
export class CarbonSearchLocateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
