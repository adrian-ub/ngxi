import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDellFillIcon],svg[lets-icons-dell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 1.414l-3.293 3.293l-1.414-1.414L10.586 12L7.293 8.707l1.414-1.414L12 10.586l3.293-3.293l1.414 1.414L13.414 12l3.293 3.293l-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
