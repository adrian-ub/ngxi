import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primePauseCircleIcon],svg[prime-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m7-3.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class PrimePauseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
