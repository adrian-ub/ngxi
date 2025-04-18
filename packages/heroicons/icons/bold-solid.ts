import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBoldSolidIcon],svg[heroicons-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.246 3.744a.75.75 0 0 1 .75-.75h7.125a4.875 4.875 0 0 1 3.346 8.422a5.25 5.25 0 0 1-2.97 9.58h-7.5a.75.75 0 0 1-.75-.75zm7.125 6.75a2.625 2.625 0 0 0 0-5.25H8.246v5.25zm-4.125 2.251v6h4.5a3 3 0 0 0 0-6z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsBoldSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
