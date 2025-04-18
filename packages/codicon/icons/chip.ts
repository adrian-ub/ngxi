import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconChipIcon],svg[codicon-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1h1v2h1V1h1v2h1V1h1v2h1l1 1v1h2v1h-2v1h2v1h-2v1h2v1h-2v1l-1 1h-1v2H9v-2H8v2H7v-2H6v2H5v-2H4l-1-1v-1H1V9h2V8H1V7h2V6H1V5h2V4l1-1h1zM4 11h7V4H4z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconChipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
