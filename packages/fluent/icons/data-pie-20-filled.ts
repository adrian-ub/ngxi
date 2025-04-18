import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataPie20FilledIcon],svg[fluent-data-pie-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.014 4.069l-.011.001a7 7 0 0 0-4.29 2.343a6.97 6.97 0 0 0-1.677 5.303a7 7 0 0 0 13.894.281v-.01a7 7 0 0 0 .05-.45a.5.5 0 0 0-.499-.537H10.5A1.5 1.5 0 0 1 9 9.5V4.519a.5.5 0 0 0-.538-.499q-.226.018-.448.049m9.985 5.067c-.01.498-.44.864-.937.864H11a1 1 0 0 1-1-1V2.938c0-.498.366-.927.864-.937L11 2a7 7 0 0 1 6.999 7.136"></svg:path>`,
})
export class FluentDataPie20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
