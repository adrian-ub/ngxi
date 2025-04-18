import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHandPointingDownIcon],svg[mdi-hand-pointing-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 21V11l-3.2 1.69l-.2.03c-.31 0-.57-.12-.76-.32L5 11.63l4.9-4.2c.26-.27.6-.43 1-.43h6.5c.77 0 1.5.7 1.5 1.5v4.36c0 .61-.35 1.14-.85 1.34l-4.94 2.2l-1.21.13V21a1 1 0 0 1-1 1a1 1 0 0 1-1-1m9-16h-8V2h8z"></svg:path>`,
})
export class MdiHandPointingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
