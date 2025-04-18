import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEclipseIcon],svg[mynaui-eclipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.183 3.183A9 9 0 0 0 3 12a9 9 0 0 0 17.817 1.817M10.183 3.183a9 9 0 0 1 10.633 10.633M10.184 3.184c-1.268 6.188 4.533 11.884 10.634 10.634"></svg:path>`,
})
export class MynauiEclipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
