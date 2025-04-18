import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurtainsIcon],svg[mdi-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1V1h22zM2 22h4c0-3-2-5-2-5c6-4 7-13 7-13H2zM22 4h-9s1 9 7 13c0 0-2 2-2 5h4z"></svg:path>`,
})
export class MdiCurtainsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
