import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixOpenFileIcon],svg[ix-open-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m220.75 85.334l43.511 34.405l-30.377 30.377L205.917 128H85.334v210.774l39.354-125.44H384v-.001h96l-64.75 213.334H42.667V85.334zM422.458 256H156.021l-40.167 128h267.771z"></svg:path><svg:path fill-rule="nonzero" d="M426.667 42.667V192H384v-76.497L307.504 192h-60.34L353.83 85.333h-76.496V42.668z"></svg:path></svg:g>`,
})
export class IxOpenFileIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
