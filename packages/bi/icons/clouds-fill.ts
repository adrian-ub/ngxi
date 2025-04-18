import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biCloudsFillIcon],svg[bi-clouds-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5"></svg:path><svg:path d="M14.544 9.772a3.5 3.5 0 0 0-2.225-1.676a5.5 5.5 0 0 0-6.337-4.002a4.002 4.002 0 0 1 7.392.91a2.5 2.5 0 0 1 1.17 4.769z"></svg:path></svg:g>`,
})
export class BiCloudsFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
