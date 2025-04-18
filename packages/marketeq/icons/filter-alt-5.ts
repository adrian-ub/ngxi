import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFilterAlt5Icon],svg[marketeq-filter-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 25h29.166"></svg:path><svg:path stroke="#306CFE" d="M14.583 35.417h20.834M6.25 14.583h37.5z"></svg:path></svg:g>`,
})
export class MarketeqFilterAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
