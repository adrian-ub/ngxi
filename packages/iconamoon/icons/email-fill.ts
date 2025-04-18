import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonEmailFillIcon],svg[iconamoon-email-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.234 4.357A1 1 0 0 0 2 5v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5.01a1 1 0 0 0-.364-.781A1 1 0 0 0 21.004 4H3a1 1 0 0 0-.766.357M4 7.414V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414l-7.293 7.293a1 1 0 0 1-1.414 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonEmailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
