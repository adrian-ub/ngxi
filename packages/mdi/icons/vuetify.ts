import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVuetifyIcon],svg[mdi-vuetify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.64L7.92 2h8.16zm0 10.31L3.27 4.91h4.57L12 14.47l4.16-9.56h4.57z"></svg:path>`,
})
export class MdiVuetifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
