import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMegaphoneIcon],svg[codicon-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2 6.77l12.33-3.43l.67.53v8.6l-.67.53l-6.089-1.595a2.16 2.16 0 1 1-4.178-1.095L2 9.77l-.42-.53V7.3zm3.006 3.787a1 1 0 0 0-.04.242a1.17 1.17 0 0 0 2.288.347zM2.58 8.82L14 11.83V4.5L2.58 7.72z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconMegaphoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
