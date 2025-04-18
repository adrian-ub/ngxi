import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignToolsFilledIcon],svg[tdesign-tools-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.735 6.567l-1.896-.064l-.225.731a8.5 8.5 0 0 0 2.113 8.518a8.5 8.5 0 0 0 8.487 2.122l5.295 5.296l2.123-2.123l-4.296-4.296l1.414-1.414l4.296 4.296l2.12-2.12l-5.296-5.294a8.5 8.5 0 0 0-2.122-8.488A8.5 8.5 0 0 0 7.23 1.618l-.73.225l.063 1.896l3.528 3.528l-2.828 2.828z"></svg:path>`,
})
export class TdesignToolsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
