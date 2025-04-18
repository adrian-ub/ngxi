import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatListBulletedIcon],svg[zmdi-format-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 160q13 0 22.5 9.5T64 192t-9.5 22.5T32 224t-22.5-9.5T0 192t9.5-22.5T32 160m0-128q13 0 22.5 9.5T64 64t-9.5 22.5T32 96T9.5 86.5T0 64t9.5-22.5T32 32m0 260q12 0 20 8t8 20t-8 20t-20 8t-20-8t-8-20t8-20t20-8m64 49v-42h299v42zm0-128v-42h299v42zm0-170h299v42H96z"></svg:path>`,
})
export class ZmdiFormatListBulletedIcon {
  readonly viewBox = input("0 0 400 384")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
