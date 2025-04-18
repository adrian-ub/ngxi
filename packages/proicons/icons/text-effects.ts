import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextEffectsIcon],svg[proicons-text-effects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" clip-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3.5a1.75 1.75 0 0 0-1.588 1.015l-6.25 13.5a1.75 1.75 0 0 0 3.176 1.47L9.1 15.678h5.8l1.762 3.807a1.75 1.75 0 1 0 3.176-1.47l-6.25-13.5A1.75 1.75 0 0 0 12 3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12 7.63l2.453 5.298H9.547z"></svg:path></svg:g>`,
})
export class ProiconsTextEffectsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
