import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaFileRemoveFillIcon],svg[eva-file-remove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67M14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m.71-7a.79.79 0 0 1-.71-.85V4l3.74 4Z"></svg:path>`,
})
export class EvaFileRemoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
