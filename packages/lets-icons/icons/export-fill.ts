import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsExportFillIcon],svg[lets-icons-export-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="m7 10l5-5m0 0l5 5m-5-5v6.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11 13v3.5a1 1 0 1 0 2 0V13h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsExportFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
