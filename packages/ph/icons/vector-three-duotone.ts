import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeDuotoneIcon],svg[ph-vector-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 40v96l-67.31 67.31a16 16 0 0 1-11.32 4.69H48V102.63a16 16 0 0 1 4.69-11.32L120 24h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m237.66 141.66l-32 32a8 8 0 0 1-11.32-11.32L212.69 144h-89.38l-56 56H96a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l56-56V43.31L93.66 61.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L128 43.31V128h84.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path></svg:g>`,
})
export class PhVectorThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
