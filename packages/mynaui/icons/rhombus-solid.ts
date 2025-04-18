import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRhombusSolidIcon],svg[mynaui-rhombus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.42 2.964a1.77 1.77 0 0 0-2.84 0L4.62 10.89a1.85 1.85 0 0 0 0 2.222l5.96 7.925a1.77 1.77 0 0 0 2.84 0l5.96-7.925a1.85 1.85 0 0 0 0-2.222z"></svg:path>`,
})
export class MynauiRhombusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
