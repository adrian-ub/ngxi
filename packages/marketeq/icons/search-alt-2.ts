import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSearchAlt2Icon],svg[marketeq-search-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m43.75 43.75l-9.042-9.042"></svg:path><svg:path stroke="#306CFE" d="M22.917 39.583c9.204 0 16.666-7.462 16.666-16.666S32.121 6.25 22.917 6.25S6.25 13.712 6.25 22.917c0 9.204 7.462 16.666 16.667 16.666"></svg:path></svg:g>`,
})
export class MarketeqSearchAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
