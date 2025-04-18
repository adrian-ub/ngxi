import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintNutIcon],svg[pepicons-print-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path d="M7.58 4h6.84a1 1 0 0 1 .868.504l3.428 6a1 1 0 0 1 0 .992l-3.428 6a1 1 0 0 1-.868.504H7.58a1 1 0 0 1-.868-.504l-3.428-6a1 1 0 0 1 0-.992l3.428-6A1 1 0 0 1 7.58 4"></svg:path><svg:path fill-rule="evenodd" d="m8.16 6l-2.857 5l2.858 5h5.678l2.858-5l-2.858-5zm6.26-2H7.58a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 7.58 18h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 14.42 4" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M14.722 16.744a1.5 1.5 0 0 1-1.302.756H6.58a1.5 1.5 0 0 1-1.302-.756l-3.429-6a1.5 1.5 0 0 1 0-1.488l3.429-6A1.5 1.5 0 0 1 6.58 2.5h6.84a1.5 1.5 0 0 1 1.302.756l3.429 6a1.5 1.5 0 0 1 0 1.488zM13.42 16.5a.5.5 0 0 0 .434-.252l3.428-6a.5.5 0 0 0 0-.496l-3.428-6a.5.5 0 0 0-.434-.252H6.58a.5.5 0 0 0-.434.252l-3.428 6a.5.5 0 0 0 0 .496l3.428 6a.5.5 0 0 0 .434.252z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.5 10a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintNutIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
