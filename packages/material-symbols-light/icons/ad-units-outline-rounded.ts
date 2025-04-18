import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAdUnitsOutlineRoundedIcon],svg[material-symbols-light-ad-units-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8q-.213 0-.357-.143T8.5 7.5t.143-.357T9 7h6q.214 0 .357.143t.143.357t-.143.357T15 8zM7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm0-1h10v-13H7zm0-14h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightAdUnitsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
