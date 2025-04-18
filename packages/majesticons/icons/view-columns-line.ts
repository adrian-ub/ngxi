import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewColumnsLineIcon],svg[majesticons-view-columns-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4M9 6v12M9 6h6M9 18h6m0 0h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4m0 12V6"></svg:path>`,
})
export class MajesticonsViewColumnsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
