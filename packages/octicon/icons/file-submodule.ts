import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFileSubmoduleIcon],svg[octicon-file-submodule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 7H4v7h9c.55 0 1-.45 1-1V8h-4V7zM9 9H5V8h4v1zm4-5H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1h3V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z" fill="currentColor"></svg:path>`,
})
export class OcticonFileSubmoduleIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
