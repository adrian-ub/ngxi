import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiN3SquareIcon],svg[zmdi-n-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 160v-32q0-18-12.5-30.5T213 85h-85v43h85v43h-42v42h42v43h-85v43h85q18 0 30.5-12.5T256 256v-32q0-13-9.5-22.5T224 192q13 0 22.5-9.5T256 160"></svg:path>`,
})
export class ZmdiN3SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
