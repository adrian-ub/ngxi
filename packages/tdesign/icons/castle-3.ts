import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle3Icon],svg[tdesign-castle-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v1h-4V2h-2v8h-4V2H8v1H4V2H2v20h20V2zM4 5h4v5H6v10H4zm4 15v-8h8v8h-3v-5h-2v5zm10 0V10h-2V5h4v15z"></svg:path>`,
})
export class TdesignCastle3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
