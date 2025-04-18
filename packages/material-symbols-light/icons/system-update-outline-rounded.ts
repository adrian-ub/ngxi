import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSystemUpdateOutlineRoundedIcon],svg[material-symbols-light-system-update-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm0-1h10v-13H7zm4.5-5.12V9.193q0-.213.143-.357T12 8.692t.357.143t.143.357v4.189l1.746-1.74q.14-.141.341-.15q.202-.01.367.155q.16.16.16.354t-.16.354l-2.388 2.388q-.243.242-.566.242t-.565-.242l-2.389-2.388q-.14-.14-.153-.342t.153-.366q.16-.16.351-.162q.192-.003.357.156zM7 4.5h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightSystemUpdateOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
