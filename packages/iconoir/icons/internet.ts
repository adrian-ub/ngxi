import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirInternetIcon],svg[iconoir-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"></svg:path><svg:path d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirInternetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
