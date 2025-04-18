import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqForward2Icon],svg[marketeq-forward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 43.75V6.25"></svg:path><svg:path stroke="#306CFE" d="M10.417 10.417v29.166L31.25 25z"></svg:path></svg:g>`,
})
export class MarketeqForward2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
