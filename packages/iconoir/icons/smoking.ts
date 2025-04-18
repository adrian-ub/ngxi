import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSmokingIcon],svg[iconoir-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 19v3m0-6c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V8.5A2.5 2.5 0 0 1 13.5 6v0h.5m8 10c0-4.5-2-5.5-4-6c2-.5 4-1 4-4s-2.5-4-4-4m4 17v3"></svg:path><svg:rect width="12" height="3" x="2" y="19" rx=".6"></svg:rect></svg:g>`,
})
export class IconoirSmokingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
