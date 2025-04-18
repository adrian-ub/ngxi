import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiVignetteIcon],svg[zmdi-vignette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM234.5 320q70.5 0 120.5-37.5t50-90.5t-50-90.5T234.5 64T114 101.5T64 192t50 90.5T234.5 320"></svg:path>`,
})
export class ZmdiVignetteIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
