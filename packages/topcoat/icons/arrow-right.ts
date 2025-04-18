import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatArrowRightIcon],svg[topcoat-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 26.5v-10c0-2.529.529-3 3-3h15v-12l20 20l-20 20v-12h-15c-2.439 0-3-.5-3-3"></svg:path>`,
})
export class TopcoatArrowRightIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
