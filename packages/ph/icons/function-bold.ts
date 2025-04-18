import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunctionBoldIcon],svg[ph-function-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 40a12 12 0 0 1-12 12h-29.29A20 20 0 0 0 151 68.42L142.38 116H184a12 12 0 0 1 0 24h-46l-9.44 51.87A44 44 0 0 1 85.29 228H56a12 12 0 0 1 0-24h29.29A20 20 0 0 0 105 187.58l8.62-47.58H72a12 12 0 0 1 0-24h46l9.44-51.87A44 44 0 0 1 170.71 28H200a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFunctionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
