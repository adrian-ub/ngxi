import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHandContactlessIcon],svg[iconoir-hand-contactless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2 11l2.807-3.157A4 4 0 0 1 7.797 6.5H8m-6 13h5.5l4-3s.81-.547 2-1.5c2.5-2 0-5.166-2.5-3.5C8.964 12.857 7 14 7 14"></svg:path><svg:path d="M8 13.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18.25 12c.5-1.5.5-2.5 0-4M16 9c.227.5.227 1.5 0 2"></svg:path></svg:g>`,
})
export class IconoirHandContactlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
