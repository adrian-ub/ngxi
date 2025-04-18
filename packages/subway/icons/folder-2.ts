import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFolder2Icon],svg[subway-folder-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475.4 137.1c0-8-10.3-18.3-18.3-18.3H274.3l-9.1-36.6c-1.3-7.8-10.3-18.3-18.3-18.3h-128c-7.9 0-17 10.4-18.3 18.3l-9.1 36.6H54.9c-7.9 0-18.3 10.3-18.3 18.3v18.3h438.9v-18.3zM0 192l36.6 237.7c0 8 10.3 18.3 18.3 18.3h402.3c8 0 18.3-10.3 18.3-18.3L512 192zm256 219.4L164.6 320h54.9v-73.1h73.1V320h54.9z"></svg:path>`,
})
export class SubwayFolder2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
