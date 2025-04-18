import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDirectionsIcon],svg[uil-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.12 9.88l-7-7a3.08 3.08 0 0 0-4.24 0l-7 7a3 3 0 0 0 0 4.24l7 7a3 3 0 0 0 4.24 0l7-7a3 3 0 0 0 0-4.24m-1.41 2.83l-7 7a1 1 0 0 1-1.42 0l-7-7a1 1 0 0 1 0-1.42l7-7a1 1 0 0 1 1.42 0l7 7a1 1 0 0 1 0 1.42m-5.5-3.42a1 1 0 0 0-1.42 1.42l.3.29H9.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h2.59l-.3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class UilDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
