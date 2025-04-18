import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewColumnIcon],svg[mdi-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v13h5V5M4 18h5V5H4m6 13h5V5h-5z"></svg:path>`,
})
export class MdiViewColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
