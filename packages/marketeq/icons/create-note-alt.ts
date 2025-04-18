import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCreateNoteAltIcon],svg[marketeq-create-note-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 20.833s7.354.855 11.333-3.708c4-4.625 3.25-12.958 3.25-12.958a17 17 0 0 0-5.27.375l-.98 3.791l-3.98-1.479q-.644.487-1.166 1.104c-4 4.542-3.187 12.875-3.187 12.875m0 0L25 25"></svg:path><svg:path stroke="#306CFE" d="M25 6.25H8.333A2.083 2.083 0 0 0 6.25 8.333v33.334a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083V25"></svg:path></svg:g>`,
})
export class MarketeqCreateNoteAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
