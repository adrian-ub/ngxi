import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPsupIcon],svg[whh-psup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M338 973L75 677q-24-23-49.5-72T0 526V150Q0 88 44 44T149 0h598q62 0 105.5 44T896 150v376q0 31-25 82.5T822 677L558 973q-47 51-110 51t-110-51"></svg:path>`,
})
export class WhhPsupIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
