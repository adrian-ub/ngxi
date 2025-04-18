import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHelpCircleIcon],svg[tdesign-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-9.996 6.254H11V16.25h2.004zM11 15.25V14c0-.867.39-1.573.826-2.11c.432-.53.974-.974 1.41-1.318a2 2 0 1 0-3.123-2.24l-.333.944l-1.885-.666l.333-.943a4.001 4.001 0 1 1 6.246 4.476c-.431.34-.817.666-1.096 1.009c-.274.338-.378.61-.378.848v1.25z"></svg:path>`,
})
export class TdesignHelpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
