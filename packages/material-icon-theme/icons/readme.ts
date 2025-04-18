import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeReadmeIcon],svg[material-icon-theme-readme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="#42a5f5" d="M8 1C4.136 1 1 4.136 1 8s3.136 7 7 7s7-3.136 7-7s-3.136-7-7-7m1 11H7V7.5h2zm0-6H7V4h2z"></svg:path></svg:g>`,
})
export class MaterialIconThemeReadmeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
