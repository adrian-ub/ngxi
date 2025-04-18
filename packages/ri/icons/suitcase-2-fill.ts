import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSuitcase2FillIcon],svg[ri-suitcase-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1zM10 9H8v9h2zm6 0h-2v9h2zm-2-5h-4v1h4z"></svg:path>`,
})
export class RiSuitcase2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
