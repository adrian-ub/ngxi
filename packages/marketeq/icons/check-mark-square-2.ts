import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCheckMarkSquare2Icon],svg[marketeq-check-mark-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 10.417L25 29.167l-8.333-8.334"></svg:path><svg:path stroke="#306CFE" d="M43.75 22.917v18.75a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h25"></svg:path></svg:g>`,
})
export class MarketeqCheckMarkSquare2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
