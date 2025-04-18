import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsStylusSIcon],svg[file-icons-stylus-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m306.507 119.687l-10.366-7.211c51.83-59.042-10.366-101.858-39.661-57.69c-27.493 41.464 9.915 92.844 32.45 159.547c35.605 105.464 30.197 162.252-15.774 217.237c-115.83 137.914-332.616 85.182-257.8-57.69c25.69-49.126 70.309-84.28 146.477-75.717c7.211 9.014-.45 12.62-5.859 15.324c-61.746 30.648-97.35 153.688-43.718 150.984c25.69-.901 64-26.591 83.83-70.309c22.986-50.929-5.408-114.928-25.69-175.322C123.073 76.42 230.34-46.62 352.93 17.378c46.422 24.338 15.775 109.52-46.422 102.309"></svg:path>`,
})
export class FileIconsStylusSIcon {
  readonly viewBox = input("0 0 376 512")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
