import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyVirginMediaIcon],svg[arcticons-my-virgin-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 23.95c0 9.496-9.368 9.337-15.29 0c5.492-9.504 15.29-9.494 15.29 0m-39 0c0-14.75 14.527-14.503 23.71 0c-8.515 14.767-23.71 14.752-23.71 0"></svg:path>`,
})
export class ArcticonsMyVirginMediaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
