import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowPathRoundedSquareIcon],svg[heroicons-arrow-path-rounded-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12q0-1.848-.138-3.662a4.006 4.006 0 0 0-3.7-3.7a49 49 0 0 0-7.324 0a4.006 4.006 0 0 0-3.7 3.7q-.025.33-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3q0 1.848.138 3.662a4.006 4.006 0 0 0 3.7 3.7a49 49 0 0 0 7.324 0a4.006 4.006 0 0 0 3.7-3.7q.025-.33.046-.662M4.5 12l3 3m-3-3l-3 3"></svg:path>`,
})
export class HeroiconsArrowPathRoundedSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
