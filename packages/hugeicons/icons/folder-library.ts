import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderLibraryIcon],svg[hugeicons-folder-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.503 4c-.019-.371.049-.658.233-.9c.457-.6 1.387-.6 3.249-.6h2.03c1.862 0 2.792 0 3.25.6c.183.242.25.529.232.9M5 8a1.5 1.5 0 0 1 .27-.686C5.855 6.5 7.068 6.5 9.494 6.5h5.012c2.426 0 3.64 0 4.224.814c.145.202.232.426.27.686M3.818 15.713l.718 2.303c.896 2.87 1.661 3.484 4.674 3.484h5.58c3.013 0 3.778-.615 4.674-3.484l.719-2.303c.743-2.383 1.115-3.574.527-4.393c-.588-.82-1.814-.82-4.267-.82H7.557c-2.453 0-3.68 0-4.267.82c-.588.819-.216 2.01.528 4.393" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
