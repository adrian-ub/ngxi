import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularBookmarkIcon],svg[fa-regular-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112l192 112V48c0-26.51-21.49-48-48-48m0 428.43l-144-84l-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996z"></svg:path>`,
})
export class FaRegularBookmarkIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
