import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringe24pxIcon],svg[healthicons-syringe-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 3.707a1 1 0 0 0-1.414-1.414l-1 1l-1 1l-1 1a1 1 0 0 0 1.414 1.414L4 6.414L6.586 9l-2.293 2.293l1.414 1.414L7 11.414l7.086 7.086a2 2 0 0 0 2.828 0l.263-.263l2.293 2.293l1.06-1.06l-2.293-2.293l.263-.263a2 2 0 0 0 0-2.828l-.762-.763l-1.208 1.207a.75.75 0 1 1-1.06-1.06l1.207-1.208l-1.94-1.939l-1.207 1.207a.75.75 0 1 1-1.06-1.06l1.207-1.208L11.414 7l1.293-1.293l-1.414-1.414L9 6.586L6.414 4z"></svg:path>`,
})
export class HealthiconsSyringe24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
