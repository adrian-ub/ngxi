import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAysIcon],svg[arcticons-ays-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24v13.5M12.309 17.25L24 24l11.691-6.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21 3.305l-13.424 7.75a6 6 0 0 0-3 5.195v15.5a6 6 0 0 0 3 5.195L21 44.695a6 6 0 0 0 6 0l13.424-7.75a6 6 0 0 0 3-5.195v-15.5a6 6 0 0 0-3-5.195L27 3.305a6 6 0 0 0-6 0"></svg:path>`,
})
export class ArcticonsAysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
