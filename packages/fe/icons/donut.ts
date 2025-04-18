import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDonutIcon],svg[fe-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 6C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-18h2v2h-2zm6 5h2v2h-2zM5 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4 2h2v2h-2zm-4 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5-4h2v2H6zM5 8h2v2H5z"></svg:path>`,
})
export class FeDonutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
