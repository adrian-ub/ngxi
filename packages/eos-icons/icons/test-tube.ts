import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsTestTubeIcon],svg[eos-icons-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="12.5" cy="5.5" r=".5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M5 0v2h2v17a5 5 0 0 0 10 0V2h2V0Zm10 2v13h-3a1 1 0 0 0-2 0H9V2Z"></svg:path>`,
})
export class EosIconsTestTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
