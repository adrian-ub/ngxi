import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppDevtoolsIcon],svg[oui-app-devtools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 28h-2v-8.49l.6-.26A9 9 0 0 0 21 3.52V11H11V3.52a9 9 0 0 0 1.4 15.73l.6.26V28h-2v-7.21A11 11 0 0 1 11.6.92L13 .31V9h6V.31l1.4.61a11 11 0 0 1 .6 19.87z"></svg:path><svg:path d="M11 30h10v2H11z" class="ouiIcon__fillSecondary"></svg:path></svg:g>`,
})
export class OuiAppDevtoolsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
