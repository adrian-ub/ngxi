import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsThreadIcon],svg[system-uicons-thread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3l2.468-.001l1.715 2.43a1 1 0 0 0 .696.415l.121.008a1 1 0 0 0 .993-.884l.007-.116l.001-1.853l.999.001a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3z"></svg:path><svg:path d="m6.5 13.5l-2 2v-4h-.906a2 2 0 0 1-2-1.977l-.07-6a2 2 0 0 1 2-2.023H12.5a2 2 0 0 1 2 2v2"></svg:path></svg:g>`,
})
export class SystemUiconsThreadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
