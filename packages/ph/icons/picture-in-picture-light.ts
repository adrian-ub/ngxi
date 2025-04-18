import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPictureInPictureLightIcon],svg[ph-picture-in-picture-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M38 192V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v58h-82a6 6 0 0 0-6 6v66H40a2 2 0 0 1-2-2m178 2h-74v-60h76v58a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhPictureInPictureLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
