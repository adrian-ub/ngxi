import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsScissors1VerticalIcon],svg[lineicons-scissors-1-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.397 15.312a3.162 3.162 0 1 1-1.273.797l-2.163-3.088l-2.145 3.064a3.162 3.162 0 1 1-1.283-.783l2.513-3.588L6.792 4.21a.75.75 0 1 1 1.229-.86zm-7.821 1.342a1.662 1.662 0 1 0 0 3.323a1.662 1.662 0 0 0 0-3.323m7.15 1.662a1.662 1.662 0 1 0 3.324 0a1.662 1.662 0 0 0-3.323 0"></svg:path><svg:path fill="currentColor" d="m19.167 4.159l-4.448 6.353l-.916-1.308l4.135-5.906a.75.75 0 0 1 1.23.86"></svg:path>`,
})
export class LineiconsScissors1VerticalIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
