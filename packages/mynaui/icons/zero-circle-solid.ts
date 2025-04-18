import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroCircleSolidIcon],svg[mynaui-zero-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0v3a1.75 1.75 0 1 1-3.5 0z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.25a3.25 3.25 0 0 0-3.25 3.25v3a3.25 3.25 0 0 0 6.5 0v-3A3.25 3.25 0 0 0 12 7.25"></svg:path></svg:g>`,
})
export class MynauiZeroCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
