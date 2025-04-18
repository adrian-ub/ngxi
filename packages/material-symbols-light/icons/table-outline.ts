import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableOutlineIcon],svg[material-symbols-light-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm5.884-5.596H5v3.98q0 .27.173.443t.443.173H11.5zm1 0V19h5.885q.269 0 .442-.173t.173-.442v-3.981zm-1-1V8.769H5v4.635zm1 0H19V8.769h-6.5zM5 7.769h14V5.615q0-.269-.173-.442T18.385 5H5.615q-.269 0-.442.173T5 5.616z"></svg:path>`,
})
export class MaterialSymbolsLightTableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
