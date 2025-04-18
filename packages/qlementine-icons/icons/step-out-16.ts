import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsStepOut16Icon],svg[qlementine-icons-step-out-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10.5a.5.5 0 0 0 1 0V1.71l3.15 3.15a.5.5 0 0 0 .707-.707l-4-4a.5.5 0 0 0-.35-.147h-.006a.5.5 0 0 0-.351.146l-4 4a.5.5 0 0 0 .707.707l3.15-3.15v8.79zm.5 5.5a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 7.5 16"></svg:path>`,
})
export class QlementineIconsStepOut16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
