import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStopCircleIcon],svg[mage-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M15.089 7.882H8.91a1.03 1.03 0 0 0-1.03 1.03v6.177c0 .568.462 1.03 1.03 1.03h6.178a1.03 1.03 0 0 0 1.03-1.03V8.91a1.03 1.03 0 0 0-1.03-1.03"></svg:path></svg:g>`,
})
export class MageStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
