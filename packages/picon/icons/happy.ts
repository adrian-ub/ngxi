import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHappyIcon],svg[picon-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h4L5 6H3m2-2V2h1v2M0 8h8V0H0m2 4V2h1v2M1 7V1h6v6"></svg:path>`,
})
export class PiconHappyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
