import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsStepInto16Icon],svg[qlementine-icons-step-into-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 0a.5.5 0 0 1 .5.5v8.79l3.15-3.15a.5.5 0 0 1 .707.707l-4 4a.5.5 0 0 1-.351.146H7.5a.5.5 0 0 1-.35-.146l-4-4a.5.5 0 0 1 .707-.707l3.15 3.15V.5a.5.5 0 0 1 .5-.5zm0 16a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 7.5 16"></svg:path>`,
})
export class QlementineIconsStepInto16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
