import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNatsIconIcon],svg[logos-nats-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#34A574" d="M128 0h128v103.768H128z"></svg:path><svg:path fill="#27AAE1" d="M0 0h128v103.768H0z"></svg:path><svg:path fill="#8DC63F" d="M256 103.863v103.769h-84.193v57.395l-62.622-57.205l18.815-.76V103.863z"></svg:path><svg:path fill="#375C93" d="M128 103.863v120.678l-18.815-16.719H0V103.863z"></svg:path><svg:path fill="#FFF" d="M181.024 134.177V48.273h30.599v111.086H165.25l-93.6-87.424v87.519H40.956V48.273h47.988z"></svg:path>`,
})
export class LogosNatsIconIcon {
  readonly viewBox = input("0 0 256 266")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
