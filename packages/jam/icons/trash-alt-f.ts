import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTrashAltFIcon],svg[jam-trash-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.778 6l-.673 12.11A2 2 0 0 1 12.108 20H3.892a2 2 0 0 1-1.997-1.89L1.222 6zM1 0h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1m5 8a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamTrashAltFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
