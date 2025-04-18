import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickLeftIcon],svg[cil-arrow-thick-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m294.637 496l-38.688-.035L16 255.729L256.334 16.048h38.277l.008 143.937h200.017v192H294.629ZM61.271 255.773l201.364 201.6l-.008-137.391h200.009v-128H262.621l-.008-137.006Z"></svg:path>`,
})
export class CilArrowThickLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
