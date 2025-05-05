import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPillsIcon],svg[picon-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v.5h2V6M1 0v2h6V0M2 4v.5h2V4m2 4H2V2.5h4"></svg:path>`,
})
export class PiconPillsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
