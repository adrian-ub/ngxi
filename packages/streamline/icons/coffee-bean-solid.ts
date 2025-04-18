import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCoffeeBeanSolidIcon],svg[streamline-coffee-bean-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.175 12.356c2.221 1.867 6.048 1.27 8.75-1.431C13.37 8.48 14.09 5.114 12.822 2.85a11 11 0 0 1-.17.553c-.328.986-.894 2.252-1.837 3.196c-.54.54-1.2.79-1.859.91c-.635.116-1.315.116-1.928.116H7c-.645 0-1.219.002-1.733.095c-.501.091-.895.262-1.198.565c-.743.743-1.232 1.796-1.536 2.707a11 11 0 0 0-.358 1.364m-.997-1.206C-.09 8.886.63 5.52 3.075 3.075C5.777.373 9.604-.222 11.825 1.644a11 11 0 0 1-.359 1.364c-.303.91-.792 1.964-1.535 2.707c-.303.303-.697.474-1.198.565c-.514.093-1.088.095-1.733.095h-.028c-.613 0-1.293 0-1.928.115c-.659.12-1.319.371-1.859.911c-.943.944-1.509 2.21-1.837 3.196q-.097.292-.17.553" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCoffeeBeanSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
