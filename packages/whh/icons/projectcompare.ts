import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhProjectcompareIcon],svg[whh-projectcompare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 238v402q0 87-43 160.5T672.5 917T512 960v64L320 896l192-128v64q80 0 136-56t56-136V238q-29-17-46.5-46T640 128q0-53 37.5-90.5T768 0t90.5 37.5T896 128q0 35-17.5 64T832 238M768 64q-27 0-45.5 18.5T704 128t18.5 45.5t45 18.5t45.5-19t19-45.5t-18.5-45T768 64M384 192q-80 0-136 56t-56 136v402q29 17 46.5 46t17.5 64q0 53-37.5 90.5T128 1024t-90.5-37.5T0 896q0-35 17.5-64T64 786V384q0-87 43-160.5T223.5 107T384 64V0l192 128l-192 128zM128.5 832Q102 832 83 850.5T64 896t18.5 45.5T128 960t45.5-19t18.5-45.5t-18.5-45t-45-18.5"></svg:path>`,
})
export class WhhProjectcompareIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
