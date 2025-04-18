import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsExportIcon],svg[lets-icons-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 5l-.707-.707l.707-.707l.707.707zm1 9a1 1 0 1 1-2 0zM6.293 9.293l5-5l1.414 1.414l-5 5zm6.414-5l5 5l-1.414 1.414l-5-5zM13 5v9h-2V5z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"></svg:path></svg:g>`,
})
export class LetsIconsExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
