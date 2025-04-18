import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchesIcon],svg[material-symbols-light-switches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.385 16q-1.671 0-2.836-1.164Q3.384 13.67 3.384 12T4.55 9.165T7.384 8q1.135 0 2.042.55t1.42 1.45h7.77q.846 0 1.423.577q.576.577.576 1.423t-.577 1.423t-1.422.577h-7.77q-.513.9-1.42 1.45T7.385 16m3.861-3h7.37q.425 0 .712-.288t.288-.712t-.288-.712t-.712-.288h-7.37q.07.225.104.5t.035.5t-.035.5t-.104.5"></svg:path>`,
})
export class MaterialSymbolsLightSwitchesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
