import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShipIcon],svg[openmoji-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M68 26.087H32.962c-.531 0-.962.391-.962.873v2.4h36z"></svg:path><svg:path fill="#fff" d="M68 25.087H46.742l6.151-13.028c.128-.31.406-.509.712-.509H68"></svg:path><svg:path fill="#3f3f3f" d="M32 29.36s13.404 6.799 15.672 22.248c.064.434.469.767.952.767H68V29.361M63.146 11.55V5.873c0-.482.324-.873.724-.873h2.26c.4 0 .724.391.724.873v5.677z"></svg:path><svg:path fill="#3f3f3f" d="M32 29.36s10.404 6.799 12.672 22.248c.064.434.469.767.952.767H67"></svg:path><svg:path fill="#ea5a47" d="M67 25.625H32.962c-.531 0-.962.391-.962.873v2.4h35"></svg:path><svg:path fill="none" d="M67 26.087H45.742l7.151-14.028c.128-.31.406-.509.712-.509H68m.005 36.503L68 68"></svg:path><svg:path fill="#92d3f5" d="M68 47v21H4V47h1c3 0 9 3 15 3s10-3 16-3s11 3 16 3s7-3 15-3z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M63.146 11.55V5.873c0-.482.324-.873.724-.873h2.26c.4 0 .724.391.724.873v5.677zm-9.423 4.804h10.654m-12.842 4.093h12.842M32 29.36s8.883 5.805 12.022 18.874m9.701-31.88h10.654m-12.842 4.093h12.842M67 25.625H32.962c-.531 0-.962.391-.962.873v2.4h35"></svg:path><svg:path d="M66 25.625H45.742l7.151-13.566c.128-.31.406-.509.712-.509H67m-13.277 4.804h10.654m-12.842 4.093h12.842m-10.654-4.093h10.654m-12.842 4.093h12.842M5 47c3 0 9 3 15 3s10-3 16-3s11 3 16 3s7-3 15-3"></svg:path></svg:g>`,
})
export class OpenmojiShipIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
