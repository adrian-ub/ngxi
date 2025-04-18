import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8PictureIcon],svg[icons8-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v22h28V5zm2 2h24v13.906l-5.28-5.312l-.72-.72l-.72.72l-3.81 3.812l-5.75-5.812l-.72-.72l-.72.72L4 19.874zm20 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 24 9m-13 6.72L20.188 25H4v-2.28zm11 2l6 6V25h-4.97l-4.155-4.188z"></svg:path>`,
})
export class Icons8PictureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
