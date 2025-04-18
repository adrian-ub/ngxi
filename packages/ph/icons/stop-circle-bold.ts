import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStopCircleBoldIcon],svg[ph-stop-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40-112v56a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhStopCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
