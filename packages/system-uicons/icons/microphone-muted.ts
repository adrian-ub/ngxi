import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMicrophoneMutedIcon],svg[system-uicons-microphone-muted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.5 8l.001 1.5q-.322 3-3.001 3c-2.679 0-2.785-1-2.999-3L7.5 6c0-2 1.857-3.231 2.5-3.5m1.5 4l4-4m0 4l-4-4z"></svg:path><svg:path d="M15.5 9.5a5 5 0 0 1-9.995.217L5.5 9.5m5.022 5v4"></svg:path></svg:g>`,
})
export class SystemUiconsMicrophoneMutedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
