import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBackward2Icon],svg[marketeq-backward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 6.25v37.5"></svg:path><svg:path stroke="#306CFE" d="m18.75 25l20.833 14.583V10.417z"></svg:path></svg:g>`,
})
export class MarketeqBackward2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
