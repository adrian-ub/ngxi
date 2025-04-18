import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsViewColumnIcon],svg[zondicons-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H8v12h4zm2 0v12h4V4zM6 4H2v12h4zM0 2h20v16H0z"></svg:path>`,
})
export class ZondiconsViewColumnIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
