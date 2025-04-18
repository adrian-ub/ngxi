import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleBoldIcon],svg[ph-megaphone-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.7 82.84l-175.94-54l-.16-.05A20 20 0 0 0 28 48v144a20 20 0 0 0 19.94 20a20.4 20.4 0 0 0 5.66-.81h.16l78.24-24V196a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-30.94l25.7-7.89A20.1 20.1 0 0 0 244 138v-36a20.1 20.1 0 0 0-14.3-19.16M52 186.58V53.43L132 78v84ZM180 192h-24v-12.22l24-7.36Zm40-56.95l-64 19.63V85.33L220 105Z"></svg:path>`,
})
export class PhMegaphoneSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
