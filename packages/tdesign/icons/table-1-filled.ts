import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTable1FilledIcon],svg[tdesign-table-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 2H2v6h20zM7.33 10H2v12h5.33zm7.336 0H9.334v12h5.33zm2.003 0h5.33v12h-5.33z" clip-rule="evenodd"></svg:path>`,
})
export class TdesignTable1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
