import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSledIcon],svg[fluent-emoji-flat-sled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CA0B4A" d="M11 22v6h2v-6zm13 0v6h2v-6z"></svg:path><svg:path fill="#F8312F" d="M3 16a1 1 0 0 1 1 .993V17l.003.058a2.7 2.7 0 0 0 .266.995c.129.256.305.482.551.646c.24.16.605.301 1.18.301h3v2H6c-.925 0-1.685-.234-2.29-.637a3.63 3.63 0 0 1-1.23-1.416A4.7 4.7 0 0 1 2 17.025V17a1 1 0 0 1 1-1m0 8a1 1 0 0 1 1 .993V25l.003.058a2.7 2.7 0 0 0 .266.995c.129.256.305.482.551.646c.24.16.605.301 1.18.301h23a1 1 0 1 1 0 2H6c-.925 0-1.685-.234-2.29-.637a3.63 3.63 0 0 1-1.23-1.416A4.7 4.7 0 0 1 2 25.025V25a1 1 0 0 1 1-1"></svg:path><svg:path fill="#E39D89" d="M8 19.897V21.5A1.5 1.5 0 0 0 9.5 23h18a1.5 1.5 0 0 0 1.5-1.5v-1.603a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1"></svg:path><svg:path fill="#F3C07B" d="M8 12a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1v1.5l-.5.5h-20l-.5-.5zm0 3l.5-.5h20l.5.5v2l-.5.5h-20L8 17zm.5 3l-.5.5V20a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-1.5l-.5-.5z"></svg:path><svg:path fill="#F3AD61" d="M29 13.5H8V15h21zm0 3.5H8v1.5h21z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
