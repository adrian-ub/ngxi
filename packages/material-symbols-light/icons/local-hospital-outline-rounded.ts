import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalHospitalOutlineRoundedIcon],svg[material-symbols-light-local-hospital-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 12.75v3q0 .317.216.534q.217.216.534.216t.534-.216q.216-.217.216-.534v-3h3q.317 0 .534-.216q.216-.217.216-.534t-.216-.534q-.217-.216-.534-.216h-3v-3q0-.317-.216-.534Q12.317 7.5 12 7.5t-.534.216q-.216.217-.216.534v3h-3q-.317 0-.534.216q-.216.217-.216.534t.216.534q.217.216.534.216zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightLocalHospitalOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
