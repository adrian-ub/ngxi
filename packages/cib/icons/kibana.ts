import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibKibanaIcon],svg[cib-kibana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.052 31.984H5.573l13.172-15.812c5.64 3.683 9.307 9.391 9.307 15.812m0-31.932H4.104v28.735z"></svg:path>`,
})
export class CibKibanaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
