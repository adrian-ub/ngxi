import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsImageIcon],svg[ls-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 640V54h717v586zm644-194V127H73v271l156-93l204 111l83-49zM510 298c-32 0-57-26-57-58s25-58 57-58s57 26 57 58s-25 58-57 58"></svg:path>`,
})
export class LsImageIcon {
  readonly viewBox = input("0 0 717 640")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
