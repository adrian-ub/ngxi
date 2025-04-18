import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelOffOutlineIcon],svg[material-symbols-light-label-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.733 16.248l-.714-.713L19.75 12l-4.423-5.77q-.096-.114-.221-.172T14.827 6H7.6l-1-1h8.227q.379 0 .727.165q.348.164.565.462L21 12zM4.616 18H15.2L4 6.8v10.585q0 .269.173.442t.443.173M20.5 23.3l-4.629-4.629q-.115.152-.282.24t-.362.089H4.615q-.67 0-1.143-.472Q3 18.056 3 17.385V6.615q0-.178.043-.349t.11-.312L.7 3.5l.708-.708l19.8 19.8zM9.6 12.4"></svg:path>`,
})
export class MaterialSymbolsLightLabelOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
