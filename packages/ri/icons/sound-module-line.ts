import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSoundModuleLineIcon],svg[ri-sound-module-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v3h-2v-3h-2v-2h6v2zM5 18v3H3v-3H1v-2h6v2zm6-12V3h2v3h2v2H9V6zm0 4h2v11h-2zm-8 4V3h2v11zm16 0V3h2v11z"></svg:path>`,
})
export class RiSoundModuleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
