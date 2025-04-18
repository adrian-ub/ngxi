import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeviceUnknownOutlineRoundedIcon],svg[material-symbols-light-device-unknown-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.558q-.271 0-.468-.198q-.197-.197-.197-.468q0-.27.197-.468q.197-.197.468-.197t.468.197t.197.468t-.197.468q-.197.198-.468.198M9.86 9.325q-.154-.086-.171-.249t.08-.316q.368-.593.963-.917T12 7.52q1.085 0 1.814.62q.728.62.728 1.68q0 .548-.274 1.025t-.66.864q-.364.363-.695.756t-.426.9q-.031.184-.167.3q-.135.117-.32.117q-.165 0-.291-.114q-.126-.113-.126-.278q0-.587.356-1.068t.792-.905q.344-.345.635-.724q.292-.378.292-.861q0-.615-.5-1.027q-.498-.412-1.158-.412q-.446 0-.841.201t-.634.578q-.123.16-.314.213q-.192.053-.351-.059M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm0-1h10v-13H7zm0-14h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightDeviceUnknownOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
