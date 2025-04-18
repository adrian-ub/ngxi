import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibCodioIcon],svg[cib-codio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.995 32L2.14 23.995v-16L16 0l13.86 7.995L22 12.536l-6-3.468l-6.005 3.463v6.939l6 3.463l6-3.463l7.865 4.525L16.005 32z"></svg:path>`,
})
export class CibCodioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
