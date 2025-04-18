import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHumidityIcon],svg[lets-icons-humidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 14.571C20 18.753 16.336 22 12 22s-8-3.247-8-7.429C4 12 5.305 9.452 6.716 7.423c1.43-2.055 3.076-3.726 3.962-4.568M20 14.571L10.678 2.855M20 14.571c0-2.571-1.305-5.119-2.716-7.148c-1.43-2.055-3.076-3.726-3.962-4.568a1.913 1.913 0 0 0-2.644 0M20 14.571L10.678 2.855"></svg:path><svg:path stroke-linecap="round" d="M12 18a4 4 0 0 1-4-4"></svg:path></svg:g>`,
})
export class LetsIconsHumidityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
