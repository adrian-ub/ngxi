import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrafficIncidentIcon],svg[hugeicons-traffic-incident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 1.998h18M10.707 21.46l.057-1.104m0 0c.297.077.816.214 1.084.355c2.337 1.24 2.876 1.685 3.812.9l3.948-3.9c.796-.925.356-1.468-.86-3.815a6 6 0 0 1-.38-1.051m-7.604 7.511c-1.129-.292-2.152-.202-2.845-.734c-.114-.087-1.211-1.222-2.018-2.036c-.606-.611.005-1.178.535-1.795c.337-.393.638-.822 1.003-1.189a321 321 0 0 1 5.403-5.339c.394-.38.86-.696 1.28-1.047c.477-.397.984-.8 1.56-.291c.86.76 1.932 1.922 2.018 2.036c.524.698.388 1.753.669 2.884m-7.605 7.511l7.605-7.511m0 0l1.116-.137m-11.46 6.99l.963-1.232m2.006-3.963l1.725-1.613m3.787-1.923l1.413-.61m-5.225-.992l-.839-.879a.997.997 0 0 1 .036-1.413l.801-.76a1 1 0 0 1 1.394.016l1.443 1.433M7.404 14.72l-.87-.849a1 1 0 0 0-1.415.017l-.771.79a.997.997 0 0 0-.002 1.392l1.417 1.46" color="currentColor"></svg:path>`,
})
export class HugeiconsTrafficIncidentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
