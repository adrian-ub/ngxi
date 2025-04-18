import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiN6SquareIcon],svg[zmdi-n-6-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 256v-43h42v43zM341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 128V85h-85q-18 0-30.5 12.5T128 128v128q0 18 12.5 30.5T171 299h42q18 0 30.5-12.5T256 256v-43q0-17-12.5-29.5T213 171h-42v-43z"></svg:path>`,
})
export class ZmdiN6SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
