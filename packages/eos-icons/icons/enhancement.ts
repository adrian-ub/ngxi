import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsEnhancementIcon],svg[eos-icons-enhancement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.02 13.99h4v8.02h-4zm7-3.97h4v11.99h-4zM22 6l-4-4l-4 4h2v16.02h4V6z"></svg:path>`,
})
export class EosIconsEnhancementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
