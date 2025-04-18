import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForGeorgiaIcon],svg[emojione-flag-for-georgia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M38 2.6H26C14.3 5 5 14.2 2.6 26v12C5 49.8 14.3 59 26 61.4h12C49.8 59 59 49.7 61.4 38V26C59 14.2 49.7 5 38 2.6"></svg:path><svg:g fill="#ed4c5c"><svg:path d="M38 26V2.6Q35.15 2 32 2c-3.15 0-4.1.2-6 .6V26H2.6Q2 28.85 2 32c0 3.15.2 4.1.6 6H26v23.4q2.85.6 6 .6c3.15 0 4.1-.2 6-.6V38h23.4q.6-2.85.6-6c0-3.15-.2-4.1-.6-6z"></svg:path><svg:path d="M18 20h-4l1-6l-1-6h4l-1 6z"></svg:path><svg:path d="M10 16v-4l6 1l6-1v4l-6-1zm40 4h-4l1-6l-1-6h4l-1 6z"></svg:path><svg:path d="M42 16v-4l6 1l6-1v4l-6-1zM18 56h-4s1-4.5 1-6s-1-6-1-6h4s-1 4.5-1 6s1 6 1 6"></svg:path><svg:path d="M10 52v-4l6 1l6-1v4l-6-1zm40 4h-4l1-6l-1-6h4l-1 6z"></svg:path><svg:path d="M42 52v-4l6 1l6-1v4l-6-1z"></svg:path></svg:g>`,
})
export class EmojioneFlagForGeorgiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
