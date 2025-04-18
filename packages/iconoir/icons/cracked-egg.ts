import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCrackedEggIcon],svg[iconoir-cracked-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22a8 8 0 0 0 8-8c0-4.418-3.582-12-8-12S4 9.582 4 14a8 8 0 0 0 8 8"></svg:path><svg:path d="M9.5 3.5L12 8l-2.5 3l2.5 3.5"></svg:path></svg:g>`,
})
export class IconoirCrackedEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
