import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsKeyIcon],svg[ls-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m318 483l-39-40s-111 43-223-68c-95-95-53-244 9-305c66-66 207-106 310-3s59 225 59 225l283 282l-8 147l-144 9l-8-72l-75-9l-7-75l-74-10l-11-72zM104 110c-44 44-56 103-27 131c29 29 87 17 131-27s57-103 28-131c-28-29-88-17-132 27m579 520l2-42l-269-269l-22 22z"></svg:path>`,
})
export class LsKeyIcon {
  readonly viewBox = input("0 0 717 730")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
