import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelCheckIcon],svg[raphael-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.38 14.73l2.828-2.83l7.75 7.748l12.92-12.915l2.83 2.828l-15.75 15.748z"></svg:path>`,
})
export class RaphaelCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
