import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMediumIcon],svg[picon-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6C-.5 6-.5 2 2 2s2.5 4 0 4m3.5 0C4 6 4 2 5.5 2s1.5 4 0 4m2 0C7 6 7 2 7.5 2s.5 4 0 4"></svg:path>`,
})
export class PiconMediumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
