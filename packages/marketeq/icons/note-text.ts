import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqNoteTextIcon],svg[marketeq-note-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 20.833v12.5M29.167 12.5h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333a2.083 2.083 0 0 1 2.083-2.083h8.334a2.083 2.083 0 0 1 2.083 2.083v2.084a2.083 2.083 0 0 1-2.083 2.083M18.75 20.833h12.5z"></svg:path><svg:path stroke="#306CFE" d="M37.5 8.333a2.083 2.083 0 0 1 2.083 2.084v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083v-31.25A2.083 2.083 0 0 1 12.5 8.333"></svg:path></svg:g>`,
})
export class MarketeqNoteTextIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
