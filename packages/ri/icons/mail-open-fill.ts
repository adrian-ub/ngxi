import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailOpenFillIcon],svg[ri-mail-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.028 0l9.24 5.545a.5.5 0 0 1 .242.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429m16.103 1.39l-6.285 5.439l-6.414-5.445l-1.294 1.524l7.72 6.555l7.581-6.56z"></svg:path>`,
})
export class RiMailOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
