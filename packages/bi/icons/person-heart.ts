import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biPersonHeartIcon],svg[bi-person-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1s-1-4-6-4s-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277c-4.854-3.207-1.387-5.702 0-4.276Z"></svg:path>`,
})
export class BiPersonHeartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
