import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhConeIcon],svg[whh-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-27 0-45.5-19T0 959.5t18.5-45T64 896h64l49-128h670l49 128h64q26 0 45 18.5t19 45t-19 45.5t-45 19M423 128l25-64q22-64 64-64q45 0 64 64l25 64zm276 256H325l49-128h276zM276 512h472l50 128H226z"></svg:path>`,
})
export class WhhConeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
