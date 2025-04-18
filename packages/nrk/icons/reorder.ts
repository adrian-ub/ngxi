import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkReorderIcon],svg[nrk-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l6 3.9v2.272l-5-3.25v12.08H6V4.922l-5 3.25V5.9zm9 17.08V7h2v12.08l5-3.25v2.272l-6 3.9l-6-3.9V15.83z"></svg:path>`,
})
export class NrkReorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
