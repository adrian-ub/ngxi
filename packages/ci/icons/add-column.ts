import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciAddColumnIcon],svg[ci-add-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h3m0 0h3m-3 0v-3m0 3v3m6 1h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"></svg:path>`,
})
export class CiAddColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
