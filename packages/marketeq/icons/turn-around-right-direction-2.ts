import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnAroundRightDirection2Icon],svg[marketeq-turn-around-right-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M22.917 37.5h-7.292a9.353 9.353 0 0 1-9.375-9.375a9.354 9.354 0 0 1 9.375-9.375H43.75"></svg:path><svg:path stroke="#344054" d="m37.5 12.5l6.25 6.25L37.5 25"></svg:path></svg:g>`,
})
export class MarketeqTurnAroundRightDirection2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
