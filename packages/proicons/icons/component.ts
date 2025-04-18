import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsComponentIcon],svg[proicons-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="5.671" height="5.671" x="7.99" y="17.86" rx="1.5" transform="rotate(-45 7.99 17.86)"></svg:rect><svg:rect width="5.671" height="5.671" x="13.851" y="12" rx="1.5" transform="rotate(-45 13.85 12)"></svg:rect><svg:rect width="5.671" height="5.671" x="2.13" y="12" rx="1.5" transform="rotate(-45 2.13 12)"></svg:rect><svg:rect width="5.671" height="5.671" x="7.99" y="6.14" rx="1.5" transform="rotate(-45 7.99 6.14)"></svg:rect></svg:g>`,
})
export class ProiconsComponentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
