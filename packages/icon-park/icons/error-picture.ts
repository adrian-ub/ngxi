import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkErrorPictureIcon],svg[icon-park-error-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 23.9941C44 22.8896 43.1046 21.9941 42 21.9941C40.8954 21.9941 40 22.8896 40 23.9941H44ZM24 7.99414C25.1046 7.99414 26 7.09871 26 5.99414C26 4.88957 25.1046 3.99414 24 3.99414V7.99414ZM39 39.9941H9V43.9941H39V39.9941ZM8 38.9941V8.99414H4V38.9941H8ZM40 23.9941V38.9941H44V23.9941H40ZM9 7.99414H24V3.99414H9V7.99414ZM9 39.9941C8.44772 39.9941 8 39.5464 8 38.9941H4C4 41.7556 6.23857 43.9941 9 43.9941V39.9941ZM39 43.9941C41.7614 43.9941 44 41.7556 44 38.9941H40C40 39.5464 39.5523 39.9941 39 39.9941V43.9941ZM8 8.99414C8 8.44186 8.44771 7.99414 9 7.99414V3.99414C6.23858 3.99414 4 6.23272 4 8.99414H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 7L41 15"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 7L33 15"></svg:path></svg:g>`,
})
export class IconParkErrorPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
