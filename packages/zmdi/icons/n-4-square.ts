import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiN4SquareIcon],svg[zmdi-n-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 299V85h-43v86h-42V85h-43v128h85v86z"></svg:path>`,
})
export class ZmdiN4SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
