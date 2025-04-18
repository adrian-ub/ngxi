import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRotateLeftIcon],svg[zmdi-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M65 166q-17 24-22 53H0q6-46 35-83zm-22 95q5 28 22 53l-30 30Q6 307 0 261zm22 114l30-31q24 17 53 22v43q-46-5-83-34M191 71q63 8 106 56t43 113t-43 113t-106 56v-43q45-8 75.5-43.5T297 240t-30.5-82.5T191 114v83l-98-95l98-97z"></svg:path>`,
})
export class ZmdiRotateLeftIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
