import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSlashIcon],svg[picon-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h2V1h1v2H4v4H3"></svg:path>`,
})
export class PiconSlashIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
