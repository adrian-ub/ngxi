import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsDivide16SolidIcon],svg[heroicons-divide-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class HeroiconsDivide16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
