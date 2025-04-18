import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDangerIcon],svg[whh-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m882 566l142 160l-174 47l46 122l-165-46l-59 174l-158-105l-74 105l-67-128H192l16-116H52l73-173L0 536l95-76L1 324l191-47V128l87 57L324 0l161 135L633 0l32 115l115-64l28 170l152-29l-68 154l131 93zM576 288q0-14-9.5-23t-22.5-9h-64q-13 0-22.5 9t-9.5 23v256q0 13 9.5 22.5T480 576h64q13 0 22.5-9.5T576 544zm0 384q0-14-9.5-23t-22.5-9h-64q-13 0-22.5 9t-9.5 23v63q0 14 9.5 23t22.5 9h64q13 0 22.5-9t9.5-23z"></svg:path>`,
})
export class WhhDangerIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
