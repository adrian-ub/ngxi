import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSummitIcon],svg[mdi-summit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h2l5 2l-5 2v3.17L22 21H2l6-8l3.5 4.7l3.5-7.53z"></svg:path>`,
})
export class MdiSummitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
