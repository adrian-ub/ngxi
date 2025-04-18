import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCigaretteSlashIcon],svg[iconoir-cigarette-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 15v3m0-7c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V2m11 9c0-6-4-6-4-6s4 1 4-3m0 13v3"></svg:path><svg:path d="M2.6 18H18l-3-3H2.6a.6.6 0 0 0-.6.6v1.8a.6.6 0 0 0 .6.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3 3l18 18"></svg:path></svg:g>`,
})
export class IconoirCigaretteSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
