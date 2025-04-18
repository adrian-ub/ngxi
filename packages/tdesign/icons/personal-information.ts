import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPersonalInformationIcon],svg[tdesign-personal-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm2 2v18h14V7.414L14.586 3zm7 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M6 19a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1h-2v-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H6z"></svg:path>`,
})
export class TdesignPersonalInformationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
