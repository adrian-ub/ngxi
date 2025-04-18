import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLineNextjsIcon],svg[devicon-line-nextjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64s64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2c-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z"></svg:path><svg:path fill="currentColor" d="m78.6 73.3l7.5 11.3V41.8h-7.5z"></svg:path>`,
})
export class DeviconLineNextjsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
