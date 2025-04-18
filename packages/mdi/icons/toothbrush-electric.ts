import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToothbrushElectricIcon],svg[mdi-toothbrush-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.5V14c-1.66 0-3 1.34-3 3v5h8v-5c0-1.66-1.34-3-3-3V3.5a2 2 0 0 0-2-2M7.5 2v7H11V7.5H9v-4h2V2zM13 17.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiToothbrushElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
