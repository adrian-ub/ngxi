import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqEditAlt6Icon],svg[marketeq-edit-alt-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M42.52 13.354L36.647 7.48a2.083 2.083 0 0 0-2.959 0l-6 6l8.834 8.834l6-6a2.084 2.084 0 0 0 0-2.959"></svg:path><svg:path stroke="#306CFE" d="m21.813 19.354l8.833 8.834L15.083 43.75H6.25v-8.833z"></svg:path></svg:g>`,
})
export class MarketeqEditAlt6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
