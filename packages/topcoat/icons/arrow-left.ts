import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatArrowLeftIcon],svg[topcoat-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.5 26.5v-10c0-2.529-.508-3-2.979-3H21.5v-12l-20 20l20 20v-12h15.021c2.44 0 2.979-.5 2.979-3"></svg:path>`,
})
export class TopcoatArrowLeftIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
