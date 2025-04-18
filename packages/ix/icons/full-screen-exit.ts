import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFullScreenExitIcon],svg[ix-full-screen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m192 64l-.001 85.333H192V192l-.001-.001l.001.001h-42.667v-.001L64 192v-42.667h85.333V64zm0 256v42.667l-.001-.001L192 448h-42.667v-85.334H64V320zM362.667 64l-.001 85.333H448V192l-85.334-.001V192H320V64zM448 320v42.667l-85.334-.001V448H320V320z"></svg:path>`,
})
export class IxFullScreenExitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
