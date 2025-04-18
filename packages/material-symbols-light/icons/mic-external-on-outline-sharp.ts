import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMicExternalOnOutlineSharpIcon],svg[material-symbols-light-mic-external-on-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.416 7.462q-.26-.33-.396-.714q-.135-.385-.135-.787q0-1.038.73-1.769q.731-.73 1.77-.73q1.038 0 1.769.73t.73 1.77q0 .401-.135.786t-.395.713zm1.469 13.077V17.23h-.77l-.884-8.692h4.308l-.885 8.692h-.77v2.307H12.5V3.462h6.616v17.077h-1V4.462H13.5v16.077zm.127-4.308h.746l.658-6.693H6.354zm.746-6.693H6.354h2.062z"></svg:path>`,
})
export class MaterialSymbolsLightMicExternalOnOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
