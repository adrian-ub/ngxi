import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHourglassIcon],svg[proicons-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="m4.095 3.298l15.81-.048m-15.81 17.5l15.81-.048"></svg:path><svg:path d="M18.426 3.31H5.574l.079 1.449a7.38 7.38 0 0 0 2.251 4.913l1.242 1.195a1.58 1.58 0 0 1 0 2.279L7.904 14.34a7.38 7.38 0 0 0-2.251 4.913l-.08 1.448h12.853l-.079-1.445a7.38 7.38 0 0 0-2.256-4.917l-1.242-1.194a1.58 1.58 0 0 1 0-2.28l1.242-1.193a7.38 7.38 0 0 0 2.256-4.918z"></svg:path></svg:g>`,
})
export class ProiconsHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
