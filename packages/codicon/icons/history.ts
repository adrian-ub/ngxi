import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconHistoryIcon],svg[codicon-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.507 12.324a7 7 0 0 0 .065-8.56A7 7 0 0 0 2 4.393V2H1v3.5l.5.5H5V5H2.811a6.008 6.008 0 1 1-.135 5.77l-.887.462a7 7 0 0 0 11.718 1.092m-3.361-.97l.708-.707L8 7.792V4H7v4l.146.354z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconHistoryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
