import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsDuplicateIcon],svg[pepicons-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 6.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-7 8v-6h6v6h-6Z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 13.5h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-2v-1h-6v6h1v2Z"></svg:path></svg:g>`,
})
export class PepiconsDuplicateIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
