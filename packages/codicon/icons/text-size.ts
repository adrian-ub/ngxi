import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTextSizeIcon],svg[codicon-text-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.36 7L1 13h1.34l.51-1.47h2.26L5.64 13H7L4.65 7zm-.15 3.53l.78-2.14l.78 2.14zM11.82 4h-1.6L7 13h1.56l.75-2.29h3.36l.77 2.29H15zM9.67 9.5l1.18-3.59q.09-.278.12-.57q.04.288.11.57l1.25 3.59z"></svg:path>`,
})
export class CodiconTextSizeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
