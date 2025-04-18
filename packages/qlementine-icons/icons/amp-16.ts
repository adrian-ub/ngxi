import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsAmp16Icon],svg[qlementine-icons-amp-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3c0-1.1.895-2 2-2h12c1.1 0 2 .895 2 2v10c0 1.1-.895 2-2 2H2c-1.1 0-2-.895-2-2zm1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm1-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.25-1a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsAmp16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
