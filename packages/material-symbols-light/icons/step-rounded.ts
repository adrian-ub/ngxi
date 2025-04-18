import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStepRoundedIcon],svg[material-symbols-light-step-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.692 14.904q-1.063 0-1.791-.738q-.728-.737-.728-1.8t.728-1.802t1.791-.737q1.045 0 1.782.737t.738 1.801t-.738 1.801t-1.782.738m-6.978-2.038H3.269q-.213 0-.356-.144q-.144-.143-.144-.356q0-.214.144-.357t.356-.143h8.464L8.973 9.08q-.14-.16-.143-.351q-.003-.192.143-.357q.16-.16.364-.16t.363.16l3.389 3.427q.242.242.242.566t-.242.565l-3.427 3.446q-.147.146-.335.143t-.354-.149q-.16-.146-.153-.344t.153-.363z"></svg:path>`,
})
export class MaterialSymbolsLightStepRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
