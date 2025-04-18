import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqNoteDownIcon],svg[marketeq-note-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333v-12.5m4.167-8.333h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333a2.083 2.083 0 0 1 2.083-2.083h8.334a2.083 2.083 0 0 1 2.083 2.083v2.084a2.083 2.083 0 0 1-2.083 2.083m-8.334 16.667L25 33.333l4.167-4.166"></svg:path><svg:path stroke="#306CFE" d="M37.5 8.333a2.083 2.083 0 0 1 2.083 2.084v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083v-31.25A2.083 2.083 0 0 1 12.5 8.333"></svg:path></svg:g>`,
})
export class MarketeqNoteDownIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
