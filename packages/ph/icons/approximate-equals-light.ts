import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phApproximateEqualsLightIcon],svg[ph-approximate-equals-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.62 154.57a6 6 0 0 1-.79 8.45c-16.87 14-32 19-45.75 19c-18.19 0-34.13-8.66-48.94-16.71c-26-14.12-48.44-26.31-81.31 1a6 6 0 1 1-7.66-9.31c39.13-32.46 68.65-16.42 94.69-2.27s48.44 26.31 81.31-1a6 6 0 0 1 8.45.84M43.83 102.22c32.87-27.27 55.32-15.08 81.31-1c14.81 8 30.75 16.71 48.94 16.71c13.79 0 28.88-5 45.75-19a6 6 0 0 0-7.66-9.24c-32.87 27.27-55.32 15.08-81.31 1S75.3 60.52 36.17 93a6 6 0 0 0 7.66 9.24Z"></svg:path>`,
})
export class PhApproximateEqualsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
