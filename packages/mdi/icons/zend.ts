import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZendIcon],svg[mdi-zend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.28 9.81S11.28 7 14.09 7h8.41s0 2.81-2.79 2.81zm0 3.6s0-2.81 2.81-2.81h4.22s0 2.81-2.81 2.81zm0 3.59s0-2.81 2.81-2.81h1.41s0 2.81-2.82 2.81zm-.82-2.2V17H1.58L7.3 9.21H2.4V7h9.26l-5.7 7.8z"></svg:path>`,
})
export class MdiZendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
