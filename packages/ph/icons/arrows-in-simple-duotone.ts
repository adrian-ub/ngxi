import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleDuotoneIcon],svg[ph-arrows-in-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M213.66 53.66L163.31 104H192a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8V64a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32M112 136H64a8 8 0 0 0 0 16h28.69l-50.35 50.34a8 8 0 0 0 11.32 11.32L104 163.31V192a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhArrowsInSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
