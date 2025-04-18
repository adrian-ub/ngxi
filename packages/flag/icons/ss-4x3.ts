import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSs4x3Icon],svg[flag-ss-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#078930" d="M0 336h640v144H0z"></svg:path><svg:path fill="#fff" d="M0 144h640v192H0z"></svg:path><svg:path fill="#000001" d="M0 0h640v144H0z"></svg:path><svg:path fill="#da121a" d="M0 168h640v144H0z"></svg:path><svg:path fill="#0f47af" d="m0 0l415.7 240L0 480z"></svg:path><svg:path fill="#fcdd09" d="M200.7 194.8L61.7 240l139 45.1L114.9 167v146z"></svg:path>`,
})
export class FlagSs4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
