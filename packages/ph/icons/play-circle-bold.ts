import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlayCircleBoldIcon],svg[ph-play-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 128a12 12 0 0 1-5.17 9.87l-52 36A12 12 0 0 1 100 164V92a12 12 0 0 1 18.83-9.87l52 36A12 12 0 0 1 176 128m60 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhPlayCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
