import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizDuotoneIcon],svg[si-more-muted-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v1m-6-1v1m12-1v1"></svg:path>`,
})
export class SiMoreMutedHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
