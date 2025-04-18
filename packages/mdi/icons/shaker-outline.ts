import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShakerOutlineIcon],svg[mdi-shaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.88 4l2.15 2.1l-5.53 4.4l-1-1L16.87 4zm0-2a2 2 0 0 0-1.55.72L9.8 9.65l3.54 3.54l6.94-5.52c.9-.76.97-2.13.13-2.97L18.3 2.59c-.4-.4-.91-.59-1.42-.59M9.1 10.36l-.71.71a1.02 1.02 0 0 0 0 1.43l2.11 2.1c.21.2.46.29.72.29s.51-.09.71-.29l.7-.7zM6 15c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-5 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiShakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
