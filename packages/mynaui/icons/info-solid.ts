import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoSolidIcon],svg[mynaui-info-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75M10.75 9.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v9.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.25-1.457v-8.586a.75.75 0 0 1-.5-.707"></svg:path>`,
})
export class MynauiInfoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
