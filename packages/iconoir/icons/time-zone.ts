import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTimeZoneIcon],svg[iconoir-time-zone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74m-2.37 9V19h1.5"></svg:path><svg:path d="M19 23a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class IconoirTimeZoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
