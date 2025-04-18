import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesListEditOutlineIcon],svg[bubbles-list-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#bubblesListEditOutline0)"><svg:path d="m20.25 19.511l1.5 3l1.5-3v-9.75a1.5 1.5 0 1 0-3 0zm-7.5-14.25h3a1.5 1.5 0 0 1 1.5 1.5v14.25a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5V6.761a1.5 1.5 0 0 1 1.5-1.5h3a3.75 3.75 0 1 1 7.5 0"></svg:path><svg:path d="M9 4.511a.375.375 0 1 1 0 .75a.375.375 0 0 1 0-.75"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesListEditOutline0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesListEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
