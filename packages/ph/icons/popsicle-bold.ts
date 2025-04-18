import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPopsicleBoldIcon],svg[ph-popsicle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 4a76.08 76.08 0 0 0-76 76v96a20 20 0 0 0 20 20h24v28a32 32 0 0 0 64 0v-28h24a20 20 0 0 0 20-20V80a76.08 76.08 0 0 0-76-76m8 220a8 8 0 0 1-16 0v-28h16Zm44-52H76V80a52 52 0 0 1 104 0Zm-60-96v68a12 12 0 0 1-24 0V76a12 12 0 0 1 24 0m40 0v68a12 12 0 0 1-24 0V76a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhPopsicleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
