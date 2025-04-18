import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFlagIcon],svg[mdi-light-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h8.42l1.16 2H19v9h-6l-1.15-2H6v7H5zm13 10V8h-4l-1.15-2H6v7h6.42l1.16 2z"></svg:path>`,
})
export class MdiLightFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
