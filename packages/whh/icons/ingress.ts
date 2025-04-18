import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhIngressIcon],svg[whh-ingress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 1024L0 768V256L480 0l480 256v512zm416-736L512 81v175h-64V81L64 288v397l146-85l28 50l-161 93l403 217l404-217l-162-93l29-50l145 85zm-768 32h704L480 896zm352 174l174-110H307zm-189-51l157 270V544zm221 101v169l158-270z"></svg:path>`,
})
export class WhhIngressIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
