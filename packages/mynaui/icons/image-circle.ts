import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiImageCircleIcon],svg[mynaui-image-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M7 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m13.718 1.08c-6.38-.75-11.85 3.906-11.716 10.144"></svg:path><svg:path d="M3.2 13.04c2.7-.294 5.107 1.036 6.424 3.126"></svg:path></svg:g>`,
})
export class MynauiImageCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
