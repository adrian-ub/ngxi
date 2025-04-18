import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHighlight1FilledIcon],svg[tdesign-highlight-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M7.646 9.54A5 5 0 0 1 12 7h1V5h-1a7 7 0 0 0-6.095 3.555l-.492.87l1.74.986zm-.642 3.67v-2.077h-2v2.076z"></svg:path>`,
})
export class TdesignHighlight1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
