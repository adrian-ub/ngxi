import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feSquidIcon],svg[fe-squid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 10L6 8l6-6l6 6l-2 2v7a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-5 2.236V21a1 1 0 0 1-2 0v-2h-2v2a1 1 0 0 1-2 0v-1.764A3 3 0 0 1 4 17a1 1 0 0 1 2 0a1 1 0 0 0 2 0z"></svg:path>`,
})
export class FeSquidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
