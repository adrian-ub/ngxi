import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVrHeadset1SolidIcon],svg[streamline-vr-headset-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.071 0A6.07 6.07 0 0 0 .097 4.982h4.709a3.46 3.46 0 0 1 3.4-2.83h2.502A6.06 6.06 0 0 0 6.07 0ZM2.786 11.178A6.07 6.07 0 0 1 .002 6.232h4.804a3.46 3.46 0 0 0 3.4 2.831h3.937v1.187a1.43 1.43 0 0 1-1.429 1.429H9.357V13.5a.5.5 0 0 1-.5.5H3.286a.5.5 0 0 1-.5-.5zm9.345-3.365h.369a1 1 0 0 0 1-1V4.401a1 1 0 0 0-1-1H9.946v4.412zm-3.435 0V3.401h-.49a2.206 2.206 0 0 0 0 4.412z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVrHeadset1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
