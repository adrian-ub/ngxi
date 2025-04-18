import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSymfoniumNoteIcon],svg[arcticons-symfonium-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M26.305 35.525v.082h0a7.893 7.893 0 1 1-7.893-7.893h0c1.692 0 3.34.543 4.699 1.55M34.325 4.516H25.28a2.037 2.037 0 0 0-2.037 2.037l.011 22.802"></svg:path><svg:path d="M34.44 10.909h-6.098a2.037 2.037 0 0 0-2.037 2.037v22.679"></svg:path><svg:path d="M34.246 4.5h.028a3.207 3.207 0 0 1 3.207 3.207h0a3.207 3.207 0 0 1-3.207 3.207h-.028"></svg:path></svg:g>`,
})
export class ArcticonsSymfoniumNoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
