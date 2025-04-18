import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMusicalNoteIcon],svg[openmoji-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3F3F3F"><svg:path d="m26.324 22.812l25.295-5.26l-.07-4.677l-25.444 5.666z"></svg:path><svg:circle cx="20.756" cy="51.59" r="5.787"></svg:circle><svg:circle cx="46.206" cy="46.013" r="5.787"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m51.619 17.552l-25.445 5.671l-.069-4.682l25.444-5.666z"></svg:path><svg:circle cx="20.756" cy="51.59" r="5.787"></svg:circle><svg:path d="m26.105 18.541l.438 33.049"></svg:path><svg:circle cx="46.206" cy="46.013" r="5.787"></svg:circle><svg:path d="m51.555 12.963l.438 33.05"></svg:path></svg:g>`,
})
export class OpenmojiMusicalNoteIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
