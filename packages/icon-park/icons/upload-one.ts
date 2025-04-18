import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadOneIcon],svg[icon-park-upload-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.6777 20.271C7.27476 21.3181 4 25.2766 4 30C4 35.5228 8.47715 40 14 40C14.9474 40 15.864 39.8683 16.7325 39.6221"></svg:path><svg:path d="M36.0547 20.271C40.4577 21.3181 43.7324 25.2766 43.7324 30C43.7324 35.5228 39.2553 40 33.7324 40C32.785 40 31.8684 39.8683 30.9999 39.6221"></svg:path><svg:path d="M36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20"></svg:path><svg:path d="M17.0654 27.8812L23.9999 20.9238L31.1318 28.0002"></svg:path><svg:path d="M24 38.0001V24.4619"></svg:path></svg:g>`,
})
export class IconParkUploadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
