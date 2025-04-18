import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCutterFIcon],svg[jam-cutter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.684 17.995l-1.928 2.298L.588 19.5l4.5-5.362zm2.052-.89l-6.129-5.142l8.356-9.958a4 4 0 0 1 6.129 5.142l-8.356 9.959zm5.916-12.62a1 1 0 0 0-1.409.124l-.643.766a1 1 0 0 0 1.532 1.286l.643-.766a1 1 0 0 0-.123-1.41"></svg:path>`,
})
export class JamCutterFIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
