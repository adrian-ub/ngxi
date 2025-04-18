import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidDoorOpenIcon],svg[fa6-solid-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1L100.3 46C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h288zm-64 224c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32m96-128h96v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V128c0-35.3-28.7-64-64-64h-96z"></svg:path>`,
})
export class Fa6SolidDoorOpenIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
