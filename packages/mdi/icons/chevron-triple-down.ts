import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChevronTripleDownIcon],svg[mdi-chevron-triple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.41 14.58L12 19.17l4.59-4.59L18 16l-6 6l-6-6zm0-6L12 13.17l4.59-4.59L18 10l-6 6l-6-6zm0-6L12 7.17l4.59-4.59L18 4l-6 6l-6-6z"></svg:path>`,
})
export class MdiChevronTripleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
