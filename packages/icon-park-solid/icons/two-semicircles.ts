import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoSemicirclesIcon],svg[icon-park-solid-two-semicircles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 25c0-11.046-8.954-20-20-20S4 13.954 4 25zm-30 7c0 5.523 4.477 10 10 10s10-4.477 10-10z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkSolidTwoSemicirclesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
