import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRearCameraIcon],svg[material-symbols-light-rear-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 7.73q.31 0 .52-.21t.21-.52t-.21-.52t-.52-.21t-.52.21t-.21.52t.21.52t.52.21M12.5 19h6.885q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H12.5zm-7.884 1q-.691 0-1.153-.462T3 18.384V12.5h4.412l-2.1 2.1l.688.688L9.289 12L6 8.711l-.688.689l2.1 2.1H3V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20z"></svg:path>`,
})
export class MaterialSymbolsLightRearCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
