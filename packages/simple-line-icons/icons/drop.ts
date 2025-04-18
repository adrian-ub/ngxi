import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsDropIcon],svg[simple-line-icons-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M510.4 1022.704c-193.312 0-350.592-155.12-350.592-345.776c0-222.688 311.632-644.848 324.912-662.72a31.98 31.98 0 0 1 25.473-12.913c11.183-.096 19.567 4.593 25.663 12.56c13.408 17.537 328.336 432.226 328.336 663.058c0 190.672-158.72 345.791-353.792 345.791m.352-935.008c-74.4 105.664-286.943 422.064-286.943 589.217c0 155.376 128.56 281.776 286.592 281.776c159.776 0 289.776-126.4 289.776-281.776c.016-173.36-214.145-485.024-289.425-589.217"></svg:path>`,
})
export class SimpleLineIconsDropIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
