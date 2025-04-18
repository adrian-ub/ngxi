import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhVIcon],svg[whh-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 625q0 39-17 55l-326 326q-18 18-41 18t-41-18L17 680Q0 663 0 630V64q0-26 19-45T64.5 0T110 19t19 45h-1v553l256 256l256-256V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhVIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
