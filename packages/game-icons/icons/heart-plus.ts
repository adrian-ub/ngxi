import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsHeartPlusIcon],svg[game-icons-heart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372.48 31.215c-77.65 0-116.48 65.73-116.48 65.73s-38.83-65.72-116.48-65.72c-37.14 0-107.77 33.72-107.77 125.13c0 161.24 224.25 324.43 224.25 324.43s224.25-163.19 224.25-324.43c0-91.42-70.63-125.13-107.77-125.14m-145.492 115.02h60.698v79.415h79.238v60.7h-79.238v79.884h-60.698V286.35h-80.064v-60.7h80.064z"></svg:path>`,
})
export class GameIconsHeartPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
