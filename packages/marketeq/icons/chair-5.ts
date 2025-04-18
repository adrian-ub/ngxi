import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChair5Icon],svg[marketeq-chair-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 6.25v20.833m0 8.334v8.333zm20.834 0v8.333zm0-8.334V6.25z"></svg:path><svg:path stroke="#306CFE" d="M35.417 18.75H14.583v-8.333h20.834zM37.5 35.417h-25v-6.25a2.083 2.083 0 0 1 2.083-2.084h20.834a2.083 2.083 0 0 1 2.083 2.084z"></svg:path></svg:g>`,
})
export class MarketeqChair5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
