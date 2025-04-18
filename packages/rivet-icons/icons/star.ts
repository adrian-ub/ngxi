import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsStarIcon],svg[rivet-icons-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 .684l2.231 4.66l5.629.266l-4.18 4.04l1.336 5.254L8 12.324l-5.016 2.58L4.32 9.65L.14 5.61l5.629-.265zm0 4.632l-.943 1.97l-2.197.104l1.684 1.629l-.528 2.077L8 10.076l1.984 1.02l-.528-2.077l1.684-1.63l-2.197-.103z"></svg:path>`,
})
export class RivetIconsStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
