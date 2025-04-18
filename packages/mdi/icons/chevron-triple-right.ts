import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChevronTripleRightIcon],svg[mdi-chevron-triple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.58 16.59L19.17 12l-4.59-4.59L16 6l6 6l-6 6zm-6 0L13.17 12L8.58 7.41L10 6l6 6l-6 6zm-6 0L7.17 12L2.58 7.41L4 6l6 6l-6 6z"></svg:path>`,
})
export class MdiChevronTripleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
