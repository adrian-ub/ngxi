import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miBackspaceIcon],svg[mi-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.707 8.293a1 1 0 0 1 0 1.414L15.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L14 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293a1 1 0 1 1 1.414-1.414L14 10.586l2.293-2.293a1 1 0 0 1 1.414 0"></svg:path><svg:path fill-rule="evenodd" d="M22 5a1 1 0 0 0-1-1H9.46a2 2 0 0 0-1.519.698l-5.142 6a2 2 0 0 0 0 2.604l5.142 6A2 2 0 0 0 9.46 20H21a1 1 0 0 0 1-1zm-2 13H9.46l-5.143-6L9.46 6H20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MiBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
