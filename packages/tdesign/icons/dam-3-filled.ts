import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam3FilledIcon],svg[tdesign-dam-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20h-1V10c0-5.6-4.529-9-9-9s-9 3.4-9 9v10H2v2h8v-2H9v-9h6v9h-1v2h8zm-5-9h2v9h-2zM5 11h2v9H5zm9-4h-4V5h4z"></svg:path>`,
})
export class TdesignDam3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
