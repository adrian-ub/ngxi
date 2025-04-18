import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsZendIcon],svg[simple-icons-zend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 .467L9.01 20.217h11.53a3.46 3.46 0 0 0 3.46-3.46zM3.459 3.783C1.585 3.783 0 5.153 0 7.1v16.433l15.063-19.75z"></svg:path>`,
})
export class SimpleIconsZendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
