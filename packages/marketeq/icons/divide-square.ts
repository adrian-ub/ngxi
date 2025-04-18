import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDivideSquareIcon],svg[marketeq-divide-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 15.625h.208m-.208 18.75h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M14.583 25h20.834"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDivideSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
