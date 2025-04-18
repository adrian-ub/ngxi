import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMailOutIcon],svg[iconoir-mail-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m5 9l4.5 3L14 9"></svg:path><svg:path d="M17 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2"></svg:path><svg:path stroke-linejoin="round" d="M17 14h6m0 0l-3-3m3 3l-3 3"></svg:path></svg:g>`,
})
export class IconoirMailOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
