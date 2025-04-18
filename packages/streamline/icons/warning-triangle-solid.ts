import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWarningTriangleSolidIcon],svg[streamline-warning-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.218.226a1.5 1.5 0 0 1 2.117.596l.002.004l5.5 10.999A1.5 1.5 0 0 1 12.502 14H1.498a1.5 1.5 0 0 1-1.336-2.174v-.001L5.664.826l.002-.004a1.5 1.5 0 0 1 .553-.596ZM7 4.125a.75.75 0 0 1 .75.75v3.25a.75.75 0 0 1-1.5 0v-3.25a.75.75 0 0 1 .75-.75m1 6.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWarningTriangleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
