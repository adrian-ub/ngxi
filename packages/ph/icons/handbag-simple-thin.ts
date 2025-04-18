import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHandbagSimpleThinIcon],svg[ph-handbag-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.92 198.59l-14.26-120a12 12 0 0 0-12-10.59H172v-4a44 44 0 0 0-88 0v4H46.33a12 12 0 0 0-12 10.59l-14.26 120a12 12 0 0 0 2.93 9.35a12.1 12.1 0 0 0 9.08 4.06h191.84a12.1 12.1 0 0 0 9.06-4.06a12 12 0 0 0 2.94-9.35M92 64a36 36 0 0 1 72 0v4H92Zm135 138.63a4.08 4.08 0 0 1-3.08 1.37H32.08a4.08 4.08 0 0 1-3.08-1.37a3.9 3.9 0 0 1-1-3.09l14.25-120a4 4 0 0 1 4-3.54h163.42a4 4 0 0 1 4.05 3.54l14.25 120a3.9 3.9 0 0 1-.97 3.09"></svg:path>`,
})
export class PhHandbagSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
