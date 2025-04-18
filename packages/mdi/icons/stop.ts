import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStopIcon],svg[mdi-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18H6V6h12z"></svg:path>`,
})
export class MdiStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
