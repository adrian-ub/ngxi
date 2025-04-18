import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlutterIcon],svg[lineicons-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.953 11.232l-5.301 5.383l5.3 5.385h-6.059l-2.272-2.307l-3.03-3.078l5.302-5.383zM13.893 2L4.047 12l3.03 3.078L19.953 2z"></svg:path>`,
})
export class LineiconsFlutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
