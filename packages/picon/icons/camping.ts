import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCampingIcon],svg[picon-camping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 2l1-1h1L5 3l3 4v1H0V7l3-4l-1-2h1m1 3L2 7h4"></svg:path>`,
})
export class PiconCampingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
