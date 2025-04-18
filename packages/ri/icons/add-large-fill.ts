import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAddLargeFillIcon],svg[ri-add-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z"></svg:path>`,
})
export class RiAddLargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
