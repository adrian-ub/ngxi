import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMaleAltIcon],svg[zmdi-male-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 429V269H0V152q0-18 12.5-30.5T43 109h64q17 0 29.5 12.5T149 152v117h-32v160zM74.5 88q-17.5 0-30-12.5T32 45.5t12.5-30T74.5 3t30 12.5t12.5 30t-12.5 30t-30 12.5"></svg:path>`,
})
export class ZmdiMaleAltIcon {
  readonly viewBox = input("0 0 152 432")
  readonly width = input("0.36em")
  readonly height = input("1em")
}
