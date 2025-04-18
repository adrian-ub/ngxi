import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHtml5Icon],svg[tdesign-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.941 1H22.06l-1.098 19.208l-8.96 3.36l-8.962-3.36zM4.06 3l.902 15.792l7.04 2.64l7.038-2.64L19.941 3zm1.61 2h12.66l-.115 2.017L16.495 7H7.787l.193 3.377h10.043l-.405 7.084L12 19.568l-5.618-2.107l-.194-3.388h2.024l.044 1.12l.048.853L12 17.432l3.696-1.386l.21-3.67H6.09z"></svg:path>`,
})
export class TdesignHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
