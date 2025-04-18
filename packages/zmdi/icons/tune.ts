import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTuneIcon],svg[zmdi-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299h128v42H0zM0 43h213v42H0zm213 341h-42V256h42v43h171v42H213zM85 128h43v128H85v-43H0v-42h85zm299 85H171v-42h213zm-128-85V0h43v43h85v42h-85v43z"></svg:path>`,
})
export class ZmdiTuneIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
