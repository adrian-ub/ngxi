import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqStickyNotes6Icon],svg[marketeq-sticky-notes-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 14.583v18.75a2.083 2.083 0 0 1-2.084 2.084h-25a2.083 2.083 0 0 1-2.083-2.084v-18.75A2.083 2.083 0 0 1 8.333 12.5h25"></svg:path><svg:path stroke="#306CFE" d="M10.417 43.75h31.25a2.083 2.083 0 0 0 2.083-2.083V20.833"></svg:path><svg:path stroke="#344054" d="m34.563 13.354l-5.396 5.396m12.5-8.333a4.167 4.167 0 1 0-8.334 0v0a4.167 4.167 0 1 0 8.334 0"></svg:path></svg:g>`,
})
export class MarketeqStickyNotes6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
