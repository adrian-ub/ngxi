import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAddLargeLineIcon],svg[ri-add-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"></svg:path>`,
})
export class RiAddLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
