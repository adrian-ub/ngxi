import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHomeAltCheckIcon],svg[ci-home-alt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-9.643a1.01 1.01 0 0 1 .293-.65l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1ZM12 5.828l-6 6V20h12v-8.172l-6-6Zm-1.5 12.731l-2.706-2.7L9.2 14.441l1.3 1.292l4.3-4.292l1.412 1.416l-5.712 5.701v.001Z"></svg:path>`,
})
export class CiHomeAltCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
