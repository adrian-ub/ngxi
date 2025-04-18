import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDetectorAlarmOutlineSharpIcon],svg[material-symbols-light-detector-alarm-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20v-4h1v4zm7.575-2.948l-2.838-2.813l.713-.714l2.814 2.839zm-14.15 0l-.689-.688l2.814-2.839l.714.714zM5 5v1.77h14V5zm2.523 2.77l.646 1.769h7.662l.646-1.77zm-.092 2.769l-.97-2.77H4V4h16v3.77h-2.461l-1.074 2.769zM5 5v1.77z"></svg:path>`,
})
export class MaterialSymbolsLightDetectorAlarmOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
