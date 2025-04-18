import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity11FilledIcon],svg[tdesign-city-11-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h12v8.28l1-.334l7 2.333V22h-6v-6h-2v6H2zm6 10.28l4-1.334V4H4v16h4z"></svg:path>`,
})
export class TdesignCity11FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
