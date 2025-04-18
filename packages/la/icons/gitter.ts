import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGitterIcon],svg[la-gitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v17h2V2zm6 4v24h2V6zm6 0v24h2V6zm6 0v13h2V6z"></svg:path>`,
})
export class LaGitterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
