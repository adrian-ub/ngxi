import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFlaskfullIcon],svg[whh-flaskfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M964 756q43 63 56.5 124.5T1012 983t-78 41H92q-56 0-78-41T5.5 880.5T62 756l259-328V128h-64q-26 0-45-18.5t-19-45T212 19t45-19h512q26 0 45 19t19 45.5t-19 45t-45 18.5h-64v300zM577 448V128H449v320L300 640h426z"></svg:path>`,
})
export class WhhFlaskfullIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
