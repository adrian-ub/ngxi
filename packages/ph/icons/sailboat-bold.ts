import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSailboatBoldIcon],svg[ph-sailboat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.82 170.8A12 12 0 0 0 240 164h-92v-16h68a12 12 0 0 0 8.88-20.07L148 43.36V12a12 12 0 0 0-21.19-7.71l-104 124A12 12 0 0 0 32 148h92v16H16a12 12 0 0 0-9.37 19.5l29.6 37a19.9 19.9 0 0 0 15.61 7.5h152.32a19.9 19.9 0 0 0 15.61-7.51l29.6-37a12 12 0 0 0 1.45-12.69M188.87 124H148V79Zm-131.14 0L124 45v79Zm144.5 80H53.77L41 188h174Z"></svg:path>`,
})
export class PhSailboatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
