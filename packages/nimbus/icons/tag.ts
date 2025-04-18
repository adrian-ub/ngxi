import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusTagIcon],svg[nimbus-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.2L8.8 1a1.25 1.25 0 0 0-.88-.34h-6A1.25 1.25 0 0 0 .66 1.91v6A1.25 1.25 0 0 0 1 8.8L7.2 15a1.24 1.24 0 0 0 .88.36A1.28 1.28 0 0 0 9 15l6-6a1.27 1.27 0 0 0 0-1.8m-6.9 6.89L1.91 7.92v-6h6l6.17 6.17z"></svg:path><svg:ellipse cx="4.95" cy="4.95" fill="currentColor" rx="1.41" ry="1.5"></svg:ellipse>`,
})
export class NimbusTagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
