import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHumanNonBinaryIcon],svg[mdi-human-non-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m1.91 6.41A1.99 1.99 0 0 0 12 7h-1.5c-1.1 0-2 .9-2 2v5.5H10V22h3.5v-6h3z"></svg:path>`,
})
export class MdiHumanNonBinaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
