import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosOpenframeworksIcon],svg[logos-openframeworks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M67.49 0c37.237 0 67.492 30.255 67.492 67.49c0 37.237-30.255 67.492-67.491 67.492S0 104.727 0 67.49S30.255 0 67.49 0m128 0v134.982h-58.18V0zm37.237 60.51v34.908h-34.909V60.51zM256 0l-58.182 58.182V0z"></svg:path>`,
})
export class LogosOpenframeworksIcon {
  readonly viewBox = input("0 0 256 135")
  readonly width = input("1.9em")
  readonly height = input("1em")
}
