import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhInfinityaltIcon],svg[whh-infinityalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 632q-119 0-203.5-84.5T448 344q0-66-47-113t-113-47t-113 47t-47 113t47 113t113 47q67 0 114-48q22 63 64 114q-78 62-178 62q-119 0-203.5-84.5T0 344t84.5-203.5T288 56t203.5 84.5T576 344q0 66 47 113t113 47t113-47t47-113t-47-113t-113-47q-67 0-114 48q-22-63-64-114q78-62 178-62q119 0 203.5 84.5T1024 344t-84.5 203.5T736 632"></svg:path>`,
})
export class WhhInfinityaltIcon {
  readonly viewBox = input("0 0 1024 632")
  readonly width = input("1.63em")
  readonly height = input("1em")
}
