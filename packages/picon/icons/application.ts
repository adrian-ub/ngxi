import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconApplicationIcon],svg[picon-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2V1h1v1m1 0V1h1v1M1 7V3h6v4m1 1V0H0v8"></svg:path>`,
})
export class PiconApplicationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
