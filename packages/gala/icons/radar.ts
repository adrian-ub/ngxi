import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaRadarIcon],svg[gala-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 224.97499,72.065141 A 111.96707,111.96707 0 0 1 207.18133,207.22135 111.96707,111.96707 0 0 1 72.025105,225.01501 111.96707,111.96707 0 0 1 19.856764,99.069471 111.96707,111.96707 0 0 1 128.00866,16.081608"></svg:path><svg:path d="M 128.00866,16.081615 V 112.05339"></svg:path><svg:path d="m 144.00394,128.04868 a 15.995295,15.995295 0 0 1 -15.99528,15.9953 15.995295,15.995295 0 0 1 -15.99529,-15.9953 15.995295,15.995295 0 0 1 15.99529,-15.99529 15.995295,15.995295 0 0 1 15.99528,15.99529 z"></svg:path><svg:path d="M 183.41795,96.058104 A 63.981179,63.981179 0 0 1 173.25016,173.29022 63.981179,63.981179 0 0 1 96.018049,183.45803 63.981179,63.981179 0 0 1 66.207591,111.48915 63.981179,63.981179 0 0 1 128.00866,64.067515"></svg:path></svg:g>`,
})
export class GalaRadarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
