import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFeedIcon],svg[fe-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6m12.971 0C18.473 12.408 11.592 5.527 3 5.029V3c9.941 0 18 8.059 18 18zm-5.012 0C13.478 15.17 8.829 10.522 3 10.041V8c7.18 0 13 5.82 13 13z"></svg:path>`,
})
export class FeFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
