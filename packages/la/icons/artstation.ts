import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArtstationIcon],svg[la-artstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.73 5L26 27l1.994-4.512a3 3 0 0 0-.123-2.908L20.096 6.436A3 3 0 0 0 17.536 5zm-2.218 2.178L5.63 18h11.916zM4 21l2.172 4.342A3 3 0 0 0 8.854 27h13.712l-3.345-6z"></svg:path>`,
})
export class LaArtstationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
