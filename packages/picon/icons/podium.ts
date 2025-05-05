import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPodiumIcon],svg[picon-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V3h2V1h4v2h2v3M4.5 4V2H3l1 1v1"></svg:path>`,
})
export class PiconPodiumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
