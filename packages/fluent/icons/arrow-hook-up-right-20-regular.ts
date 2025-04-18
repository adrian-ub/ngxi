import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookUpRight20RegularIcon],svg[fluent-arrow-hook-up-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11a5 5 0 0 0 5 5h4.5a.5.5 0 0 0 0-1H9a4 4 0 0 1 0-8h5.293l-2.7 2.7a.5.5 0 1 0 .708.706l3.539-3.539a.5.5 0 0 0 .125-.497a.5.5 0 0 0-.135-.247L12.297 2.59a.5.5 0 1 0-.707.707L14.293 6H9a5 5 0 0 0-5 5"></svg:path>`,
})
export class FluentArrowHookUpRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
