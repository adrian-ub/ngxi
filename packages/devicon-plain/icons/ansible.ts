import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainAnsibleIcon],svg[devicon-plain-ansible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 2C29.8 2 2 29.8 2 64s27.8 62 62 62s62-27.8 62-62S98.2 2 64 2m25.4 92.8c-1.2 0-2.1-.5-3.4-1.5L54 67.5L43.3 94.3H34l27.1-65.1c.7-1.7 2.2-2.6 3.9-2.6s3.1.9 3.8 2.6l24.7 59.4c.3.7.4 1.4.4 1.8c.1 2.6-2 4.4-4.5 4.4"></svg:path><svg:path fill="currentColor" d="m65 39.9l16.1 39.6l-24.3-19.1z"></svg:path>`,
})
export class DeviconPlainAnsibleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
