import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvDisplaysOutlineIcon],svg[material-symbols-light-tv-displays-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15.327V4.616q0-.672.472-1.144T4.616 3h12.653v1H4.616q-.27 0-.443.173T4 4.616v10.711zM11.52 21v-2H8.384q-.69 0-1.153-.462t-.463-1.153v-9q0-.69.463-1.153t1.153-.463h12.019q.69 0 1.153.463t.462 1.153v9q0 .69-.462 1.153T20.404 19H17.25v2zm-3.135-3h12.019q.269 0 .442-.173t.173-.442v-9q0-.27-.173-.443t-.442-.173H8.384q-.268 0-.442.173q-.173.173-.173.442v9q0 .27.173.443q.174.173.443.173m6.019-5.116"></svg:path>`,
})
export class MaterialSymbolsLightTvDisplaysOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
