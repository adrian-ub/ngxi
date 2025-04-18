import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqNoteBookIcon],svg[marketeq-note-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 6.25h-31.25c-1.15 0-2.084.933-2.084 2.083v33.334c0 1.15.933 2.083 2.084 2.083h31.25c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path><svg:path stroke="#344054" d="M10.417 16.667H6.25zm0 8.333H6.25zm0 8.333H6.25zm25-18.75H18.75v8.334h16.667z"></svg:path></svg:g>`,
})
export class MarketeqNoteBookIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
