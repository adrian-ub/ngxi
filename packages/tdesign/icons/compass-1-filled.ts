import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCompass1FilledIcon],svg[tdesign-compass-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M1 12l8.69-2.31L12 1l2.31 8.69L23 12l-8.69 2.31L12 23l-2.31-8.69z"></svg:path>`,
})
export class TdesignCompass1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
