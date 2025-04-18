import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsTextDecorationIcon],svg[zondicons-text-decoration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5h-2v12H8V3h8v2h-2v12h-2zM8 3a4 4 0 1 0 0 8z"></svg:path>`,
})
export class ZondiconsTextDecorationIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
