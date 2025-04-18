import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLampThinIcon],svg[ph-lamp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.68 150.42l-48-112A4 4 0 0 0 192 36H64a4 4 0 0 0-3.68 2.42l-48 112A4 4 0 0 0 16 156h108v56H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-56h64v36a4 4 0 0 0 8 0v-36h36a4 4 0 0 0 3.68-5.58M22.07 148L66.64 44h122.72l44.57 104Z"></svg:path>`,
})
export class PhLampThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
