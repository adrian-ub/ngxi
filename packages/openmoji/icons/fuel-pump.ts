import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFuelPumpIcon],svg[openmoji-fuel-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#d0cfce" d="M15 16h20v40H15z"></svg:path><svg:path fill="#ea5a47" d="M35 46V36h28v10"></svg:path><svg:path fill="#d0cfce" d="M63 46v10H35V46"></svg:path><svg:path fill="#92d3f5" d="M20 21h9v5h-9z"></svg:path><svg:path fill="#d0cfce" d="M35 18h17v10H35z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M15 16h20v40H15zm20 30V36h28v10m0 0v10H35V46"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M20 21h9v5h-9zm15-3h17v10H35zm6 3h5m-5 3h5M10 34v-4l-1-2"></svg:path><svg:path d="M8 37v-3.04c0-.528.45-.96 1-.96h2c.55 0 1 .432 1 .96V37m1 1c0 .55-.337 1-.75 1h-4.5c-.412 0-.75-.45-.75-1s.338-1 .75-1h4.5c.412 0 .75.45.75 1"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M12 52c-4-6-1-7-2-14"></svg:path>`,
})
export class OpenmojiFuelPumpIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
