import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJoystick03Icon],svg[hugeicons-joystick-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8 8v8m9-3h-3m4.879 9H5.12c-.112 0-.169 0-.216-.002a2 2 0 0 1-1.903-1.903L3 19.88v-.098a2 2 0 0 1 .621-1.402l.622-.622c.867-.867 1.3-1.3 1.852-1.529C6.645 16 7.259 16 8.485 16h7.03c1.226 0 1.84 0 2.39.228c.552.229.985.662 1.852 1.53l.622.62l.069.07a2 2 0 0 1 .552 1.43c0 .113 0 .17-.002.217a2 2 0 0 1-1.903 1.903a5 5 0 0 1-.216.002" color="currentColor"></svg:path>`,
})
export class HugeiconsJoystick03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
