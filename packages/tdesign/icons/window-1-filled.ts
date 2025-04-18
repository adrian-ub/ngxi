import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWindow1FilledIcon],svg[tdesign-window-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 .613L22 4.28V22H2V3h9zm9 19v-5.891l-7-2.334v5.892zm0-8V5.721l-7-2.333V9.28z"></svg:path>`,
})
export class TdesignWindow1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
