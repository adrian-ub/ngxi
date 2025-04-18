import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAreNaIcon],svg[arcticons-are-na-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.25 35.258V12.742M24 29.629L4.5 18.371m0 11.258L24 18.371m9.75 16.887V12.742m9.75 16.887L24 18.371m0 11.258l19.5-11.258"></svg:path>`,
})
export class ArcticonsAreNaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
