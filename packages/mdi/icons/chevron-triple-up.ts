import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChevronTripleUpIcon],svg[mdi-chevron-triple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.59 9.42L12 4.83L7.41 9.42L6 8l6-6l6 6zm0 6L12 10.83l-4.59 4.59L6 14l6-6l6 6zm0 6L12 16.83l-4.59 4.59L6 20l6-6l6 6z"></svg:path>`,
})
export class MdiChevronTripleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
