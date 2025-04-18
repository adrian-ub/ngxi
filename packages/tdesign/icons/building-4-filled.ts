import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding4FilledIcon],svg[tdesign-building-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h20v12h-6v-6H8v6H2z"></svg:path><svg:path fill="currentColor" d="M10 22v-4h4v4zM21 2H9v2h1v4h10V4h1zm-5.996 2.998v2.004H13V4.998z"></svg:path>`,
})
export class TdesignBuilding4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
