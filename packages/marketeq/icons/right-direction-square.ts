import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRightDirectionSquareIcon],svg[marketeq-right-direction-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 29.167H14.583v-8.334H25v-4.166l9.604 6.625a2.083 2.083 0 0 1 0 3.416L25 33.333z"></svg:path><svg:path stroke="#306CFE" d="M8.333 43.75h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqRightDirectionSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
