import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EraseToolIcon],svg[fluent-mdl2-erase-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1115 1792h421v128H453L50 1516q-24-24-37-56t-13-68q0-35 13-67t38-58L1248 69l794 795zm133-1542L538 960l614 613l709-709zM933 1792l128-128l-613-614l-306 307q-14 14-14 35t14 35l364 365z"></svg:path>`,
})
export class FluentMdl2EraseToolIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
