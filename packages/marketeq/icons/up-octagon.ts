import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpOctagonIcon],svg[marketeq-up-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333V16.667m-5.208 5.208L25 16.667l5.208 5.208"></svg:path><svg:path stroke="#306CFE" d="M43.75 17.23v15.54L32.77 43.75H17.23L6.25 32.77V17.23L17.23 6.25h15.54z"></svg:path></svg:g>`,
})
export class MarketeqUpOctagonIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
