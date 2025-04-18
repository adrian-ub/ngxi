import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiOneSolidIcon],svg[mynaui-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.778 6.332a.75.75 0 0 1 .41.668v10a.75.75 0 0 1-1.5 0V8.473L9.44 10.107a.75.75 0 0 1-.882-1.214l3.437-2.5a.75.75 0 0 1 .782-.061"></svg:path>`,
})
export class MynauiOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
