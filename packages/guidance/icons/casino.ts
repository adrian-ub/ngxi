import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCasinoIcon],svg[guidance-casino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 7.5C10 4.857 9.5.75 9.5.75V.5h14v.25S23 4.857 23 7.5s.5 6.75.5 6.75v.25H16m-8.5 1v2m-3.5 1v2m7-8v2m2.5-11v2m6-2v2m0 4v2m-19-2v.25s.5 4.107.5 6.75s-.5 6.75-.5 6.75v.25h14v-.25s-.5-4.107-.5-6.75s.5-6.75.5-6.75V9.5z"></svg:path>`,
})
export class GuidanceCasinoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
