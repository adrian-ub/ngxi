import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMq1x1Icon],svg[flag-mq-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#231f1e" d="M0 0h512v512H0z"></svg:path><svg:path fill="#00a650" d="M0 0h512v256H0z"></svg:path><svg:path fill="#ef1923" d="M256 256L0 512V0z"></svg:path>`,
})
export class FlagMq1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
