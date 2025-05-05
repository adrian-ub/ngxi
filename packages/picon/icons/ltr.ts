import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLtrIcon],svg[picon-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v1H0V6m7-2v1H0V4m4-2v1H0V2m6-2v1H0V0"></svg:path>`,
})
export class PiconLtrIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
