import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidArrowUpRightIcon],svg[heroicons-solid-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.22 16.78a.75.75 0 0 0 1.06 0L15.5 5.56v7.69a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h7.69L3.22 15.72a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidArrowUpRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
