import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurtainsClosedIcon],svg[mdi-curtains-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1V1h22zM2 22h9V4H2zM22 4h-9v18h9z"></svg:path>`,
})
export class MdiCurtainsClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
