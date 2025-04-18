import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelOffIcon],svg[material-symbols-light-label-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.733 16.248L6.6 5h8.227q.379 0 .727.165q.348.164.565.462L21 12zM20.5 23.3l-4.629-4.629q-.115.152-.282.24t-.362.089H4.615q-.67 0-1.143-.472Q3 18.056 3 17.385V6.615q0-.178.043-.349t.11-.312L.7 3.5l.708-.708l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsLightLabelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
