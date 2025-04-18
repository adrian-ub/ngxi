import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketUsIcon],svg[mdi-power-socket-us-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7h2v5H8zM4.22 2h15.56C21 2 22 3 22 4.22v15.56A2.22 2.22 0 0 1 19.78 22H4.22C3 22 2 21 2 19.78V4.22A2.22 2.22 0 0 1 4.22 2M12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m2 3.5h2v4h-2zm-3.5 8.75a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5V17h-3z"></svg:path>`,
})
export class MdiPowerSocketUsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
