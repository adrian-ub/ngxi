import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsImportLightIcon],svg[lets-icons-import-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 14l-.354.354l.354.353l.354-.353zm.5-9a.5.5 0 0 0-1 0zM6.646 9.354l5 5l.708-.708l-5-5zm5.708 5l5-5l-.708-.708l-5 5zM12.5 14V5h-1v9z"></svg:path><svg:path stroke="currentColor" d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"></svg:path></svg:g>`,
})
export class LetsIconsImportLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
