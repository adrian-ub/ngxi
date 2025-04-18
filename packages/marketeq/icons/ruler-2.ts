import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRuler2Icon],svg[marketeq-ruler-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 35.417h4.167m-4.167-20.834h4.167zm0 10.417h4.167z"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75h12.5V6.25h-12.5z"></svg:path></svg:g>`,
})
export class MarketeqRuler2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
