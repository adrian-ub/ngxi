import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeaceOutlineIcon],svg[healthicons-peace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-1 2.027C13.524 6.547 6 14.394 6 24c0 4.61 1.734 8.817 4.585 12.001L23 23.586zm0 35.946a17.93 17.93 0 0 1-11.001-4.557L23 26.414zm2-35.946v17.559L37.416 36A17.93 17.93 0 0 0 42 24c0-9.606-7.524-17.454-17-17.973m11.001 31.389L25 26.414v15.559a17.93 17.93 0 0 0 11.001-4.557" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPeaceOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
