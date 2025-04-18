import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddToHomeScreenOutlineIcon],svg[material-symbols-light-add-to-home-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.616 22q-.672 0-1.144-.472T7 20.385v-3.308h1V18.5h10v-13H8v1.423H7V3.615q0-.67.472-1.143Q7.944 2 8.616 2h8.769q.67 0 1.143.472q.472.472.472 1.144v16.769q0 .67-.472 1.143q-.472.472-1.143.472zM8 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm-3.6-3.192l-.708-.708l6.1-6.1H5.5v-1h6v6h-1v-4.292zM8 4.5h10v-.885q0-.23-.192-.423T17.384 3H8.616q-.231 0-.424.192T8 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightAddToHomeScreenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
