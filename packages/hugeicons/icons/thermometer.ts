import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThermometerIcon],svg[hugeicons-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m13.88 15.937l6.794-7.764c.748-.855 1.122-1.282 1.251-1.76a2.14 2.14 0 0 0-.042-1.258c-.16-.468-.562-.87-1.365-1.673s-1.205-1.204-1.673-1.365a2.14 2.14 0 0 0-1.258-.042c-.477.13-.905.503-1.76 1.251L8.063 10.12c-.956.836-1.433 1.254-1.715 1.806c-.28.551-.338 1.184-.453 2.448l-.023.258c-.061.668-.092 1.002-.22 1.307c-.127.304-.343.56-.777 1.072l-2.6 3.073a1.164 1.164 0 0 0 1.64 1.64l3.074-2.6c.512-.433.768-.65 1.072-.777s.639-.158 1.307-.219l.258-.023c1.264-.115 1.897-.172 2.448-.454c.552-.28.97-.758 1.806-1.714"></svg:path><svg:path d="m7.79 9.895l1.58.948a.787.787 0 0 1 .27 1.08l-.292.486a1.634 1.634 0 0 0 2.242 2.243l.487-.292a.787.787 0 0 1 1.08.27l.948 1.58m3.158-9.473l-3.158 3.158"></svg:path></svg:g>`,
})
export class HugeiconsThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
