import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGifIcon],svg[material-symbols-light-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.808 14.692V9.308h.884v5.384zm-4.885 0q-.565 0-.975-.418t-.41-.966v-2.616q0-.548.41-.966t.975-.418h2.308q.315 0 .504.216q.188.217.188.476v.192H7.039q-.231 0-.423.193q-.193.192-.193.423v2.384q0 .231.193.424q.192.192.423.192h1.384q.23 0 .423-.192q.193-.193.193-.424v-1.038h.884v1.154q0 .548-.41.966t-.974.418zm7.654 0V9.308h3.885v.884h-3v1.462h2v.885h-2v2.153z"></svg:path>`,
})
export class MaterialSymbolsLightGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
