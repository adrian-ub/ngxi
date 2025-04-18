import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHlsOffSharpIcon],svg[material-symbols-hls-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.825 15l-2-2H17v.5h2v-1h-3.5V9h5v2H19v-.5h-2v1h3.5V15zM3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15zm16.775 7.6L1.4 4.225L2.8 2.8l18.375 18.4zM10 15v-3.575l1.5 1.5v.575h.6l1.5 1.5z"></svg:path>`,
})
export class MaterialSymbolsHlsOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
