import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLighthouse11Icon],svg[maki-lighthouse-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 6l1 5H3l1-5h1.2V2h-.92a.32.32 0 0 1-.12-.6L5.38 1a.29.29 0 0 1 .24 0l1.22.4a.32.32 0 0 1-.12.6h-.91v4H7zm1-3v.5l3-.5v-.5L8 3zm0 2.5l3 .5v-.5L8 5v.5zM3 3l-3-.5V3l3 .5V3zm0 2l-3 .5V6l3-.5V5z" fill="currentColor"></svg:path>`,
})
export class MakiLighthouse11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
