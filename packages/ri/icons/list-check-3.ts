import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riListCheck3Icon],svg[ri-list-check-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v3H5V6zM3 4v7h7V4zm10 0h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8zm-2.293-1.793l-1.414-1.414L6 18.086l-1.793-1.793l-1.414 1.414L6 20.914z"></svg:path>`,
})
export class RiListCheck3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
