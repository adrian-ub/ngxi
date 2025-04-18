import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorEllipseIcon],svg[mdi-vector-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-2.65c-.97 2.12-2.92 3.78-5.35 4.54V22H9v-2.46C5.5 18.45 3 15.5 3 12c0-4.42 4.03-8 9-8c3.78 0 7 2.07 8.35 5zm-6 6V9h1.06C16.85 7.21 14.59 6 12 6c-3.87 0-7 2.69-7 6c0 2.39 1.64 4.46 4 5.42V16h6v1.42c1.29-.52 2.35-1.37 3.06-2.42zm2-2h2v-2h-2zm-8 7h2v-2h-2z"></svg:path>`,
})
export class MdiVectorEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
