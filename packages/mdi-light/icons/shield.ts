import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightShieldIcon],svg[mdi-light-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3.11L19 6.63v5.01c0 4.81-3.22 9.26-7.5 10.4C7.22 20.9 4 16.45 4 11.64V6.63m7.5 16.44c4.9-1.23 8.5-6.13 8.5-11.43V6l-8.5-4L3 6v5.64c0 5.3 3.6 10.2 8.5 11.43"></svg:path>`,
})
export class MdiLightShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
