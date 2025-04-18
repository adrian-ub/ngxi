import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFileCircleMinusIcon],svg[fa6-solid-file-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v38.6c-73.9 20.9-128 88.8-128 169.4c0 59.1 29.1 111.3 73.7 143.3c-3.2.5-6.4.7-9.7.7H64c-35.3 0-64-28.7-64-64zm384 64H256V0zm-96 240a144 144 0 1 1 288 0a144 144 0 1 1-288 0m224 0c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16"></svg:path>`,
})
export class Fa6SolidFileCircleMinusIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
