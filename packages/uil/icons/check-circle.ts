import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCheckCircleIcon],svg[uil-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.72 8.79l-4.29 4.3l-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 .71.29a1 1 0 0 0 .7-.29l5-5a1 1 0 0 0 0-1.42a1 1 0 0 0-1.41 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
