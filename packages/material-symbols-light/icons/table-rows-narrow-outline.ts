import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableRowsNarrowOutlineIcon],svg[material-symbols-light-table-rows-narrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.25V12.5H5v2.75zm0-3.75V8.75H5v2.75zm0-3.75V5.616q0-.27-.173-.443T18.385 5H5.615q-.269 0-.442.173T5 5.616V7.75zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM19 18.384V16.25H5v2.135q0 .269.173.442t.443.173h12.769q.269 0 .442-.173t.173-.443"></svg:path>`,
})
export class MaterialSymbolsLightTableRowsNarrowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
