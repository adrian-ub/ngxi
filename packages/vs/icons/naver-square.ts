import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsNaverSquareIcon],svg[vs-naver-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0Q39 0 19.5 19T0 64v1664q0 26 19.5 45t44.5 19h1664q25 0 44.5-19t19.5-45V64q0-26-19.5-45T1728 0zm337 448h345l300 448V448h345v896h-345L746 896v448H401z"></svg:path>`,
})
export class VsNaverSquareIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
