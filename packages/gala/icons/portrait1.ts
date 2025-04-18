import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaPortrait1Icon],svg[gala-portrait1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 16.056766,240 H 239.94325"></svg:path><svg:path d="m 16.056766,240 c 0,-47.97569 31.983762,-64.0813 31.983762,-64.0813 15.991919,-9.23291 31.9838,0 47.975681,-15.99189"></svg:path><svg:path d="m 96.016209,159.92681 c 0,0 15.991921,15.99189 31.983801,15.99189"></svg:path><svg:path d="m 239.94325,240 c 0,-47.97569 -31.9838,-64.0813 -31.9838,-64.0813 -15.99188,-9.23291 -31.98376,0 -47.97564,-15.99189"></svg:path><svg:path d="m 159.98381,159.92681 c 0,0 -15.99192,15.99189 -31.9838,15.99189"></svg:path><svg:path d="m 128.00001,15.99977 c 31.9838,0 47.97568,15.991881 47.97568,63.967561 0,39.979759 -31.9838,63.967599 -47.97568,63.967599"></svg:path><svg:path d="m 128.00001,15.99977 c -31.983801,0 -47.975682,15.991881 -47.975682,63.967561 0,39.979759 31.983802,63.967599 47.975682,63.967599"></svg:path><svg:path d="m 159.98381,159.92681 -7.41232,-27.66304"></svg:path><svg:path d="m 96.016209,159.92681 7.412321,-27.66304"></svg:path></svg:g>`,
})
export class GalaPortrait1Icon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
