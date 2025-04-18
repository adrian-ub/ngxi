import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrop12FilledIcon],svg[fluent-drop-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a.5.5 0 0 1 .354.146v.002A15 15 0 0 1 8.1 3.217C8.806 4.244 9.5 5.597 9.5 7c0 1.337-.36 2.352-1.019 3.035C7.821 10.718 6.928 11 6 11s-1.822-.282-2.481-.965S2.5 8.337 2.5 7c0-1.403.694-2.756 1.4-3.783a15 15 0 0 1 1.745-2.07h.001A.5.5 0 0 1 6 1"></svg:path>`,
})
export class FluentDrop12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
