import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowRotateCounterclockwiseIcon],svg[proicons-arrow-rotate-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.25 12a8.25 8.25 0 1 0-12.375 7.145l1.168.503m.082-3.398v3q-.002.213-.082.398m-3.918.602h3a1 1 0 0 0 .918-.602"></svg:path><svg:path d="M14.5 11.75a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Z"></svg:path></svg:g>`,
})
export class ProiconsArrowRotateCounterclockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
