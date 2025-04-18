import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightBullhornIcon],svg[mdi-light-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 4l-3 3H3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3h3l3 3h2V4zm.41 1H15v13h-.59l-3-3H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h8.41zM18 7v1c1.7.25 3 1.71 3 3.47c0 1.77-1.3 3.22-3 3.47v1.01A4.504 4.504 0 0 0 18 7m0 3.06v2.83c.58-.21 1-.76 1-1.42c0-.65-.42-1.21-1-1.41M4 16h3v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path>`,
})
export class MdiLightBullhornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
