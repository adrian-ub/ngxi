import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoHeartbeatAltIcon],svg[fontisto-heartbeat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.909 10.928H24v2.02h-2.091zm-3.635 0h2.091v2.02h-2.091zm-6.022.001l-.657 2.215l-3.772-8.343l-1.954 6.17H0v2.02h7.346l.81-2.551l3.834 8.486l1.76-5.978h2.973v-2.02z"></svg:path>`,
})
export class FontistoHeartbeatAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
