import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundLowIcon],svg[tdesign-sound-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm11.683-8.512l.707.707a5.5 5.5 0 0 1 0 7.778l-.707.707l-1.414-1.414l.707-.707a3.5 3.5 0 0 0 0-4.95l-.707-.707z"></svg:path>`,
})
export class TdesignSoundLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
