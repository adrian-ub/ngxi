import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneMuseumIcon],svg[ic-twotone-museum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20h12V9H6zm2-9h2l2 3l2-3h2v7h-2v-4l-2 3l-2-3v4H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M22 11V9L12 2L2 9v2h2v9H2v2h20v-2h-2v-9zm-4 9H6V9h12z"></svg:path><svg:path fill="currentColor" d="m10 14l2 3l2-3v4h2v-7h-2l-2 3l-2-3H8v7h2z"></svg:path>`,
})
export class IcTwotoneMuseumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
