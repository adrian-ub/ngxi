import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCastIcon],svg[zmdi-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H277v-43h150V43H43v64H0V43q0-18 12.5-30.5T43 0zM0 320q27 0 45.5 18.5T64 384H0zm0-85q62 0 105.5 43.5T149 384h-42q0-44-31.5-75.5T0 277zm0-86q97 0 166 69t69 166h-43q0-80-56-136T0 192z"></svg:path>`,
})
export class ZmdiCastIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
