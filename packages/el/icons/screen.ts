import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elScreenIcon],svg[el-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 103.564v792.188h435.718v114.186H329.517v86.498h540.967v-86.498H764.282V895.752H1200V103.564zm147.583 149.561h904.833v493.14H147.583z"></svg:path>`,
})
export class ElScreenIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
