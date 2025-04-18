import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLayersSelectFrontSolidIcon],svg[bubbles-layers-select-front-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.667 12H5.333A1.334 1.334 0 0 1 4 10.667V1.333A1.333 1.333 0 0 1 5.333 0h9.334A1.333 1.333 0 0 1 16 1.333v9.334A1.334 1.334 0 0 1 14.667 12m-9.334-1.667a.333.333 0 0 0 .334.334h8.666a.34.34 0 0 0 .334-.334V1.667a.333.333 0 0 0-.334-.334H5.667a.333.333 0 0 0-.334.334zM2 16h-.667A1.334 1.334 0 0 1 0 14.667V14a.667.667 0 1 1 1.333 0v.333a.333.333 0 0 0 .334.334H2A.667.667 0 1 1 2 16M.667 11.333A.667.667 0 0 1 0 10.667V9.333a.667.667 0 1 1 1.333 0v1.334a.667.667 0 0 1-.666.666m0-4.666A.667.667 0 0 1 0 6V4.667a.667.667 0 0 1 1.333 0V6a.667.667 0 0 1-.666.667m6 9.333H5.333a.667.667 0 0 1 0-1.333h1.334a.667.667 0 0 1 0 1.333m4.666 0H10a.667.667 0 0 1 0-1.333h1.333a.667.667 0 0 1 0 1.333"></svg:path>`,
})
export class BubblesLayersSelectFrontSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
