import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFontIncrease20RegularIcon],svg[fluent-font-increase-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.854 4.854a.5.5 0 0 1-.707-.708l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.708L15.5 3.207zM10 4a.5.5 0 0 0-.463.31l-4.5 11a.5.5 0 1 0 .926.38L7.5 11.93V12h5v-.068l1.537 3.757a.5.5 0 1 0 .926-.378l-4.5-11A.5.5 0 0 0 10 4m0 1.82L12.119 11H7.88z"></svg:path>`,
})
export class FluentFontIncrease20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
