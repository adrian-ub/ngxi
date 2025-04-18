import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScissorsDuotoneIcon],svg[ph-scissors-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M40.2 95.8a28 28 0 1 1 39.6 0a28 28 0 0 1-39.6 0m0 64.4a28 28 0 1 0 39.6 0a28 28 0 0 0-39.6 0" opacity=".2"></svg:path><svg:path d="M157.73 113.13a8 8 0 0 1 2.09-11.13l67.66-46.3a8 8 0 0 1 9 13.21l-67.67 46.3a7.9 7.9 0 0 1-4.51 1.4a8 8 0 0 1-6.57-3.48m80.87 85.09a8 8 0 0 1-11.12 2.08L136 137.7l-42.51 29.08a36 36 0 1 1-9-13.19L121.83 128l-37.39-25.59a35.86 35.86 0 1 1 9-13.19l143 97.87a8 8 0 0 1 2.16 11.13M80 180a20 20 0 1 0-5.86 14.14A19.85 19.85 0 0 0 80 180m-5.86-89.87a20 20 0 1 0-28.28 0a19.85 19.85 0 0 0 28.28 0"></svg:path></svg:g>`,
})
export class PhScissorsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
