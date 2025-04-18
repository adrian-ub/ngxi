import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGradienterFillIcon],svg[ri-gradienter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M8.126 11H4.062a8 8 0 0 0 0 2h4.064a4 4 0 0 1 0-2m7.748 0a4 4 0 0 1 0 2h4.064a8 8 0 0 0 0-2zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiGradienterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
