import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity5FilledIcon],svg[tdesign-city-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 4.52l3.5-2.8l3.5 2.8V22h-9v-7h-2v7H2V4.52l3.5-2.8L9 4.52v5.108a4.124 4.124 0 0 0 6 0zM4 5.48V20h3V5.48l-1.5-1.2zm13 0V20h3V5.48l-1.5-1.2z"></svg:path>`,
})
export class TdesignCity5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
