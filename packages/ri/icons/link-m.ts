import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLinkMIcon],svg[ri-link-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.657 14.828l-1.415-1.414L17.658 12A4 4 0 1 0 12 6.343l-1.414 1.414L9.17 6.343l1.415-1.414a6 6 0 0 1 8.485 8.485zm-2.829 2.829l-1.414 1.414a6 6 0 0 1-8.485-8.485l1.414-1.414l1.414 1.414L6.343 12A4 4 0 0 0 12 17.657l1.414-1.414zm0-9.9l1.415 1.415l-7.072 7.07l-1.414-1.414z"></svg:path>`,
})
export class RiLinkMIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
