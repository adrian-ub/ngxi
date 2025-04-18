import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLineAltIcon],svg[lets-icons-line-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="4" height="4" x="6" y="13" rx="2" transform="rotate(90 6 13)"></svg:rect><svg:rect width="4" height="4" x="17" y="12" rx="2" transform="rotate(-90 17 12)"></svg:rect><svg:path d="m18 11l-1.5 1.5c-1.017 1.017-1.526 1.526-2.137 1.638c-.24.045-.486.045-.726 0c-.611-.112-1.12-.62-2.137-1.638s-1.526-1.526-2.137-1.638a2 2 0 0 0-.726 0c-.611.112-1.12.62-2.137 1.638L5 14"></svg:path></svg:g>`,
})
export class LetsIconsLineAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
