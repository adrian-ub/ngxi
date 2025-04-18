import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGsmarenaIcon],svg[arcticons-gsmarena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.823 22.28L21.591 4.5h16.705v27.947l-10.373-3.839l-.261-14.209l-8.094 11.118Zm5.037 11.053L38.297 43.5H9.704Z"></svg:path>`,
})
export class ArcticonsGsmarenaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
