import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNintendoSwitchIcon],svg[iconoir-nintendo-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 17V7a4 4 0 0 1 4-4h3.9a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H6a4 4 0 0 1-4-4Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m11 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M22 17V7a4 4 0 0 0-4-4h-3.9a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H18a4 4 0 0 0 4-4Z"></svg:path></svg:g>`,
})
export class IconoirNintendoSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
