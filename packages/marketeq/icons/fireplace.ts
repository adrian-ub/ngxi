import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFireplaceIcon],svg[marketeq-fireplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 14.583h16.666zm14.812 22.688a10.8 10.8 0 0 0-1.333-5.563A4.5 4.5 0 0 1 27.77 34.5a9.6 9.6 0 0 0-4.604-7.417c0 5.563-4.646 5.563-4.646 10.188A6.354 6.354 0 0 0 25 43.75c5.563 0 6.48-3.563 6.48-6.48"></svg:path><svg:path stroke="#306CFE" d="M6.25 6.25h37.5m-2.083 37.5H8.333V6.25h33.334zm-35.417 0h37.5z"></svg:path></svg:g>`,
})
export class MarketeqFireplaceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
