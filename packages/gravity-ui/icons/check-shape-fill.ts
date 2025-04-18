import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCheckShapeFillIcon],svg[gravity-ui-check-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.475 13.782l6.135-7.67a1.5 1.5 0 0 0-.174-2.058L12.2 2.068a1.5 1.5 0 0 0-2.184.204L6.75 6.5L5.122 5.02a1.5 1.5 0 0 0-2.13.114L1.01 7.364a1.5 1.5 0 0 0 .139 2.13l5.173 4.484a1.5 1.5 0 0 0 2.154-.196"></svg:path>`,
})
export class GravityUiCheckShapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
