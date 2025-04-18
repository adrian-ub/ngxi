import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity13FilledIcon],svg[tdesign-city-13-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2h-1v4h6v14H13v-7h-2v7H1V8h6V4H6zM3 20h4V10H3zm18-10h-4v10h4zm-7.996-4.002H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCity13FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
