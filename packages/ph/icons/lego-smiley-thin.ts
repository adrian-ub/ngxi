import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyThinIcon],svg[ph-lego-smiley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 120a8 8 0 1 1 8-8a8 8 0 0 1-8 8m56-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-2.13 44.62a49 49 0 0 1-51.74 0a4 4 0 0 0-4.26 6.77a57 57 0 0 0 60.26 0a4 4 0 0 0-4.26-6.76ZM212 80v96a28 28 0 0 1-24 27.71V224a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12v-20.29A28 28 0 0 1 44 176V80a28 28 0 0 1 28-28h20V32a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v20h20a28 28 0 0 1 28 28M100 52h56V32a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4Zm80 172v-20H76v20a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4m24-144a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhLegoSmileyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
