import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCheeseFilledIcon],svg[tdesign-cheese-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15.5a2.5 2.5 0 0 0 2.314 2.493l-1.64 5.195l-1.663-.395c-6.318-1.505-11.29-6.446-12.795-12.769L.812 8.327l10.22-3.228Q11 5.295 11 5.5a2.5 2.5 0 1 0 4.29-1.746l7.243-2.287l-3.754 11.885A2.5 2.5 0 0 0 15 15.5M9.5 15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class TdesignCheeseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
