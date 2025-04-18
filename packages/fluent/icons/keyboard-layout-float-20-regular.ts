import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardLayoutFloat20RegularIcon],svg[fluent-keyboard-layout-float-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m6.502-4.495a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m3.753-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m-9.753.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505M7.75 8.752a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m2.252.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m3.757-.753a.752.752 0 1 1-1.504 0a.752.752 0 0 1 1.504 0M8.503 7.005a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v8a1.5 1.5 0 0 1-1.5 1.5H11a1 1 0 1 1-2 0H3.5A1.5 1.5 0 0 1 2 12.5zM3.5 13h13a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5M2 16.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentKeyboardLayoutFloat20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
