import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackCfIcon],svg[flagpack-cf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#3D58DB" d="M0 0h32v6H0z"></svg:path><svg:path fill="#F7FCFF" d="M0 6h32v6H0z"></svg:path><svg:path fill="#73BE4A" d="M0 12h32v6H0z"></svg:path><svg:path fill="#FFD018" d="M0 18h32v6H0z"></svg:path><svg:path fill="#FECA00" d="M4.53 5.416L2.104 7.098l.775-2.88l-1.78-1.84l2.41-.1L4.53-.57l1.019 2.848h2.406l-1.776 1.94l.89 2.71z"></svg:path><svg:path fill="#E11C1B" d="M12 0h8v24h-8z"></svg:path></svg:g>`,
})
export class FlagpackCfIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
