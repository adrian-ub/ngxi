import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsNaverIcon],svg[vs-naver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1623h624V811l543 812h625V0h-625v811L624 0z"></svg:path>`,
})
export class VsNaverIcon {
  readonly viewBox = input("0 0 1792 1632")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
