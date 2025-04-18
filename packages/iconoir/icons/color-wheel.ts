import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirColorWheelIcon],svg[iconoir-color-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-14v6m0 8v6M2 12h6m8 0h6M4.929 4.929L9.172 9.17m5.656 5.659l4.243 4.242m-14.142 0l4.243-4.242m5.656-5.658l4.243-4.242"></svg:path></svg:g>`,
})
export class IconoirColorWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
