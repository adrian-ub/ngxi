import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidArrowsExpandIcon],svg[heroicons-solid-arrows-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6.414l2.293 2.293a1 1 0 0 1-1.414 1.414L5 6.414V8a1 1 0 0 1-2 0zm9 1a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L13.586 5zm-9 7a1 1 0 1 1 2 0v1.586l2.293-2.293a1 1 0 0 1 1.414 1.414L6.414 15H8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm13-1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586l-2.293-2.293a1 1 0 0 1 1.414-1.414L15 13.586V12a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidArrowsExpandIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
