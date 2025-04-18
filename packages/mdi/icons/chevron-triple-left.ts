import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChevronTripleLeftIcon],svg[mdi-chevron-triple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.42 7.41L4.83 12l4.59 4.59L8 18l-6-6l6-6zm6 0L10.83 12l4.59 4.59L14 18l-6-6l6-6zm6 0L16.83 12l4.59 4.59L20 18l-6-6l6-6z"></svg:path>`,
})
export class MdiChevronTripleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
