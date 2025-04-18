import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSmartphoneCameraOutlineSharpIcon],svg[material-symbols-smartphone-camera-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 23V1h14v5H7v12h12v5zm2-2h10v-1H7zM7 4h10V3H7zm6 12V9h2.5l1-1h2l1 1H22v7zm4.5-1.75q.725 0 1.238-.513t.512-1.237t-.513-1.237t-1.237-.513t-1.237.513t-.513 1.237t.513 1.238t1.237.512M7 21v-1zM7 4V3z"></svg:path>`,
})
export class MaterialSymbolsSmartphoneCameraOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
