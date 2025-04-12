import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStickyNoteIcon],svg[lucide-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></svg:path><svg:path d="M15 3v4a2 2 0 0 0 2 2h4"></svg:path></svg:g>`
})
export class LucideStickyNoteIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
