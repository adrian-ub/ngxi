import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSoundModuleFillIcon],svg[ri-sound-module-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v3h-2v-3h-2v-3h6v3zM5 18v3H3v-3H1v-3h6v3zm6-12V3h2v3h2v3H9V6zm0 5h2v10h-2zm-8 2V3h2v10zm16 0V3h2v10z"></svg:path>`,
})
export class RiSoundModuleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
