import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleXBoldIcon],svg[ph-speaker-simple-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.27 21.22a12 12 0 0 0-12.64 1.31L83.88 76H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 172 224V32a12 12 0 0 0-6.73-10.78M148 199.47l-52.63-40.94A12 12 0 0 0 88 156H44v-56h44a12 12 0 0 0 7.37-2.53L148 56.54Zm108.49-55.95a12 12 0 0 1-17 17L224 145l-15.51 15.52a12 12 0 0 1-17-17L207 128l-15.52-15.51a12 12 0 0 1 17-17L224 111l15.51-15.51a12 12 0 0 1 17 17L241 128Z"></svg:path>`,
})
export class PhSpeakerSimpleXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
