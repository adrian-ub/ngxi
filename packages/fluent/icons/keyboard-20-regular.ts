import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboard20RegularIcon],svg[fluent-keyboard-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m6.502-4.495a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m3.753-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m-9.753.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505M7.75 9.752a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m2.252.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m3.757-.753a.752.752 0 1 1-1.504 0a.752.752 0 0 1 1.504 0M8.503 8.005a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5zM3.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class FluentKeyboard20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
