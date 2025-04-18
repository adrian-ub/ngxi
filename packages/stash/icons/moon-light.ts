import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashMoonLightIcon],svg[stash-moon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.567 4.128a8 8 0 0 0 6.867 13.744a8 8 0 1 1-6.867-13.744m1.611.006C12.66 3.82 12.575 3 12 3a9 9 0 1 0 7.334 14.218c.3-.42-.245-.913-.724-.72a7 7 0 0 1-6.432-12.363" clip-rule="evenodd"></svg:path>`,
})
export class StashMoonLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
