import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLandscapeFillIcon],svg[ri-landscape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 21l-4.762-8.73L15 6l8 15zM8 10l6 11H2zM5.5 8a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class RiLandscapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
