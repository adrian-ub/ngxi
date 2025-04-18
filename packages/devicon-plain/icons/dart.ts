import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainDartIcon],svg[devicon-plain-dart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m86.6 25l3 .1c1.1.1 2.2.3 3.4.5l-2.5-7.4L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L29.2 25.1zm6.1 3.6c-1.2-.2-2.3-.4-3.3-.5l-2.9-.1l-56 .1l78.6 78.6l6.1-13.8zM28.9 92.2l64.3 22.7l13.8-6.1l-78.6-78.6v56.1l.1 2.7c0 .9.1 2 .4 3.2"></svg:path><svg:path d="M106.9 34.3c-2.6-2.6-7-5.1-11.3-6.5L118.4 93l-6.9 15.7l15.8-5.2V54.8zm-13.5 83.8l-65-22.9c1.4 4.3 3.8 8.7 6.5 11.4l21.3 21.2l47.6.1l5.3-16.7zm-67.9-29l-.1-2.7V28.9L1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8l7.3 2.6c-.3-1.3-.5-2.5-.5-3.8"></svg:path></svg:g>`,
})
export class DeviconPlainDartIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
