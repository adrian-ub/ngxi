import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiBridgesv1Icon],svg[cbi-bridgesv1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5m-7.389-9.13a1 1 0 1 1 0-2a1 1 0 0 1 0 2M7 17a1 1 0 1 1 0-2a1 1 0 1 1 0 2m5.91-10.467a1 1 0 1 1 0 2a1 1 0 1 1 0-2M16 13a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0-9C9.4 4 4 9.4 4 16s5.4 12 12 12s12-5.4 12-12S22.6 4 16 4"></svg:path>`,
})
export class CbiBridgesv1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
