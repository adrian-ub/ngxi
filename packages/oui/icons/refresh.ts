import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiRefreshIcon],svg[oui-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.228 2.942a.5.5 0 1 1-.538.842A5 5 0 1 0 13 8a.5.5 0 1 1 1 0a6 6 0 1 1-2.772-5.058M14 1.5v3A1.5 1.5 0 0 1 12.5 6h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 1 1 1 0"></svg:path>`,
})
export class OuiRefreshIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
