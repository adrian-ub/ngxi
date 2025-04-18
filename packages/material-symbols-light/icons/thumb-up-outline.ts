import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbUpOutlineIcon],svg[material-symbols-light-thumb-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.462 20H7.423V9l6.27-6.192l.442.442q.136.137.23.35t.093.392v.158L13.435 9h6.95q.627 0 1.12.494T22 10.616v1.23q0 .137-.03.298t-.082.298l-2.73 6.474q-.206.461-.693.773q-.486.311-1.003.311m-9.039-1h9.039q.211 0 .432-.115q.222-.116.337-.385L21 12v-1.384q0-.27-.173-.443T20.385 10h-8.193l1.158-5.461l-4.927 4.888zm0-9.573V19zm-1-.427v1H4v9h3.423v1H3V9z"></svg:path>`,
})
export class MaterialSymbolsLightThumbUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
