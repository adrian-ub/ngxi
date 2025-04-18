import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDropletIcon],svg[bx-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c4.636 0 8-3.468 8-8.246C20 7.522 12.882 2.4 12.579 2.185a1 1 0 0 0-1.156-.001C11.12 2.397 4 7.503 4 13.75C4 18.53 7.364 22 12 22m-.001-17.74C13.604 5.55 18 9.474 18 13.754C18 17.432 15.532 20 12 20s-6-2.57-6-6.25c0-4.29 4.394-8.203 5.999-9.49"></svg:path>`,
})
export class BxDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
