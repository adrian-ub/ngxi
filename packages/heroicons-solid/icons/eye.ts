import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidEyeIcon],svg[heroicons-solid-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10M14 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsSolidEyeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
