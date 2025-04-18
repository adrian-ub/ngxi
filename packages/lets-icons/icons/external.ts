import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsExternalIcon],svg[lets-icons-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M15 3.5h5.5m0 0V9m0-5.5l-8 8"></svg:path><svg:path stroke-linecap="round" d="M11.5 5.5h-4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4"></svg:path></svg:g>`,
})
export class LetsIconsExternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
