import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle2FillIcon],svg[iconamoon-close-circle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 1 0 8 8a1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2a1 1 0 1 1 0 2m7.707.293a1 1 0 0 1 0 1.414l-.793.793l.793.793a1 1 0 0 1-1.414 1.414l-.793-.793l-.793.793a1 1 0 1 1-1.414-1.414l.793-.793l-.793-.793a1 1 0 0 1 1.414-1.414l.793.793l.793-.793a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloseCircle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
