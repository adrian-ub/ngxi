import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAnchorIcon],svg[proicons-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 12a9.25 9.25 0 1 0 18.5 0M12 21.25V7.75"></svg:path><svg:circle cx="12" cy="5.25" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M2.75 12h4m10.5 0h4"></svg:path></svg:g>`,
})
export class ProiconsAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
