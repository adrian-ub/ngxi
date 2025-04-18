import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeThinIcon],svg[ph-text-h-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 180a32 32 0 0 1-54.86 22.4a4 4 0 0 1 5.72-5.6A24 24 0 1 0 212 156a4 4 0 0 1-3.28-6.29l23.6-33.71H192a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29l-24.16 34.51A32.06 32.06 0 0 1 244 180M144 52a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhTextHThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
