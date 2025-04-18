import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimMediumMIcon],svg[uim-medium-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6.417h-.791a.9.9 0 0 0-.709.694v9.83a.84.84 0 0 0 .709.642H22v2.334h-7.167v-2.334h1.5V7.25h-.073l-3.503 12.667h-2.712L6.588 7.25H6.5v10.333H8v2.334H2v-2.334h.768a.84.84 0 0 0 .732-.641v-9.83a.9.9 0 0 0-.732-.695H2V4.083h7.503l2.463 9.167h.068l2.486-9.167H22z"></svg:path>`,
})
export class UimMediumMIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
