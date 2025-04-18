import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRubyGemIcon],svg[catppuccin-ruby-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m8 12.5l4.5-5l-2-2h-5l-2 2z"></svg:path><svg:path d="M14.5 12L8 15.5L1.5 12V4L8 .5L14.5 4z"></svg:path></svg:g>`,
})
export class CatppuccinRubyGemIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
