import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsNoteIcon],svg[proicons-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 4H8a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h6.843a4 4 0 0 0 2.829-1.172l1.656-1.656a4 4 0 0 0 1.172-2.829V8a4 4 0 0 0-4-4"></svg:path><svg:path d="M20.5 14H17a3 3 0 0 0-3 3v3.5M8 8h7.5M8 12h5"></svg:path></svg:g>`,
})
export class ProiconsNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
