import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggExtensionIcon],svg[gg-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 3h8v8h-8zm2 2h4v4h-4z"></svg:path><svg:path d="M17 21v-8h-6V7H3v14zM9 9H5v4h4zM5 19v-4h4v4zm6 0v-4h4v4z"></svg:path></svg:g>`,
})
export class GgExtensionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
