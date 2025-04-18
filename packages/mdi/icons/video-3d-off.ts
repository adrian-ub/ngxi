import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideo3dOffIcon],svg[mdi-video-3d-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.61 2l18.74 18.74l-1.41 1.41L14.8 17H13v-1.8l-2-1.97v1.98c-.07.47-.26.87-.59 1.2c-.33.32-.73.52-1.2.59H5v-2h4v-2H6v-2h2.8L6.79 9H5V7.23L1.2 3.41zM16 7h.22c.78.07 1.41.36 1.92.88c.51.51.79 1.12.86 1.88v4.48c-.05.39-.13.76-.28 1.06L17 13.6V9.85c-.05-.22-.16-.41-.31-.57c-.16-.15-.35-.25-.57-.28H15v2.59l-2-2.02V7z"></svg:path>`,
})
export class MdiVideo3dOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
