import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHealthyRecognitionIcon],svg[icon-park-solid-healthy-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 33v6a3 3 0 0 0 3 3h6m18 0h6a3 3 0 0 0 3-3v-6m0-18V9a3 3 0 0 0-3-3h-6M6 15V9a3 3 0 0 1 3-3h6"></svg:path><svg:path fill="currentColor" d="M34 24L24 34L14 24c-1-1-1.5-3 0-5s4.5-2 6-1s2 2 4 2s2.5-1 4-2s4.5-1 6 1s1 4 0 5"></svg:path></svg:g>`,
})
export class IconParkSolidHealthyRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
