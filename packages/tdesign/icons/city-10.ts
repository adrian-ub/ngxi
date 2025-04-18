import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity10Icon],svg[tdesign-city-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 .72V10h8v12H2V3.72zM14 20h2v-5h2v5h2v-8h-6zM4 5.28V20h8V3.28zm2 2.718h2.004v2.004H6z"></svg:path>`,
})
export class TdesignCity10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
