import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biYinYangIcon],svg[bi-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0a1.167 1.167 0 0 1 2.334 0"></svg:path><svg:path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 0 1 7-7a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 0 0 7a7 7 0 0 1-7-7m7 4.667a1.167 1.167 0 1 1 0-2.334a1.167 1.167 0 0 1 0 2.334"></svg:path></svg:g>`,
})
export class BiYinYangIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
