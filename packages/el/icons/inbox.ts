import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elInboxIcon],svg[el-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478.125 0v280.005h-142.31L600 676.318l264.185-396.313h-142.31V0zM0 621.753V1200h1200V621.753H805.811c0 113.627-92.184 205.811-205.811 205.811S394.189 735.38 394.189 621.753z"></svg:path>`,
})
export class ElInboxIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
