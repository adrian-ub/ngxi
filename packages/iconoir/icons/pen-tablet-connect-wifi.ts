import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPenTabletConnectWifiIcon],svg[iconoir-pen-tablet-connect-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 15.51l.01-.011M12 12c2.5-3 7.5-3 10 0m-8 2c1.5-2 4.5-2 6 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 7V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"></svg:path><svg:path d="M2 12h4m0-9v18"></svg:path></svg:g>`,
})
export class IconoirPenTabletConnectWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
