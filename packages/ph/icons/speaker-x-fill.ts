import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerXFillIcon],svg[ph-speaker-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.66 146.34a8 8 0 0 1-11.32 11.32L216 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L204.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L216 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L227.31 128ZM60 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h28a4 4 0 0 0 4-4V84a4 4 0 0 0-4-4m97.15-54.15a8 8 0 0 0-10-.16l-65.57 51A4 4 0 0 0 80 79.84v96.32a4 4 0 0 0 1.55 3.15l65.57 51a8 8 0 0 0 9 .56a8.29 8.29 0 0 0 3.91-7.18V32.25a8.27 8.27 0 0 0-2.91-6.4Z"></svg:path>`,
})
export class PhSpeakerXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
