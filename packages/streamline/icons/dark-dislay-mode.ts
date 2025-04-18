import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDarkDislayModeIcon],svg[streamline-dark-dislay-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M9.46 4.522a2.46 2.46 0 1 0 0 4.919c.25 0 .441.3.258.47a3.996 3.996 0 1 1 0-5.86c.183.17-.008.471-.258.471"></svg:path></svg:g>`,
})
export class StreamlineDarkDislayModeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
