import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStandardDefinitionIcon],svg[mdi-standard-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3zm3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6zM7 7h4v2H7v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5v-2h4v-2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiStandardDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
