import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsWenyanIcon],svg[file-icons-wenyan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 113V85c36.35 0 42-17.16 42-23c0-11.797-20.708-14.138-20-32c1.6-40.356 58.163-39.615 68 0c11.493 46.284-21.558 87.005-90 83m125-7h175V65H125zM0 187h125v-41H0zm173 0h127v-41H173zM0 267h125v-41H0zm173 0h127v-41H173zm-48 81v-41H20v205h105v-41H66V348zm48-41v41h59v123h-59v41h105V307z"></svg:path>`,
})
export class FileIconsWenyanIcon {
  readonly viewBox = input("0 0 300 512")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
