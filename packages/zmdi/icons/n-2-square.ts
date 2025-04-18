import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiN2SquareIcon],svg[zmdi-n-2-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 171v-43q0-18-12.5-30.5T213 85h-85v43h85v43h-42q-18 0-30.5 12.5T128 213v86h128v-43h-85v-43h42q18 0 30.5-12.5T256 171"></svg:path>`,
})
export class ZmdiN2SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
