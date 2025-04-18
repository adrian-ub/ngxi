import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundMute1Icon],svg[tdesign-sound-mute-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm10.88-7.45L20 10.584l2.121-2.12l1.415 1.413L21.414 12l2.121 2.121l-1.414 1.414L20 13.414l-2.121 2.121l-1.415-1.414L18.587 12l-2.121-2.122z"></svg:path>`,
})
export class TdesignSoundMute1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
