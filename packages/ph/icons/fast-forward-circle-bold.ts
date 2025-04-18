import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleBoldIcon],svg[ph-fast-forward-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 128a12 12 0 0 1-4.5 9.37l-40 32A12 12 0 0 1 132 160v-19.83l-36.5 29.2A12 12 0 0 1 76 160V96a12 12 0 0 1 19.5-9.37l36.5 29.2V96a12 12 0 0 1 19.5-9.37l40 32A12 12 0 0 1 196 128m40 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhFastForwardCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
