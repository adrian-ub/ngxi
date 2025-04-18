import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoreVertCircleLineIcon],svg[si-more-vert-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
