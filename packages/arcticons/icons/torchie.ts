import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTorchieIcon],svg[arcticons-torchie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.54 11.28L24 5.5l4.44 5.78m0 25.44l-4.46 5.78l-4.44-5.78m22.44-12.71h-7.41m-21.14 0H6.02m10.5 7.47l-5.23 5.24m5.23-20.19l-5.24-5.24m20.18 5.24l5.24-5.24m-5.23 20.19l5.23 5.24"></svg:path><svg:circle cx="24" cy="24.01" r="7.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTorchieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
