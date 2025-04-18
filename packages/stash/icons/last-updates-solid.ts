import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashLastUpdatesSolidIcon],svg[stash-last-updates-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.579 8.495l-.593-1.026a1 1 0 0 0-1.732 1l1.75 3.031a1 1 0 0 0 1.366.366l3.031-1.75a1 1 0 0 0-1-1.732l-.774.447a7 7 0 1 1 1.16 7.981a1 1 0 0 0-1.452 1.376A9 9 0 1 0 12.87 3a9 9 0 0 0-8.292 5.495"></svg:path><svg:path fill="currentColor" d="M12.87 7a1 1 0 0 1 1 1v3.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-2-2A1 1 0 0 1 11.87 12V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class StashLastUpdatesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
