import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideo32FilledIcon],svg[fluent-video-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10.5A4.5 4.5 0 0 1 6.5 6h10a4.5 4.5 0 0 1 4.5 4.5v11a4.5 4.5 0 0 1-4.5 4.5h-10A4.5 4.5 0 0 1 2 21.5zm27.996-.746c0-1.814-2.036-2.882-3.529-1.852l-3.967 2.74v10.716l3.968 2.74c1.492 1.03 3.528-.038 3.528-1.852z"></svg:path>`,
})
export class FluentVideo32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
