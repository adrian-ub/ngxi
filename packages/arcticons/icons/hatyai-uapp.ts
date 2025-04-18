import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHatyaiUappIcon],svg[arcticons-hatyai-uapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.982 15.14v11.74c0 3.322 2.659 5.98 5.759 5.98s5.759-2.658 5.759-5.98V15.14m-26.914 8.638h11.738m0-8.638v17.72M10.5 15.083v17.834"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsHatyaiUappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
