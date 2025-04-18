import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGeneratorPortableIcon],svg[mdi-generator-portable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12h2v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h10v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h2V8a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2zm7 8V8h6v2zm0 4v-2h6v2zM7 4h10v2H7zm0 4v4h2l-3 6v-4H4z"></svg:path>`,
})
export class MdiGeneratorPortableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
