import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity15FilledIcon],svg[tdesign-city-15-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h12v7.02l8 1.667V22h-6v-6h-2v6H2zm6 5.77l4 .834V4H4v16h4z"></svg:path>`,
})
export class TdesignCity15FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
