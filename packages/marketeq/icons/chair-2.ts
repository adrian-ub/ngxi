import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChair2Icon],svg[marketeq-chair-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 35.417v8.333m-20.834-8.333v8.333z"></svg:path><svg:path stroke="#306CFE" d="M35.417 27.083H14.583V8.333a2.083 2.083 0 0 1 2.084-2.083h16.666a2.083 2.083 0 0 1 2.084 2.083zm2.083 8.334h-25v-6.25a2.083 2.083 0 0 1 2.083-2.084h20.834a2.083 2.083 0 0 1 2.083 2.084z"></svg:path></svg:g>`,
})
export class MarketeqChair2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
