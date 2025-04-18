import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleUpSignSquareIcon],svg[marketeq-double-up-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.75 22.917l6.25-6.25l6.25 6.25m-12.5 10.416l6.25-6.25l6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M6.25 8.333v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqDoubleUpSignSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
