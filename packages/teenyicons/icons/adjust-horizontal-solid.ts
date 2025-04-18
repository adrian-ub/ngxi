import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAdjustHorizontalSolidIcon],svg[teenyicons-adjust-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 0H6v2H0v1h6v2h3V3h6V2H9zM5 5H2v2H0v1h2v2h3V8h10V7H5zm8 5h-3v2H0v1h10v2h3v-2h2v-1h-2z"></svg:path>`,
})
export class TeenyiconsAdjustHorizontalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
