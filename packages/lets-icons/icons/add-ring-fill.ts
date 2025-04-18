import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRingFillIcon],svg[lets-icons-add-ring-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8 1v4h-2v-4H7v-2h4V7h2v4h4v2z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsAddRingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
