import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOpenRunIcon],svg[material-symbols-light-open-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.579l2.067-2.048l.694.707L12 21l-2.761-2.762l.713-.707zM4.421 12l2.048 2.048l-.708.714L3 12l2.762-2.761l.707.694zm15.177 0L17.55 9.933l.689-.694L21 12l-2.762 2.762l-.688-.714zM12 4.402L9.952 6.45l-.713-.688L12 3l2.762 2.762l-.695.688z"></svg:path>`,
})
export class MaterialSymbolsLightOpenRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
