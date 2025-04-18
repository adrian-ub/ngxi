import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPawnIcon],svg[whh-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-27 0-45.5-18.5T0 960v-64q0-26 18.5-45T64 832q79 0 135.5-89.5T256 512q-45 0-86.5-22.5T128 448q0-21 52-38q-52-69-52-154q0-106 75-181T384 0t181 75t75 181q0 85-52 154q52 17 52 38q0 19-41.5 41.5T512 512q0 141 56.5 230.5T704 832q26 0 45 19t19 45v64q0 27-18.5 45.5T704 1024"></svg:path>`,
})
export class WhhPawnIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
