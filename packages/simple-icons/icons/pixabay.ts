import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPixabayIcon],svg[simple-icons-pixabay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.627 10.234a.89.89 0 0 1-.887-.888H1.7c0 .49-.398.888-.888.888H0v9.447h15.56v-9.447H5.64zm-.886 2.796h-3.04v-1.323h3.04zm5.344 5.234a3.27 3.27 0 0 1-3.267-3.269c0-1.802 1.466-3.193 3.267-3.193s3.267 1.39 3.267 3.193a3.27 3.27 0 0 1-3.267 3.269m1.756-3.269c0 .969-.788 1.757-1.756 1.757a1.76 1.76 0 0 1-1.756-1.757c0-.969.788-1.757 1.756-1.757s1.756.788 1.756 1.757M24 9.501l-3.93 10.156l-3.164-1.226V16.7l2.242.869l2.765-7.146L11.55 6.407l-.96 2.482H8.86l1.769-4.57z"></svg:path>`,
})
export class SimpleIconsPixabayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
