import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAliensFillIcon],svg[ri-aliens-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2m5.5 10a4.5 4.5 0 0 0-4.475 4.975q.235.025.475.025a4.5 4.5 0 0 0 4.475-4.975A5 5 0 0 0 17.5 12m-11 0q-.24 0-.475.025a4.5 4.5 0 0 0 4.95 4.95Q11 16.74 11 16.5A4.5 4.5 0 0 0 6.5 12"></svg:path>`,
})
export class RiAliensFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
