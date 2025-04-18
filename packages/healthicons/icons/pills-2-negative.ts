import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2NegativeIcon],svg[healthicons-pills-2-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPills2Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM26 16c0 5.523-4.477 10-10 10S6 21.523 6 16S10.477 6 16 6s10 4.477 10 10m-5.153-1.997a1 1 0 0 1-.543 1.305l-7.845 3.233a1 1 0 1 1-.763-1.849l7.846-3.233a1 1 0 0 1 1.305.544M42 32c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10m-4.89 1.175a1 1 0 0 1-1.2.75l-8.269-1.901a1 1 0 1 1 .448-1.95l8.27 1.902a1 1 0 0 1 .75 1.199" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPills2Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPills2NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
