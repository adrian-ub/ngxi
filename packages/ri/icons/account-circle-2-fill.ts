import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAccountCircle2FillIcon],svg[ri-account-circle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-14a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 3a2 2 0 0 1 2 2h2a4 4 0 0 0-8 0h2a2 2 0 0 1 2-2"></svg:path>`,
})
export class RiAccountCircle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
