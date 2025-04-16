import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidDesktopComputerIcon],svg[heroicons-solid-desktop-computer-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.22l.123.489l.804.804A1 1 0 0 1 13 18H7a1 1 0 0 1-.707-1.707l.804-.804L7.22 15H5a2 2 0 0 1-2-2zm5.771 7H5V5h10v7z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidDesktopComputerIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
