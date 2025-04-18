import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMailAlarmAnalogIcon],svg[ix-mail-alarm-analog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64v298.667H323.66L366.328 320H85.333V128l149.334 129.013L384 128v174.328l42.667-42.667V64zm304 42.667l-112 96l-112-96zm80 320V289.831L289.83 426.667H192v42.667h115.503L384 392.837v76.497h106.667v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxMailAlarmAnalogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
