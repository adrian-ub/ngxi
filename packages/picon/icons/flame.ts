import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFlameIcon],svg[picon-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5L2 4C0 9 9 8 5 2m1-2c5 14-12 7-3 0v3"></svg:path>`,
})
export class PiconFlameIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
