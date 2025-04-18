import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilChainIcon],svg[pepicons-pencil-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.346 11.902a3 3 0 0 1-.879-4.15l2.18-3.354a3 3 0 1 1 5.03 3.272l-2.18 3.353a3 3 0 0 1-4.15.88m-1.31.193a4 4 0 0 1-.407-4.889l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.3.527"></svg:path><svg:path d="M5.398 15.842a3 3 0 0 1-.879-4.151L6.7 8.338a3 3 0 1 1 5.03 3.271l-2.18 3.353a3 3 0 0 1-4.15.88m-1.31.193a4 4 0 0 1-.407-4.89l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.3.528"></svg:path></svg:g>`,
})
export class PepiconsPencilChainIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
