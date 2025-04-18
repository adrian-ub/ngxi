import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SlideshowIcon],svg[fluent-mdl2-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1280 1024l-512 256V768zm-416 101l201-101l-201-101zm1184-869v1536H0V256zm-128 128H128v1280h1792zm-128 1152H256V512h1536zm-128-896H384v768h1280z"></svg:path>`,
})
export class FluentMdl2SlideshowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
