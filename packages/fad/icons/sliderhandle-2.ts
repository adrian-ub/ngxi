import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadSliderhandle2Icon],svg[fad-sliderhandle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M55.17 48.542h144.553a8 8 0 0 1 8.004 8.004v143.736a8 8 0 0 1-8.004 8.004H55.17a8 8 0 0 1-8.003-8.004V56.546a8 8 0 0 1 8.003-8.004m8.618 143.857l17.54-8.168h99.462a3.983 3.983 0 0 0 3.976-4l-.393-99.693l7.901-16.31H63.788z"></svg:path><svg:path d="M92.995 112A3.995 3.995 0 0 0 89 115.996v8.008a3.974 3.974 0 0 0 3.998 3.976l71.534-.365c2.208-.011 4.052-1.81 4.118-4.016l.23-7.603a3.85 3.85 0 0 0-3.875-3.996z"></svg:path></svg:g>`,
})
export class FadSliderhandle2Icon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
