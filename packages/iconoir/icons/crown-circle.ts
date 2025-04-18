import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCrownCircleIcon],svg[iconoir-crown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="m16.8 15.5l1.2-7l-4.2 2.1L12 8.5l-1.8 2.1L6 8.5l1.2 7z"></svg:path></svg:g>`,
})
export class IconoirCrownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
