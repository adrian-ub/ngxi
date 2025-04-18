import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPinterestIcon],svg[iconoir-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 14.5c-3-4.5 1.462-8 4.5-8S18 8.154 18 12c0 3.038-2 5-4 5s-3-2-2.5-5m.5-2L9 21.5"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirPinterestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
