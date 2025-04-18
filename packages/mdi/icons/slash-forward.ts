import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSlashForwardIcon],svg[mdi-slash-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 21l7.9-18H17L9.1 21z"></svg:path>`,
})
export class MdiSlashForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
