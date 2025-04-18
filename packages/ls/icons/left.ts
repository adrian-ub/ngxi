import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsLeftIcon],svg[ls-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227 357l246 246l-119 114L0 363L362 0l113 112z"></svg:path>`,
})
export class LsLeftIcon {
  readonly viewBox = input("0 0 475 717")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
