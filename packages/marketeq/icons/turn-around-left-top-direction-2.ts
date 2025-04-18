import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnAroundLeftTopDirection2Icon],svg[marketeq-turn-around-left-top-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 18.75h28.125a9.355 9.355 0 0 1 9.375 9.375v0a9.356 9.356 0 0 1-9.375 9.375h-7.292"></svg:path><svg:path stroke="#344054" d="m12.5 25l-6.25-6.25l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqTurnAroundLeftTopDirection2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
