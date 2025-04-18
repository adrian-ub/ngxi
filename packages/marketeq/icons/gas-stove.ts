import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGasStoveIcon],svg[marketeq-gas-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="m32.792 17.208l2.625-2.625m-3.042 17.792a10.416 10.416 0 1 1-14.713-14.75a10.416 10.416 0 0 1 14.713 14.75m.438.437l2.604 2.605zM17.27 32.73l-2.688 2.688zm-.063-15.52l-2.625-2.626z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 41.667V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqGasStoveIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
