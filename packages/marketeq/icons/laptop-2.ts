import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLaptop2Icon],svg[marketeq-laptop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M10.417 6.25h29.166a2.083 2.083 0 0 1 2.084 2.083v18.75H8.333V8.333a2.083 2.083 0 0 1 2.084-2.083M6.25 35.417h37.5v6.25a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083z"></svg:path><svg:path stroke="#344054" d="M41.667 27.083H8.333L6.25 35.417h37.5z"></svg:path></svg:g>`,
})
export class MarketeqLaptop2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
