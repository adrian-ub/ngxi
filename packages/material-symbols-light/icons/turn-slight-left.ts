import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnSlightLeftIcon],svg[material-symbols-light-turn-slight-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 19.77v-7.062q0-.116-.039-.221t-.134-.202L7.712 6.689v2.98h-1V5h4.669v1H8.4l5.621 5.602q.217.217.348.522t.131.628v7.017z"></svg:path>`,
})
export class MaterialSymbolsLightTurnSlightLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
