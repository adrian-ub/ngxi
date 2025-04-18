import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIcons1cIcon],svg[file-icons-1c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116.364 116.364v279.272H46.545V209.455H0v-69.819h46.545v-23.272zm228.072 116.363h72.146c-11.637-65.163-67.491-116.363-137.31-116.363c-76.8 0-139.636 62.836-139.636 139.636c0 75.242 60.315 137.158 134.982 139.636H512v-69.818H279.273C213 324.333 190.947 251.405 226.2 210.175c34.884-40.507 100.83-27.666 118.417 23.057"></svg:path>`,
})
export class FileIcons1cIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
