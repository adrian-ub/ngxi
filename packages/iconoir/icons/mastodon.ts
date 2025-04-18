import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMastodonIcon],svg[iconoir-mastodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 13.5V9c0-3 5-3 5 0v3m5 1.5V9c0-3-5-3-5 0v3"></svg:path><svg:path d="M8 17c7.5 1 13 0 13-4V9c0-5.5-4-6.5-6-6.5H9c-3 0-6.067 1-5.863 6.5c.074 1.987.036 4.385.363 7c1 8 10.5 5.5 12 5v-1.5S7.5 21 8 17"></svg:path></svg:g>`,
})
export class IconoirMastodonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
