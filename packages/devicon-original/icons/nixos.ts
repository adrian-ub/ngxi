import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalNixosIcon],svg[devicon-original-nixos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7EBAE4" fill-rule="evenodd" d="M50.732 43.771L20.525 96.428l-7.052-12.033l8.14-14.103l-16.167-.042L2 64.237l3.519-6.15l23.013.073l8.27-14.352l13.93-.037zm2.318 42.094l60.409.003l-6.827 12.164l-16.205-.045l8.047 14.115l-3.45 6.01l-7.05.008l-11.445-20.097l-16.483-.034l-6.996-12.124zm35.16-23.074l-30.202-52.66L71.888 10l8.063 14.148l8.12-14.072l6.897.002l3.532 6.143l-11.57 20.024l8.213 14.386l-6.933 12.16z" clip-rule="evenodd"></svg:path><svg:path fill="#5277C3" fill-rule="evenodd" d="m39.831 65.463l30.202 52.66l-13.88.131l-8.063-14.148l-8.12 14.072l-6.897-.002l-3.532-6.143l11.57-20.024l-8.213-14.386l6.933-12.16zm35.08-23.207l-60.409-.003L21.33 30.09l16.204.045l-8.047-14.115l3.45-6.01l7.051-.01l11.444 20.097l16.484.034l6.996 12.124zm2.357 42.216l30.207-52.658l7.052 12.034l-8.141 14.102l16.168.043L126 64.006l-3.519 6.15l-23.013-.073l-8.27 14.352l-13.93.037z" clip-rule="evenodd"></svg:path>`,
})
export class DeviconOriginalNixosIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
