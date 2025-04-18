import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRoundedMirrorIcon],svg[iconoir-rounded-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 10v4a8 8 0 1 1-16 0v-4a8 8 0 1 1 16 0m-2.5-5.5L13 8m6-1l-7.5 6"></svg:path>`,
})
export class IconoirRoundedMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
