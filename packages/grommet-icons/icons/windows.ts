import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWindowsIcon],svg[grommet-icons-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.923 0L10.959 1.893v9.588l12.964-.102zM0 3.398l.009 8.155l9.773-.055l-.004-9.432zm.008 17.283l9.773 1.344l-.008-9.44l-9.766-.063zm10.951 1.49L23.923 24l.004-11.326l-12.986-.022z"></svg:path>`,
})
export class GrommetIconsWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
