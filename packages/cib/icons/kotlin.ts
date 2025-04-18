import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibKotlinIcon],svg[cib-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.734 32l15.068-15.333L32 32zM0 0h16L0 16.667zm17.865 0L0 18.667V32L32 0z"></svg:path>`,
})
export class CibKotlinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
