import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCadIcon],svg[carbon-cad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm12 7h-4V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2zm-14 2H4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H4v10h6z"></svg:path>`,
})
export class CarbonCadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
