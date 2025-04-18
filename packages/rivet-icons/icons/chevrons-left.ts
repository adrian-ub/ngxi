import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsChevronsLeftIcon],svg[rivet-icons-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M.586 8L7 14.414L8.414 13l-5-5l5-5L7 1.586z"></svg:path><svg:path d="M6.586 8L13 14.414L14.414 13l-5-5l5-5L13 1.586z"></svg:path></svg:g>`,
})
export class RivetIconsChevronsLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
