import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusCheckIcon],svg[nimbus-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.12 2.23l-9.79 9.78L.88 7.56L0 8.44l5.33 5.34L16 3.11z"></svg:path>`,
})
export class NimbusCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
