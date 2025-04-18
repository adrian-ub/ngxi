import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoSemicirclesIcon],svg[icon-park-two-semicircles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M44 25C44 13.9543 35.0457 5 24 5C12.9543 5 4 13.9543 4 25H44Z"></svg:path><svg:path d="M14 32C14 37.5228 18.4772 42 24 42C29.5228 42 34 37.5228 34 32H14Z"></svg:path></svg:g>`,
})
export class IconParkTwoSemicirclesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
