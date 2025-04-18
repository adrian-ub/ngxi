import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DatabaseIcon],svg[icons8-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v24h20V4zm2 2h16v5H8zm0 7h16v6H8zm0 8h16v5H8z"></svg:path>`,
})
export class Icons8DatabaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
