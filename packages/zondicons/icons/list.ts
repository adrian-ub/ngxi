import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsListIcon],svg[zondicons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h2v2H1zm4 0h14v2H5zM1 9h2v2H1zm4 0h14v2H5zm-4 5h2v2H1zm4 0h14v2H5z"></svg:path>`,
})
export class ZondiconsListIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
