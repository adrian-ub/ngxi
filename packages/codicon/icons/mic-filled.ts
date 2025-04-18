import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMicFilledIcon],svg[codicon-mic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.94 10.5a2.5 2.5 0 0 0 2.5-2.5V3.5a2.5 2.5 0 0 0-5 0V8a2.5 2.5 0 0 0 2.5 2.5m.5 1.972V14h2v1h-5v-1h2v-1.528A4.5 4.5 0 0 1 3.44 8h1a3.5 3.5 0 0 0 7 0h1a4.5 4.5 0 0 1-4 4.472"></svg:path>`,
})
export class CodiconMicFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
