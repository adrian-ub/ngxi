import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCheckCircleLightIcon],svg[stash-check-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.354 10.354a.5.5 0 0 0-.708-.708L11 13.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"></svg:path><svg:path fill="currentColor" d="M12 20.5a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17M4.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 0 0-15 0"></svg:path>`,
})
export class StashCheckCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
