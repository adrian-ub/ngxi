import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biKeyFillIcon],svg[bi-key-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8L14 9.5l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class BiKeyFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
