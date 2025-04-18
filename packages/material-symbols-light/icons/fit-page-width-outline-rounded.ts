import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFitPageWidthOutlineRoundedIcon],svg[material-symbols-light-fit-page-width-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423V6.615q0-.23-.192-.423T19.385 6M4 6v12zm4.808 7.57v-3.14q0-.272-.252-.368t-.444.096l-1.278 1.277q-.242.242-.242.565t.242.566l1.277 1.276q.193.193.445.097q.252-.097.252-.37m8.358-2.134l-1.277-1.277q-.193-.192-.445-.096t-.252.369v3.138q0 .273.252.37t.444-.097l1.278-1.276q.242-.243.242-.566t-.243-.565"></svg:path>`,
})
export class MaterialSymbolsLightFitPageWidthOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
