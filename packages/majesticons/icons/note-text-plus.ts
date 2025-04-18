import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsNoteTextPlusIcon],svg[majesticons-note-text-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3v3m0 3V6m0 0h3M6 6H3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 6h5a1 1 0 1 1 0 2h-5.341a6 6 0 0 1-1.187 2H17a1 1 0 1 1 0 2H7a1 1 0 0 1-.287-.042A5.98 5.98 0 0 1 2 10.472V19a3 3 0 0 0 3 3h9v-5a3 3 0 0 1 3-3h5V5a3 3 0 0 0-3-3h-8.528A5.98 5.98 0 0 1 12 6m4 15.883a3 3 0 0 0 1.293-.762l3.828-3.828A3 3 0 0 0 21.883 16H17a1 1 0 0 0-1 1zM6 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsNoteTextPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
