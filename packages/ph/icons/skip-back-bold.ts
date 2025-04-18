import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSkipBackBoldIcon],svg[ph-skip-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.75 30.52a20 20 0 0 0-20.3.53L68 102V40a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-62l113.45 71A20 20 0 0 0 212 208.12V47.88a19.86 19.86 0 0 0-10.25-17.36M188 200.73L71.7 128L188 55.27Z"></svg:path>`,
})
export class PhSkipBackBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
