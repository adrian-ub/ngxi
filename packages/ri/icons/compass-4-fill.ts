import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCompass4FillIcon],svg[ri-compass-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m3.446-12.032a4 4 0 0 0-1.414-1.414l-5.478 5.478a4 4 0 0 0 1.414 1.414z"></svg:path>`,
})
export class RiCompass4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
