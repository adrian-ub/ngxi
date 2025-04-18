import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCatfaceIcon],svg[whh-catface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-92 0-175.5-34.5T193 899T88.5 775T22 639T0 512q0-69 67-142q3-73 37.5-221.5T160 0q19 0 97 68t140 134q59-10 115-10t115 10q62-66 140-134t97-68q21 0 55.5 148.5T957 370q67 73 67 142q0 59-22 127t-66.5 136T831 899t-143.5 90.5T512 1024M320 384q-53 0-90.5 37.5T192 512t37.5 90.5T320 640t90.5-37.5T448 512t-37.5-90.5T320 384m384 0q-53 0-90.5 37.5T576 512t37.5 90.5T704 640t90.5-37.5T832 512t-37.5-90.5T704 384m64 128q0 53-18.5 90.5t-45 37.5t-45.5-37.5t-19-90.5t19-90.5t45.5-37.5t45 37.5T768 512m-384 0q0 53-19 90.5T319.5 640t-45-37.5T256 512t18.5-90.5t45-37.5t45.5 37.5t19 90.5"></svg:path>`,
})
export class WhhCatfaceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
