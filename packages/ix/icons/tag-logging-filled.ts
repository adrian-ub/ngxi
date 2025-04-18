import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTagLoggingFilledIcon],svg[ix-tag-logging-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l106.667 106.667H320v256l-42.667 42.666zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m310.281 277.385V192.052h-128v277.333zm-85.333-64c0-11.782 9.551-21.333 21.333-21.333s21.334 9.551 21.334 21.333s-9.552 21.334-21.334 21.334s-21.333-9.552-21.333-21.334m0-170.666h42.667v106.666h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagLoggingFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
