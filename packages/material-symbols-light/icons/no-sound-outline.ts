import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoSoundOutlineIcon],svg[material-symbols-light-no-sound-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.785 15.308l-.708-.708l2.6-2.6l-2.6-2.6l.708-.708l2.6 2.6l2.6-2.6l.707.708l-2.6 2.6l2.6 2.6l-.707.708l-2.6-2.6zM4.308 14v-4H7.73l3.577-3.577v11.154L7.73 14zm6-5.15L8.158 11h-2.85v2h2.85l2.15 2.15zM7.808 12"></svg:path>`,
})
export class MaterialSymbolsLightNoSoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
