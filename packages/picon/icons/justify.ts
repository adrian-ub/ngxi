import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJustifyIcon],svg[picon-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v1H0V6m8-2v1H0V4m8-2v1H0V2m8-2v1H0V0"></svg:path>`,
})
export class PiconJustifyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
