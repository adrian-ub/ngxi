import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsYandexIcon],svg[file-icons-yandex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.01 319.442V512H256V0h-83.63C90.186 0 21.09 55.511 21.09 163.677c0 77.168 30.552 119 76.374 142.073L0 512h64.73l88.731-192.558zm-.175-44.918h-29.81c-48.733 0-88.746-26.684-88.746-109.62c0-85.808 43.638-116.441 88.745-116.441h29.811z"></svg:path>`,
})
export class FileIconsYandexIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
