import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnFeatherIcon],svg[typcn-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.68 1.017L11.5.983l-.18.033a10.15 10.15 0 0 0-.82 19.779V22a1 1 0 1 0 2 0v-1.205a10.147 10.147 0 0 0-.82-19.778M12.5 18.7V7a1 1 0 1 0-2 0v11.7a8.14 8.14 0 0 1-5.49-7.483l3.137 3.137a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.707L5.085 9.878a8.1 8.1 0 0 1 .877-2.709l2.184 2.185a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.707L6.501 6.294A8.13 8.13 0 0 1 11.5 3.019a8.14 8.14 0 0 1 4.999 3.275l-2.353 2.353a.5.5 0 0 0 .708.707l2.184-2.185c.444.832.744 1.745.877 2.709l-3.769 3.769a.5.5 0 0 0 .708.707l3.137-3.137A8.14 8.14 0 0 1 12.5 18.7"></svg:path>`,
})
export class TypcnFeatherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
