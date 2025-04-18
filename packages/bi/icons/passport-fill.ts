import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biPassportFillIcon],svg[bi-passport-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path><svg:path d="M2 3.252a1.5 1.5 0 0 1 1.232-1.476l8-1.454A1.5 1.5 0 0 1 13 1.797v.47A2 2 0 0 1 14 4v10a2 2 0 0 1-2 2H4a2 2 0 0 1-1.51-.688a1.5 1.5 0 0 1-.49-1.11V3.253ZM5 8a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 4.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5"></svg:path></svg:g>`,
})
export class BiPassportFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
