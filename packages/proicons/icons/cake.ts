import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCakeIcon],svg[proicons-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.25 13.25a2.5 2.5 0 0 1 2.5-2.5h10.5a2.5 2.5 0 0 1 2.5 2.5v8H4.25z"></svg:path><svg:path d="m4.25 14.87l2.249 1.45a3 3 0 0 0 3.252 0l.623-.4a3 3 0 0 1 3.252 0l.623.4a3 3 0 0 0 3.252 0l2.249-1.45m1.5 6.375H2.75M12 2.75l1.414 1.414a2 2 0 1 1-2.828 0zm0 4.83v3.17"></svg:path></svg:g>`,
})
export class ProiconsCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
