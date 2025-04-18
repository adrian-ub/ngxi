import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpacexIcon],svg[lineicons-spacex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.426 11H2.278l-.111.223l2.37 1.74c.445-.259.944-.518 1.463-.777m.352 2.074l2.092 1.518h2.149l.092-.203l-3.11-2.278c-.408.314-.834.63-1.223.963"></svg:path><svg:path fill="currentColor" d="M4.111 15.778H2.167L2 15.518c1.315-1.277 7.204-6.721 20-7.295c0 0-10.722.37-17.889 7.555"></svg:path>`,
})
export class LineiconsSpacexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
