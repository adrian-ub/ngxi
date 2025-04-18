import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKahootIcon],svg[simple-icons-kahoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.557 18.87l2.747-17.513L16.174 0zM.696 2.348v19.078l4.035.14l-.035-6.679l2.487-2.4l2.626 9.078h3.565L10.087 9.722l4.957-5.444l-3.496-1.339L4.73 9.443V1.322zm18.295 17.86l-.99 2.331L20.12 24l2.088-1.235l-.887-2.556Z"></svg:path>`,
})
export class SimpleIconsKahootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
