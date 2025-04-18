import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoBoldIcon],svg[ph-dice-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-84-88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
