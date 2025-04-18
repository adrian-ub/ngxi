import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biCompassIcon],svg[bi-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path><svg:path d="m6.94 7.44l4.95-2.83l-2.83 4.95l-4.949 2.83l2.828-4.95z"></svg:path></svg:g>`,
})
export class BiCompassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
