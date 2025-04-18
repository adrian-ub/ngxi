import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewArrayIcon],svg[mdi-view-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h9V5H8m10 0v13h3V5M4 18h3V5H4z"></svg:path>`,
})
export class MdiViewArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
