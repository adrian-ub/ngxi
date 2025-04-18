import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFishIcon],svg[iconoir-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 9s0-2-1-4c4 0 6.5 2.5 6.5 2.5s3.5-.5 6 4.5c-1 5.5-6 6-6 6l-4 2.5v-3c-2.5-1-5-3.5-5-5S10.5 9 10.5 9m0 0s1-.5 2-.5M2 9.5l1 3l-1 3s5 0 5-3s-5-3-5-3m15 2.51l.01-.011"></svg:path>`,
})
export class IconoirFishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
