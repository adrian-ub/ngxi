import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosZendFrameworkIcon],svg[logos-zend-framework-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#6FB643"><svg:path d="M120.43 36.02s0-33.818 33.82-33.818h101.456s0 33.819-33.82 33.819zm0 43.213s0-33.819 33.82-33.819h50.727s0 33.82-33.82 33.82zm0 43.213s0-33.818 33.82-33.818h16.907s0 33.818-33.817 33.818z"></svg:path><svg:path d="M109.076 96.055v26.98H.32l70.06-95.568H10.236V.486h113.456L53.956 96.055z"></svg:path></svg:g>`,
})
export class LogosZendFrameworkIcon {
  readonly viewBox = input("0 0 256 124")
  readonly width = input("2.07em")
  readonly height = input("1em")
}
