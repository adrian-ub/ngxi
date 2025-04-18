import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMicrophoneMuteIcon],svg[mage-microphone-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.3 12.705a3.17 3.17 0 0 1-1.3 1.3m-4-.001a3 3 0 0 1-1.65-2.579V5.848A3.4 3.4 0 0 1 12 2.76a3.4 3.4 0 0 1 3.64 3.089v2.518M5.33 10.626a6.64 6.64 0 0 0 2 4.707q.306.363.67.67m2.82 1.179a6.67 6.67 0 0 0 7.221-3.735a6.7 6.7 0 0 0 .629-2.821M12 21.25v-3.998M8.36 21.25h7.28"></svg:path><svg:path d="m20 4.01l-4.36 4.357l-5.63 5.627l-1.98 1.979L4 20"></svg:path></svg:g>`,
})
export class MageMicrophoneMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
