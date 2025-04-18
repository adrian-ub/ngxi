import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintPlayIcon],svg[pepicons-print-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path d="M16.568 11.058a1 1 0 0 1-.054 1.721l-8.033 4.408A1 1 0 0 1 7 16.311V6.817a1 1 0 0 1 1.535-.845z"></svg:path><svg:path fill-rule="evenodd" d="M14.067 11.841L9 8.633v5.988zm2.447.938a1 1 0 0 0 .054-1.721L8.535 5.972A1 1 0 0 0 7 6.817v9.494a1 1 0 0 0 1.481.876z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="m6 15.321l9.014-4.883L6 4.804zm9.49-4.003a1 1 0 0 0 .054-1.728L6.53 3.956A1 1 0 0 0 5 4.804v10.517a1 1 0 0 0 1.476.88z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintPlayIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
