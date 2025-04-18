import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageBrokenIcon],svg[mdi-image-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v6h-2v2h-2v2h-2v2h-2v2h-2v2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 12v4a2 2 0 0 1-2 2h-4v-2h2v-2h2v-2zm-2-6.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H11v-1h2v-2h2v-2h2V9h2z"></svg:path>`,
})
export class MdiImageBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
