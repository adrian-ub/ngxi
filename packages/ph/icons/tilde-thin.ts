import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTildeThinIcon],svg[ph-tilde-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.12 128.09c-13.82 17.18-27.26 26.24-41.11 27.7a39 39 0 0 1-4 .21c-18 0-33.48-12.64-48.53-24.9c-15.57-12.68-30.29-24.66-46.64-22.93c-11.62 1.22-23.3 9.32-35.71 24.76a4 4 0 0 1-6.24-5c13.81-17.2 27.25-26.26 41.11-27.72c19.67-2.08 36.38 11.53 52.54 24.69c15.57 12.68 30.29 24.66 46.64 22.93c11.62-1.22 23.3-9.32 35.71-24.76a4 4 0 1 1 6.24 5Z"></svg:path>`,
})
export class PhTildeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
