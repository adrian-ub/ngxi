import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMoonFilledIcon],svg[ix-moon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M321.091 248.167c3.12-72.153 48.091-132.441 110.399-158.936c-36.457-29.076-82.567-46.564-132.823-46.564C180.846 42.667 85.334 138.18 85.334 256s95.512 213.333 213.333 213.333c50.254 0 96.359-17.487 132.816-46.56c-67.601-28.707-113.751-96.907-110.392-174.606"></svg:path>`,
})
export class IxMoonFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
