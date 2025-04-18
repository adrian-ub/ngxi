import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImoBetaIcon],svg[arcticons-imo-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.327 33.43A21.4 21.4 0 0 0 45.5 24c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24c0 5.49 2.075 10.484 5.462 14.283c-.971 2.801-2.994 3.675-5.462 4.567c2.26 2.182 6.668 2.76 10.623-.327A21.37 21.37 0 0 0 24 45.5a21.4 21.4 0 0 0 9.436-2.176"></svg:path><svg:rect width="5.818" height="7.709" x="31.64" y="19.888" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.909" ry="2.909"></svg:rect><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M16.918 22.797a2.91 2.91 0 0 1 2.909-2.91h0a2.91 2.91 0 0 1 2.909 2.91v4.8m-5.818-7.709v7.709"></svg:path><svg:path d="M22.736 22.797a2.91 2.91 0 0 1 2.909-2.91h0a2.91 2.91 0 0 1 2.909 2.91v4.8"></svg:path></svg:g><svg:circle cx="13.56" cy="17.179" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.56 19.888v7.709"></svg:path><svg:circle cx="38.5" cy="38.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.536 38.5a2 2 0 1 1 0 4h-3.3v-8h3.3a2 2 0 1 1 0 4m0 0h-3.3"></svg:path>`,
})
export class ArcticonsImoBetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
