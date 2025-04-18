import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSoundcloudIcon],svg[zmdi-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 260H0v-51h9zm21 17h-9v-81h9zm17 4h-9v-94h9zm17 4h-9v-94h9zm21 0h-8V162h8zm17 0h-8V145h8zm22 0h-9V136h9zm17 0h-9V132h9zm21 0h-8V136h8zm17 0h-8V140h8zm17 0h-8V123h8zm22 0h-9V110h9zm156-1H228q-6 0-6-6V111q0-4 5-6q17-6 34-6q36 0 62.5 24.5T354 183q9-4 20-4q22 0 37.5 15.5T427 232t-15.5 37t-37.5 15"></svg:path>`,
})
export class ZmdiSoundcloudIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
