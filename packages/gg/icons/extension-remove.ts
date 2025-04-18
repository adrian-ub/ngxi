import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggExtensionRemoveIcon],svg[gg-extension-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 11V5H4v14h14v-8zM6 7h4v4H6zm4 6v4H6v-4zm6 0v4h-4v-4z" clip-rule="evenodd"></svg:path><svg:path d="M20 7h-6v2h6z"></svg:path></svg:g>`,
})
export class GgExtensionRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
