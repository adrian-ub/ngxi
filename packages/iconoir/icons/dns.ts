import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDnsIcon],svg[iconoir-dns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 13v-1c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.251.744 4.329 2 6"></svg:path><svg:path d="M13 2.049s3 3.95 3 9.95v1m-5-10.95s-3 3.95-3 9.95v1M2.63 15.5H4m-1.37-7h18.74M7 22v-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zm6 0v-6l3 6v-6m3 6h2a1.5 1.5 0 0 0 1.5-1.5v0A1.5 1.5 0 0 0 21 19h-.5a1.5 1.5 0 0 1-1.5-1.5v0a1.5 1.5 0 0 1 1.5-1.5H22"></svg:path></svg:g>`,
})
export class IconoirDnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
