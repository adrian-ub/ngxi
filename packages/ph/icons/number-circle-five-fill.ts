import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFiveFillIcon],svg[ph-number-circle-five-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 88a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16h-33.22l-4.19 25.14A38.8 38.8 0 0 1 124 112"></svg:path>`,
})
export class PhNumberCircleFiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
