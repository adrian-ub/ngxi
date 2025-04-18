import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCropIcon],svg[ls-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M591 526h126v65H591v126h-66V591H126V192H0v-66h126V0h65v126h374l74-73l35 35l-83 83zm-400-26l309-308H191zm334-263L237 526h288z"></svg:path>`,
})
export class LsCropIcon {
  readonly viewBox = input("0 0 717 717")
  readonly width = input("1em")
  readonly height = input("1em")
}
