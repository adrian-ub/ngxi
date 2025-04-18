import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherLink2Icon],svg[feather-link-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7h3a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5a5 5 0 0 1 5-5h3m-1 5h8"></svg:path>`,
})
export class FeatherLink2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
