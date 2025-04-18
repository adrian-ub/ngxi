import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSoundWaveIcon],svg[icon-park-outline-sound-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 14v-2a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v2m-10 4v12m8-10v8M24 15v18m-8-15v12M8 20v8m-2 6v2a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6v-2"></svg:path>`,
})
export class IconParkOutlineSoundWaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
