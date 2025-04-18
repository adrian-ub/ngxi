import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle2FillIcon],svg[iconamoon-check-circle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12a8 8 0 0 1 8-8a1 1 0 1 0 0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a1 1 0 1 0-2 0a8 8 0 1 1-16 0m15.707-6.293a1 1 0 0 0-1.414-1.414L16 6.586l-.293-.293a1 1 0 1 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCheckCircle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
