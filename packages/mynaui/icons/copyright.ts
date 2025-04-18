import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCopyrightIcon],svg[mynaui-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M14 9c-.48-.6-1.07-1-2-1c-4.172 0-4.172 8 0 8c.93 0 1.52-.4 2-1"></svg:path></svg:g>`,
})
export class MynauiCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
