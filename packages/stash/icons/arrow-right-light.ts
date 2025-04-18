import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightLightIcon],svg[stash-arrow-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.646 6.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l4.147-4.146H6a.5.5 0 0 1 0-1h10.793l-4.147-4.146a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class StashArrowRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
