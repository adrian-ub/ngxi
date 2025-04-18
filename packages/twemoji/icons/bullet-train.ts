import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBulletTrainIcon],svg[twemoji-bullet-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#939598" d="M0 34h36v2H0z"></svg:path><svg:path fill="#D1D3D4" d="M3 35h33V6H21c-4 0-5 2-5 2l-4 6S0 19 0 24c0 4 6 6 6 6z"></svg:path><svg:path fill="#231F20" d="m14 35l2-3h20v3z"></svg:path><svg:path fill="#3B88C3" d="M0 23.999c0 4 6 6 6 6V17.125C3 19 0 21.499 0 23.999M6 30v-.001z"></svg:path><svg:path fill="#269" d="m6 30l-3 5h33v-5z"></svg:path><svg:path fill="#3B88C3" d="m20 30l4-6h12v6z"></svg:path><svg:path fill="#55ACEE" d="M26 8H16l-4 6h-.001h10.843c.477 0 1.108-.448 1.412-1l2.197-4c.303-.552.102-1-.451-1"></svg:path><svg:path fill="#3B88C3" d="m25.902 10l.549-1c.303-.552.102-1-.451-1H16l-1.333 2z"></svg:path>`,
})
export class TwemojiBulletTrainIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
