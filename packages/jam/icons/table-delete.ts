import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTableDeleteIcon],svg[jam-table-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 4v8h10V4zm5 5.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L5.586 8L4.172 6.586a1 1 0 1 1 1.414-1.414L7 6.586l1.414-1.414a1 1 0 1 1 1.414 1.414L8.414 8l1.414 1.414a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class JamTableDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
