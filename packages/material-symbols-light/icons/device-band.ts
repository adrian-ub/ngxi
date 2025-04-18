import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeviceBandIcon],svg[material-symbols-light-device-band-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.48 21q-.69 0-1.152-.462t-.462-1.153V8.73h-.193q-.213 0-.357-.153q-.143-.153-.143-.347v-.962q0-.194.143-.347t.357-.153h.193V4.616q0-.691.462-1.153T10.481 3H13.5q.69 0 1.153.463t.463 1.153v2.153h.192q.213 0 .357.153q.143.153.143.347v.962q0 .194-.143.347q-.144.153-.357.153h-.192v10.654q0 .69-.463 1.153T13.5 21z"></svg:path>`,
})
export class MaterialSymbolsLightDeviceBandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
