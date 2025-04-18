import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsListenAudiobookPlayerIcon],svg[arcticons-listen-audiobook-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.541 26.52l-12.01 6.935v-13.87zM10.396 7.193c0 1.267 1.785 2.694 4.002 2.687"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.398 43.5h19.204a3.993 3.993 0 0 0 4.002-3.984V8.502A3.993 3.993 0 0 0 33.62 4.5H14.398c-2.217 0-4.002 1.427-4.002 2.693v32.305A3.993 3.993 0 0 0 14.38 43.5zV9.88l19.204-.006a3.993 3.993 0 0 1 4.002 3.984v.017"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.397 8.065l19.205-.007c.554 0 1.081.112 1.56.314M14.397 6.307L33.602 6.3c.554 0 1.081.112 1.56.314"></svg:path>`,
})
export class ArcticonsListenAudiobookPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
