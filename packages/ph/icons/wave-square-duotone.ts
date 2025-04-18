import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareDuotoneIcon],svg[ph-wave-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 72v56H24V72Zm0 56v56h104v-56Z" opacity=".2"></svg:path><svg:path d="M240 128v56a8 8 0 0 1-8 8H128a8 8 0 0 1-8-8V80H32v48a8 8 0 0 1-16 0V72a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8v104h88v-48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhWaveSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
