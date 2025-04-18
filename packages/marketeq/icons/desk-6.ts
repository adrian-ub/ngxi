import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDesk6Icon],svg[marketeq-desk-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 12.5v25m33.334-25v25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5h37.5M8.333 29.167h33.334V12.5H8.333z"></svg:path></svg:g>`,
})
export class MarketeqDesk6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
