import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainBulmaIcon],svg[devicon-plain-bulma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m59.2 0l40 40l-24 24l32 31.9L59.4 128l-40-39.9l7.7-56z"></svg:path>`,
})
export class DeviconPlainBulmaIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
