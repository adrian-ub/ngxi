import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsStrokeThicknessIcon],svg[proicons-stroke-thickness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 4.5h18.5M20.5 10h-17a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5"></svg:path><svg:path fill="currentColor" d="M19.75 17H4.25a1.5 1.5 0 0 0 0 3h15.5a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class ProiconsStrokeThicknessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
