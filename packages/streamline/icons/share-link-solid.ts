import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShareLinkSolidIcon],svg[streamline-share-link-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 5.5a2.75 2.75 0 1 0-2.747-2.62l-4 2a2.75 2.75 0 1 0 0 4.239l4 2a2.75 2.75 0 1 0 .816-1.828L5.475 7.37a2.8 2.8 0 0 0 0-.74L9.32 4.708c.497.49 1.179.792 1.931.792Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShareLinkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
