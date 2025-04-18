import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibZeitIcon],svg[cib-zeit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 30.031H0L16 1.97z"></svg:path>`,
})
export class CibZeitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
