import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPaypalIcon],svg[ps-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M291 2H89L0 412h118l29-136h85q62 0 107.5-36t58.5-99q14-66-21-102.5T291 2m-88 195h-39l25-112h58q31 0 40 29q-1 0-3.5-.5t-3.5-.5h-58zm84-56q-5 23-24 39t-41 17l14-61h52q0 3-1 5m144 28q9-44-6-78q32 39 20 101q-14 63-59.5 98.5T278 326h-85l-29 136H46l5-22h99l29-136h85q62 0 107.5-36t59.5-99"></svg:path>`,
})
export class PsPaypalIcon {
  readonly viewBox = input("0 0 456 488")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
