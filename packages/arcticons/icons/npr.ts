import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNprIcon],svg[arcticons-npr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.641 21.426v5.151m0-3.244a1.91 1.91 0 0 1 1.907-1.907h0m-16.344-.124v7.633m0-4.389a1.91 1.91 0 0 0 1.908 1.907h0a1.91 1.91 0 0 0 1.907-1.907v-1.24a1.91 1.91 0 0 0-1.907-1.907h0a1.91 1.91 0 0 0-1.908 1.907m-13.42 3.271v-5.152m3.815 5.152V23.43a1.91 1.91 0 0 0-1.907-1.907h0a1.91 1.91 0 0 0-1.907 1.907m8.726-5.933H4.5v13.007h13.008zm13.008 0H17.51v13.007h13.008zm-.027 0v13.007H43.5V17.495z"></svg:path>`,
})
export class ArcticonsNprIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
