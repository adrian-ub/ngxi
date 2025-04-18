import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsGo16Icon],svg[nonicons-go-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.129 5.548a2.58 2.58 0 1 0 2.463 3.355H4.645a.774.774 0 0 1 0-1.548h3.17A4.13 4.13 0 0 1 16 8.129a4.13 4.13 0 0 1-8 1.44a4.13 4.13 0 0 1-8-1.44a4.129 4.129 0 0 1 6.353-3.48a.774.774 0 1 1-.835 1.305a2.57 2.57 0 0 0-1.389-.406m7.742 0a2.58 2.58 0 1 0 0 5.162a2.58 2.58 0 0 0 0-5.162"></svg:path>`,
})
export class NoniconsGo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
