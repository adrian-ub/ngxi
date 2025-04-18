import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDownCircleIcon],svg[tdesign-arrow-up-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8 6.914L11.086 15l1.414-1.414l1.5 1.5V10h2v5.086l1.5-1.5L18.914 15zM8 14V8.914l-1.5 1.5L5.086 9L9 5.086L12.914 9L11.5 10.414l-1.5-1.5V14z"></svg:path>`,
})
export class TdesignArrowUpDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
