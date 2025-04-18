import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSuperscriptIcon],svg[icomoon-free-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.219V4h2v1h-3V2.719l2-.938V1h-2V0h3v2.281zM10.563 4H8.438L5.5 6.938L2.562 4H.437l4 4l-4 4h2.125L5.5 9.062L8.438 12h2.125l-4-4z"></svg:path>`,
})
export class IcomoonFreeSuperscriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
