import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMinusIcon],svg[whh-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 248v128q0 27-19 45.5T960 440H64q-26 0-45-18.5T0 376V248q0-26 18.5-45T64 184h896q26 0 45 19t19 45"></svg:path>`,
})
export class WhhMinusIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
