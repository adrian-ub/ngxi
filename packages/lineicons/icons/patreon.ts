import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPatreonIcon],svg[lineicons-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.645a7.2 7.2 0 0 1-7.193 7.193a7.2 7.2 0 0 1-7.194-7.193a7.2 7.2 0 0 1 7.193-7.194C18.775 2.42 22 5.645 22 9.645M2 21.58h3.548V2.42H2z"></svg:path>`,
})
export class LineiconsPatreonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
