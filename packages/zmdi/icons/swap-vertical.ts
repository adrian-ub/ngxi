import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSwapVerticalIcon],svg[zmdi-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 299h64l-86 85l-85-85h64V149h43zM85 0l86 85h-64v150H64V85H0z"></svg:path>`,
})
export class ZmdiSwapVerticalIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
