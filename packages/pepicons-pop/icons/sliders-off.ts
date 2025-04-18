import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSlidersOffIcon],svg[pepicons-pop-sliders-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2.5 4.75a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H16.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-10.25 7a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H16.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.75 15.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-10.25-8a1 1 0 0 1 1-1h1.625a1 1 0 0 1 0 2H3.5a1 1 0 0 1-1-1m6.5 0a1 1 0 0 1 1-1h6.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.75 10.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopSlidersOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
