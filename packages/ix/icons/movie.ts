import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMovieIcon],svg[ix-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 324.48L328.96 256L192 187.52z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M64 448h384V64H64zm341.333-42.667H106.667V106.667h298.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxMovieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
