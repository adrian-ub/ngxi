import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMaleIcon],svg[picon-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8C-1 8-1 3 2.5 3s3.5 5 0 5M1 5.5c0 2 3 2 3 0s-3-2-3 0M3 4l3-3H4V0h4v4H7V2L4 5"></svg:path>`,
})
export class PiconMaleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
