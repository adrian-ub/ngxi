import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVolcanoOutlineIcon],svg[mdi-volcano-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-7l-2 5H6l-4 9h20zM7.3 15h3.05l.5-1.26l1.5-3.74h4.15l2.85 10H5.08zM13 1h2v4h-2zm3.12 4.47l2.83-2.83l1.41 1.41l-2.82 2.83zM7.64 4.05l1.41-1.41l2.83 2.82l-1.41 1.42z"></svg:path>`,
})
export class MdiVolcanoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
