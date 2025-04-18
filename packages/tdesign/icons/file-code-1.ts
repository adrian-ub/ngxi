import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileCode1Icon],svg[tdesign-file-code-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm2 2v18h14V9h-6V3zm10 .414V7h3.586zm-3.793 8.793L9.414 14l1.793 1.793l-1.414 1.414L6.586 14l3.207-3.207zm3-1.414L17.414 14l-3.207 3.207l-1.414-1.414L14.586 14l-1.793-1.793z"></svg:path>`,
})
export class TdesignFileCode1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
