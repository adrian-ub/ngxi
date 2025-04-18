import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSubscriptIcon],svg[icomoon-free-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.219V15h2v1h-3v-2.281l2-.938V12h-2v-1h3v2.281zM10.563 4H8.438L5.5 6.938L2.562 4H.437l4 4l-4 4h2.125L5.5 9.062L8.438 12h2.125l-4-4z"></svg:path>`,
})
export class IcomoonFreeSubscriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
