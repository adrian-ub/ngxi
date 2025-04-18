import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGlobalcitizenIcon],svg[arcticons-globalcitizen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 1 2.5 24A21.503 21.503 0 0 1 24 2.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M24 11.5A12.5 12.5 0 1 1 11.5 24A12.5 12.5 0 0 1 24 11.5Z"></svg:path>`,
})
export class ArcticonsGlobalcitizenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
