import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHammer1Icon],svg[lineicons-hammer-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.664 2a.75.75 0 0 0-.75.75v4.184c0 .414.336.75.75.75h3.716l-.557 11.961A2.25 2.25 0 0 0 12.07 22h.857a2.25 2.25 0 0 0 2.248-2.355l-.557-11.961h3.717a.75.75 0 0 0 .75-.75V6.75A4.75 4.75 0 0 0 14.335 2zm6.453 5.684l.56 12.031a.75.75 0 0 1-.75.785h-.857a.75.75 0 0 1-.749-.785l.56-12.031zm4.419-1.5H7.415V3.5h6.92a3.25 3.25 0 0 1 3.2 2.684"></svg:path>`,
})
export class LineiconsHammer1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
