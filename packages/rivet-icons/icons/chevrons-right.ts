import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsChevronsRightIcon],svg[rivet-icons-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.414 8L3 1.586L1.586 3l5 5l-5 5L3 14.414z"></svg:path><svg:path d="M15.414 8L9 1.586L7.586 3l5 5l-5 5L9 14.414z"></svg:path></svg:g>`,
})
export class RivetIconsChevronsRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
