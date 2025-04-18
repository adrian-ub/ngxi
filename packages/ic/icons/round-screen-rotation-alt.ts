import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundScreenRotationAltIcon],svg[ic-round-screen-rotation-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.53 9.29c.63.63.18 1.71-.71 1.71c-.27 0-.52-.11-.71-.29L10.4 4L5.41 9H7c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.59l5-5c.78-.78 2.05-.78 2.83 0zM5.47 14.71c-.63-.63-.18-1.71.71-1.71c.27 0 .52.11.71.29L13.6 20l4.99-5H17c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-5 5c-.78.78-2.05.78-2.83 0z"></svg:path>`,
})
export class IcRoundScreenRotationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
