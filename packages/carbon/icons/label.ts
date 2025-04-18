import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLabelIcon],svg[carbon-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 13h-5v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2m0 8h-4v-2h4zM13 9H9a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5z"></svg:path><svg:path fill="currentColor" d="M28 28H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M4 6v20h24V6Z"></svg:path>`,
})
export class CarbonLabelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
