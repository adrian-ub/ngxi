import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignPiFillIcon],svg[iconamoon-sign-pi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-1v5.03c0 .536.434.97.97.97H17a1 1 0 1 1 0 2h-.03A2.97 2.97 0 0 1 14 14.03V9h-4v7a1 1 0 1 1-2 0V9H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonSignPiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
