import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCss3Icon],svg[tdesign-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.941 1H22.06l-1.098 19.208l-8.96 3.36l-8.962-3.36zM4.06 3l.902 15.792l7.04 2.64l7.038-2.64L19.941 3zm1.423 2H18.33l-.108 1.887l-7.29 3.49h7.09l-.404 7.084L12 19.568l-5.618-2.107l-.114-1.994v-.004l-.075-1.39h2.01l.062 1.284l.04.69L12 17.431l3.696-1.386l.21-3.67H6.09l-.106-1.848L13.355 7H12l-6.255.012z"></svg:path>`,
})
export class TdesignCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
