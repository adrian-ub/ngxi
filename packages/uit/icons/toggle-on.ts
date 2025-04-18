import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitToggleOnIcon],svg[uit-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6.5h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11m0 10h-9a4.5 4.5 0 1 1 0-9h9a4.5 4.5 0 1 1 0 9m0-7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class UitToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
