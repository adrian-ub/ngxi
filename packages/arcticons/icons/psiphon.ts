import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPsiphonIcon],svg[arcticons-psiphon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.591 32.866l13.68-.065l3.697-3.483l2.52-20.052L37.3 5.9l-26.332-.32A10.6 10.6 0 0 0 7.51 9.746l10.057.098l-3.964 31.009a13.3 13.3 0 0 0 5.844 1.568Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.795 11.743l-2.173 14.644l9.976-.107l2.138-14.537Z"></svg:path>`,
})
export class ArcticonsPsiphonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
