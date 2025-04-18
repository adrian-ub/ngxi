import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNavigateIcon],svg[lets-icons-navigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="m5 20l7-16l7 16l-7-2z"></svg:path><svg:path d="M8.5 10.5L12 13l3.5-2.5"></svg:path></svg:g>`,
})
export class LetsIconsNavigateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
