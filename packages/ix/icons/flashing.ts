import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFlashingIcon],svg[ix-flashing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m391.764 361.595l30.17 30.17l-30.17 30.17l-30.17-30.17zm-271.529 0l30.17 30.17l-30.17 30.17l-30.17-30.17zM256 128c70.692 0 128 57.308 128 128s-57.308 128-128 128s-128-57.307-128-128c0-70.692 57.307-128 128-128m0 42.667c-47.128 0-85.333 38.205-85.333 85.333c0 22.767 8.915 43.451 23.446 58.752l120.639-120.639c-15.301-14.531-35.985-23.446-58.752-23.446M120.235 90.066l30.17 30.17l-30.17 30.169l-30.17-30.169zm271.529 0l30.17 30.17l-30.17 30.169l-30.17-30.169zm-114.431-47.4v42.667h-42.666V42.667zm0 384.001v42.666h-42.666v-42.666zm192-149.334h-42.666v-42.666h42.666zm-384 0H42.667v-42.666h42.666z"></svg:path>`,
})
export class IxFlashingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
