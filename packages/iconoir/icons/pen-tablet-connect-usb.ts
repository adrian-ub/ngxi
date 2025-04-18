import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPenTabletConnectUsbIcon],svg[iconoir-pen-tablet-connect-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 7V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"></svg:path><svg:path d="M2 12h4m0-9v18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.25 12H11m7.7 0l-.825 3h-1.65m1.375-3l-1.1-3h-1.925M22 12a1.37 1.37 0 0 0-1.375-1.364c-.76 0-1.375.61-1.375 1.364a1.37 1.37 0 0 0 1.375 1.364c.76 0 1.375-.61 1.375-1.364"></svg:path></svg:g>`,
})
export class IconoirPenTabletConnectUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
