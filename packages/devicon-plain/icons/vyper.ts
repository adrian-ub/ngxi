import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainVyperIcon],svg[devicon-plain-vyper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.953 9.125L16 35.187L31.047 9.125zm96 0L112 35.187l15.047-26.062zM32 9.675L16.637 36.288L32 62.897l15.363-26.61zm64 0L80.637 36.288L96 62.897l15.363-26.61zM56.318 22.982l-7.683 13.307L64 62.9l15.363-26.613L71.68 22.98zM48 37.389L40.29 50.74L32.636 64L48 90.614L63.363 64zm32 .002L64.637 64L80 90.61L95.363 64zM64 65.1L48.637 91.714L64 118.323l15.363-26.61z"></svg:path>`,
})
export class DeviconPlainVyperIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
