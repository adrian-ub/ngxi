import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBatteryIcon],svg[openmoji-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59.971 42.799a1 1 0 0 1 1-1h4.143v-9.184h-4.143a1 1 0 0 1-1-1m0 0v-7.158H6.662V49.47h53.309v-6.671"></svg:path><svg:path fill="#d0cfce" d="M61.083 32.349a1 1 0 0 1-1-1v-7.16H6.773v25.014h53.313V42.53a1 1 0 0 1 1-1h4.143v-9.18z"></svg:path><svg:path fill="#b1cc33" d="M12.002 45.367h32.239V28.36H12.002z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M61.081 31.348v-7.16a1 1 0 0 0-1-1H6.772a1 1 0 0 0-1 1v25.017a1 1 0 0 0 1 1h53.313a1 1 0 0 0 1-1V42.53h5.143V31.347z"></svg:path><svg:path d="M11 27.36h34.239v19.007H11z"></svg:path></svg:g>`,
})
export class OpenmojiBatteryIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
