import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFitPageWidthOutlineIcon],svg[material-symbols-light-fit-page-width-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423V6.615q0-.23-.192-.423T19.385 6M4 6v12zm4.808 8.539V9.46L6.269 12zM17.73 12l-2.539-2.539v5.078z"></svg:path>`,
})
export class MaterialSymbolsLightFitPageWidthOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
