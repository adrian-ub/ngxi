import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDownDirection2Icon],svg[marketeq-down-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.146 13.104L25 25.958l12.854-12.854"></svg:path><svg:path stroke="#306CFE" d="m37.854 13.104l5.896 5.875l-17.27 17.292a2.08 2.08 0 0 1-2.96 0L6.25 19l5.896-5.897"></svg:path></svg:g>`,
})
export class MarketeqDownDirection2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
