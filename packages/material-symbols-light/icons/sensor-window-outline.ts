import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSensorWindowOutlineIcon],svg[material-symbols-light-sensor-window-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 20.98q-.691 0-1.153-.462T5 19.366V4.635q0-.69.463-1.153t1.153-.463h10.769q.69 0 1.153.463T19 4.634v14.732q0 .69-.462 1.152t-1.153.463zM6 11.5h4.5v-.77h3v.77H18V4.635q0-.231-.192-.423t-.424-.193H6.616q-.231 0-.424.192T6 4.634zm0 1v6.866q0 .23.192.423t.423.192h10.77q.23 0 .423-.193t.192-.423V12.5zm0 7.48h12z"></svg:path>`,
})
export class MaterialSymbolsLightSensorWindowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
