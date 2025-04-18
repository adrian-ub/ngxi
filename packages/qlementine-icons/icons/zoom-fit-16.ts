import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsZoomFit16Icon],svg[qlementine-icons-zoom-fit-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1H9.5A.5.5 0 0 1 9 .5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 12c1.34 0 2.57-.478 3.52-1.27l3.92 3.92a.5.5 0 0 0 .707-.707l-3.92-3.92a5.47 5.47 0 0 0 1.27-3.52c0-3.04-2.46-5.5-5.5-5.5s-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5zm0-1C8.99 11 11 8.99 11 6.5S8.99 2 6.5 2S2 4.01 2 6.5S4.01 11 6.5 11" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M1 9.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H1zM.5 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V1h2.5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class QlementineIconsZoomFit16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
