import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleLeftSignSquareIcon],svg[marketeq-double-left-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 31.25L16.667 25l6.25-6.25m10.416 12.5L27.083 25l6.25-6.25"></svg:path><svg:path stroke="#306CFE" d="M8.333 43.75h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqDoubleLeftSignSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
