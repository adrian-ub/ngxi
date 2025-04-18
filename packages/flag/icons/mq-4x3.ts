import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMq4x3Icon],svg[flag-mq-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#231f1e" d="M0 0h640v480H0z"></svg:path><svg:path fill="#00a650" d="M0 0h640v240H0z"></svg:path><svg:path fill="#ef1923" d="m0 0l320 240L0 480z"></svg:path>`,
})
export class FlagMq4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
