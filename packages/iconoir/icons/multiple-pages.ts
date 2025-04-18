import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMultiplePagesIcon],svg[iconoir-multiple-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 18h7m-7-4h1m-1-4h3M7 2h9.5L21 6.5V19"></svg:path><svg:path d="M3 20.5v-14A1.5 1.5 0 0 1 4.5 5h9.752a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 18 8.75V20.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 3 20.5"></svg:path><svg:path d="M14 5v3.4a.6.6 0 0 0 .6.6H18"></svg:path></svg:g>`,
})
export class IconoirMultiplePagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
