import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiTramcarIcon],svg[fxemoji-tramcar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M176 424c0 26.5-21.5 48-48 48s-48-21.5-48-48m256 0c0 26.5 21.5 48 48 48s48-21.5 48-48" class="st0"></svg:path><svg:path d="M0 24h512v8H0z" class="st1"></svg:path><svg:path d="m312 27.4l-11-11V16h-90v.4l-11 11L244.6 72L232 84.6L243.4 96L256 83.4L268.6 96L280 84.6L267.4 72zM227.4 32h57.1L256 60.6z" class="st2"></svg:path><svg:path d="M444.6 88L437 64.7V64H76v.3L67.4 88H0v312h512V88z" class="st3"></svg:path><svg:path d="M0 96h512v224H0z" class="st4"></svg:path><svg:path d="M512 496H0v-32h512zm0-96H0v32h105.4c3.3 9.3 12.2 16 22.6 16s19.3-6.7 22.6-16h210.7c3.3 9.3 12.2 16 22.6 16s19.3-6.7 22.6-16H512zM368 152H260v144h108zm8 0v144h108V152zm-240 0H28v144h108zm8 0v144h108V152z" class="st2"></svg:path>`,
})
export class FxemojiTramcarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
