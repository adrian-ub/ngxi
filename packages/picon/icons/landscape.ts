import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLandscapeIcon],svg[picon-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3H2V2h1m0 3l3-3l2 4H0l2-2"></svg:path>`,
})
export class PiconLandscapeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
