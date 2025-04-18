import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiDomeLightIcon],svg[cbi-dome-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.9c0 2.86 1.5 5.5 4 6.93s5.5 1.43 8 0s4-4.07 4-6.93zm1.27 6.52L3.5 15.19l1.41 1.41l1.77-1.77zm13.46 0l-1.41 1.41l1.77 1.77l1.41-1.41zM11 16.1v3h2v-3z"></svg:path>`,
})
export class CbiDomeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
