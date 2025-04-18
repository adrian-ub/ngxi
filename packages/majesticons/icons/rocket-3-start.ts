import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRocket3StartIcon],svg[majesticons-rocket-3-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.95 16.264s-1.703 2.54-.707 3.535c.995.996 3.535-.707 3.535-.707"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.506 3.536a1 1 0 0 1 .268.928l-.317 1.402a9 9 0 0 1-2.414 4.375l-4.644 4.644c1.027 1.272 1.36 2.48 1.1 3.632c-.271 1.2-1.16 2.086-1.712 2.637l-.06.06a1 1 0 0 1-1.564-.193L9.17 17.696a1 1 0 0 0-.15-.192l-2.57-2.568l-.76-.456l3.459-3.843l.007.005L13.8 6a9 9 0 0 1 4.376-2.414l1.402-.318a1 1 0 0 1 .928.269zM8.322 10.062c-.969-.565-1.9-.722-2.797-.52c-1.2.272-2.086 1.16-2.637 1.713l-.06.059a1 1 0 0 0 .193 1.564l1.796 1.078z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsRocket3StartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
