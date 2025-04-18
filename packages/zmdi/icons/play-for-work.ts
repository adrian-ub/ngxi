import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPlayForWorkIcon],svg[zmdi-play-for-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 43h42v119h75l-96 96l-96-96h75zM0 235h43q0 35 25 60t60 25t60-25t25-60h43q0 53-37.5 90.5T128 363t-90.5-37.5T0 235"></svg:path>`,
})
export class ZmdiPlayForWorkIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
