import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCPlusPlusIcon],svg[gg-c-plus-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.207 16.278a6 6 0 1 1 .071-8.485l1.414-1.414a8 8 0 1 0-.071 11.314z"></svg:path><svg:path d="M15 9h-2v2h-2v2h2v2h2v-2h2v-2h-2zm5 0h2v2h2v2h-2v2h-2v-2h-2v-2h2z"></svg:path></svg:g>`,
})
export class GgCPlusPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
