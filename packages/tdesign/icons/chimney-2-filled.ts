import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChimney2FilledIcon],svg[tdesign-chimney-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h7v5.924L11.32 10H22v12h-6v-6h-2v6H1.834L4 7.924zm5 6.076V4H6v4.076L4.165 20H8V10h1.296z"></svg:path>`,
})
export class TdesignChimney2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
