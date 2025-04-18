import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWifiWarningIcon],svg[iconoir-wifi-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.126 8.324c-.2-.262-.155-.605.086-.79Q6.829 4 11.999 4t9.788 3.535c.252.212.28.558.085.789l-9.455 11.173a.548.548 0 0 1-.836 0z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8v2m0 4.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirWifiWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
