import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBracketSquare2Icon],svg[marketeq-bracket-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 35.417h2.083a2.083 2.083 0 0 0 2.083-2.084v-6.25A2.083 2.083 0 0 1 35.417 25a2.083 2.083 0 0 1-2.084-2.083v-6.25a2.084 2.084 0 0 0-2.083-2.084h-2.083m-8.334 0H18.75a2.083 2.083 0 0 0-2.083 2.084v6.25A2.083 2.083 0 0 1 14.583 25a2.083 2.083 0 0 1 2.084 2.083v6.25a2.083 2.083 0 0 0 2.083 2.084h2.083"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqBracketSquare2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
