import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsDiscIcon],svg[bx-bxs-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 14c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4z" fill="currentColor"></svg:path><svg:circle cx="11.998" cy="11.998" r="2.002" fill="currentColor"></svg:circle>`,
})
export class BxBxsDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
