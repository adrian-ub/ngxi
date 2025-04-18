import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlarmFillIcon],svg[ph-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.66 37.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 11.32m176 20.68l-32-32a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32-11.32M224 136a96 96 0 1 1-96-96a96.11 96.11 0 0 1 96 96m-32 0a8 8 0 0 0-8-8h-48V80a8 8 0 0 0-16 0v56a8 8 0 0 0 8 8h56a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhAlarmFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
