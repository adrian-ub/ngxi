import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsNoteTextMinusLineIcon],svg[majesticons-note-text-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15V5a2 2 0 0 0-2-2h-6m8 12v.172a2 2 0 0 1-.586 1.414l-3.828 3.828a2 2 0 0 1-1.414.586H15m6-6h-4a2 2 0 0 0-2 2v4m0 0H5a2 2 0 0 1-2-2v-8m10-4h4M7 11h10M7 15h4M9 6H3"></svg:path>`,
})
export class MajesticonsNoteTextMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
