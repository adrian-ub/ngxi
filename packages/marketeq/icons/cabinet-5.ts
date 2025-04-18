import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCabinet5Icon],svg[marketeq-cabinet-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 16.667v-2.084h8.334v2.084m-8.334 18.75v-2.084h8.334v2.084"></svg:path><svg:path stroke="#306CFE" d="M8.333 25h33.334m0-16.667v33.334a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083V8.333a2.083 2.083 0 0 1 2.084-2.083h29.166a2.083 2.083 0 0 1 2.084 2.083"></svg:path></svg:g>`,
})
export class MarketeqCabinet5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
