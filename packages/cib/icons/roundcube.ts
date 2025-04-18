import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibRoundcubeIcon],svg[cib-roundcube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.531 11.469c0 1.599-.396 3.063-.932 4.396l.932-.531l4.536-2.667l-3.599-2C27.067 4.667 22.135 0 15.999 0S4.931 4.667 4.53 10.667L.931 12.802l4.135 2.396l1.198.667c-.667-1.333-.932-2.797-.932-4.396c0-5.87 4.802-10.536 10.531-10.536c6 0 10.667 4.667 10.667 10.536zM.135 23.068L15.599 32v-9.865L.135 13.197zm16.266-.933V32l15.464-8.932v-9.87z"></svg:path>`,
})
export class CibRoundcubeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
