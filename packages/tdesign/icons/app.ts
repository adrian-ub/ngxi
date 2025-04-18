import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAppIcon],svg[tdesign-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 3.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0M2 2h9v9H2zm2 2v5h5V4zm-2 9h9v9H2zm2 2v5h5v-5zm9-2h9v9h-9zm7 2h-5v5h5z"></svg:path>`,
})
export class TdesignAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
