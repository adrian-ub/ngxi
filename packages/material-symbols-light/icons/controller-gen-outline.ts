import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightControllerGenOutlineIcon],svg[material-symbols-light-controller-gen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.5q2.289 0 3.894-1.606T17.5 12t-1.606-3.894T12 6.5T8.106 8.106T6.5 12t1.606 3.894T12 17.5m0-1q-1.861 0-3.18-1.32T7.5 12t1.32-3.18T12 7.5t3.18 1.32T16.5 12t-1.32 3.18T12 16.5m-.354-4.146q.16.16.354.16t.354-.16l1.4-1.4q.16-.16.16-.354t-.16-.354t-.354-.16t-.354.16l-1.4 1.4q-.16.16-.16.354t.16.354M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightControllerGenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
