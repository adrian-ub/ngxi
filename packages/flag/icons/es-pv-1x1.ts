import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEsPv1x1Icon],svg[flag-es-pv-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d52b1e" d="M0 0h512v512H0z"></svg:path><svg:path fill="#009b48" d="M0 0h42.5l106.7 106.7L256 213.4L469.5 0H512v42.5L405.3 149.2L298.6 256L512 469.5V512h-42.5L362.8 405.3L256 298.6L42.5 512H0v-42.5l106.7-106.7L213.4 256L0 42.5V21.3z"></svg:path><svg:path fill="#fff" d="M221.9 0h68.2v221.9H512v68.2H290.1V512h-68.2V290.1H0v-68.2h221.9v-111z"></svg:path>`,
})
export class FlagEsPv1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
