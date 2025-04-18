import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHtml5FilledIcon],svg[tdesign-html5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.059 1l-1.098 19.208l-8.96 3.36l-8.962-3.36L1.941 1zM7.787 7h8.708l1.72.017L18.33 5H5.67l.421 7.377h9.814l-.21 3.67L12 17.431l-3.696-1.386l-.048-.853l-.044-1.12H6.188l.194 3.388L12 19.568l5.618-2.107l.405-7.084H7.98z"></svg:path>`,
})
export class TdesignHtml5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
