import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMarvinIcon],svg[whh-marvin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 449q-114 0-266.5 14.5T0 495q3-101 45-192.5t110-158T316.5 39T512 0t195.5 39T869 144.5t110 158t45 192.5q-93-17-245.5-31.5T512 449M223 641l150-124q77-4 139-4t139 4l150 124l64-108q98 11 158 23q-11 130-81.5 237.5t-184 170T512 1026t-246-62.5t-184-170T1 556q60-12 158-23z"></svg:path>`,
})
export class WhhMarvinIcon {
  readonly viewBox = input("0 0 1024 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}
