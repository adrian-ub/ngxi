import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsImportDuotoneLineIcon],svg[lets-icons-import-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="14" height="4" x="5" y="15" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path fill="currentColor" d="m12 14l-.424.424l.424.425l.424-.425zm.6-9a.6.6 0 1 0-1.2 0zM6.576 9.424l5 5l.848-.848l-5-5zm5.848 5l5-5l-.848-.848l-5 5zM12.6 14V5h-1.2v9z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"></svg:path></svg:g>`,
})
export class LetsIconsImportDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
