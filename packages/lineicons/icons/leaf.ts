import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLeafIcon],svg[lineicons-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.6 58.2l-13-12.9c3-3.7 4.5-8.1 4.5-12.9c0-7.1-3.5-14.5-9.9-20.8C26.6-5 6 4.9 5.8 5l-.6.3l-.4.7c-.1.2-10 20.7 6.7 37.2c6.5 6.5 14.1 9.8 21 9.8c4.7 0 9.1-1.5 12.9-4.6l13 12.9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.8.9-2.2 0-3.1M14.6 40C1.8 27.2 7.1 12.1 8.5 8.7C12 7.2 27.2 2 40.1 14.8c5.5 5.5 8.5 11.7 8.5 17.7c0 3.6-1.1 6.9-3.3 9.7L38 34.9V22.2c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.2l-8.2-8.2c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l5.8 5.8h-8.2c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h12.7l9.7 9.6C34.7 51 23.7 49 14.6 40"></svg:path>`,
})
export class LineiconsLeafIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
