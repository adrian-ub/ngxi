import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdRedoIcon],svg[ion-md-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 337.2L83.8 352c22.9-69.7 88.7-117.8 166-117.8 42.8 0 81.5 15.7 111.8 41.1L282.5 352H480V160l-79.6 76.3c-40.4-35.2-92.8-56.8-150.7-56.8-101.5.1-187.3 66.2-217.7 157.7z" fill="currentColor"></svg:path>`,
})
export class IonMdRedoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
