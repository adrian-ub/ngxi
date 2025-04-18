import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggExtensionAddIcon],svg[gg-extension-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 4h2v2h2v2h-2v2h-2V8h-2V6h2z"></svg:path><svg:path fill-rule="evenodd" d="M12 12V6H4v14h14v-8zM6 8h4v4H6zm4 6v4H6v-4zm6 0v4h-4v-4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgExtensionAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
